// AES-CCM (Counter with CBC-MAC)
// Alternative to GCM mode.
// Available in OpenSSL as of TLS 1.3 (2018), but disabled by default.
// Two AES computations per block, thus expected to be somewhat slower than AES-GCM.
// RFC 6655 year 2012 https://tools.ietf.org/html/rfc6655
// Much lower adoption, probably because it came after GCM and offer no significant benefit.

// https://github.com/RustCrypto/AEADs
// https://docs.rs/ccm/0.3.0/ccm/ Or https://crates.io/crates/aes-ccm?

use util::Error;

use rand::Rng;

use std::io::Cursor;

use super::*;
use crate::content::*;
use crate::errors::*;
use crate::record_layer::record_layer_header::*;

use aes::Aes256;
use ccm::aead::{generic_array::GenericArray, AeadInPlace, NewAead};
use ccm::{
    consts::{U12, U16, U8},
    Ccm,
};

const CRYPTO_CCM_8_TAG_LENGTH: usize = 8;
const CRYPTO_CCM_TAG_LENGTH: usize = 16;
const CRYPTO_CCM_NONCE_LENGTH: usize = 12;

type AesCcm8 = Ccm<Aes256, U8, U12>;
type AesCcm = Ccm<Aes256, U16, U12>;

pub enum CryptoCcmTagLen {
    CryptoCcm8TagLength,
    CryptoCcmTagLength,
}

enum CryptoCcm {
    CryptoCcm8(AesCcm8),
    CryptoCcm(AesCcm),
}

// State needed to handle encrypted input/output
pub struct CryptCcm {
    local_ccm: CryptoCcm,
    remote_ccm: CryptoCcm,
    local_write_iv: Vec<u8>,
    remote_write_iv: Vec<u8>,
}

impl CryptCcm {
    pub fn new(
        tag_len: CryptoCcmTagLen,
        local_key: &[u8],
        local_write_iv: &[u8],
        remote_key: &[u8],
        remote_write_iv: &[u8],
    ) -> Self {
        let key = GenericArray::from_slice(local_key);
        let local_ccm = match tag_len {
            CryptoCcmTagLen::CryptoCcmTagLength => CryptoCcm::CryptoCcm(AesCcm::new(key)),
            CryptoCcmTagLen::CryptoCcm8TagLength => CryptoCcm::CryptoCcm8(AesCcm8::new(key)),
        };

        let key = GenericArray::from_slice(remote_key);
        let remote_ccm = match tag_len {
            CryptoCcmTagLen::CryptoCcmTagLength => CryptoCcm::CryptoCcm(AesCcm::new(key)),
            CryptoCcmTagLen::CryptoCcm8TagLength => CryptoCcm::CryptoCcm8(AesCcm8::new(key)),
        };

        CryptCcm {
            local_ccm,
            local_write_iv: local_write_iv.to_vec(),
            remote_ccm,
            remote_write_iv: remote_write_iv.to_vec(),
        }
    }

    pub fn encrypt(&self, pkt_rlh: &RecordLayerHeader, raw: &[u8]) -> Result<Vec<u8>, Error> {
        let payload = &raw[RECORD_LAYER_HEADER_SIZE..];
        let raw = &raw[..RECORD_LAYER_HEADER_SIZE];

        let mut nonce = vec![0u8; CRYPTO_CCM_NONCE_LENGTH];
        nonce[..4].copy_from_slice(&self.local_write_iv[..4]);
        rand::thread_rng().fill(&mut nonce[4..]);
        let nonce = GenericArray::from_slice(&nonce);

        let additional_data = generate_aead_additional_data(pkt_rlh, payload.len());

        let mut buffer: Vec<u8> = Vec::new();
        buffer.extend_from_slice(payload);

        match &self.local_ccm {
            CryptoCcm::CryptoCcm(ccm) => {
                ccm.encrypt_in_place(nonce, &additional_data, &mut buffer)?;
            }
            CryptoCcm::CryptoCcm8(ccm8) => {
                ccm8.encrypt_in_place(nonce, &additional_data, &mut buffer)?;
            }
        }

        let mut r = Vec::with_capacity(raw.len() + nonce.len() + buffer.len());

        r.extend_from_slice(raw);
        r.extend_from_slice(&nonce[4..]);
        r.extend_from_slice(&buffer);

        // Update recordLayer size to include explicit nonce
        let r_len = (r.len() - RECORD_LAYER_HEADER_SIZE) as u16;
        r[RECORD_LAYER_HEADER_SIZE - 2..RECORD_LAYER_HEADER_SIZE]
            .copy_from_slice(&r_len.to_be_bytes());

        Ok(r)
    }

    pub fn decrypt(&self, r: &[u8]) -> Result<Vec<u8>, Error> {
        let mut reader = Cursor::new(r);
        let h = RecordLayerHeader::unmarshal(&mut reader)?;
        if h.content_type == ContentType::ChangeCipherSpec {
            // Nothing to encrypt with ChangeCipherSpec
            return Ok(r.to_vec());
        }

        if r.len() <= (RECORD_LAYER_HEADER_SIZE + 8) {
            return Err(ERR_NOT_ENOUGH_ROOM_FOR_NONCE.clone());
        }

        let mut nonce = vec![];
        nonce.extend_from_slice(&self.remote_write_iv[..4]);
        nonce.extend_from_slice(&r[RECORD_LAYER_HEADER_SIZE..RECORD_LAYER_HEADER_SIZE + 8]);
        let nonce = GenericArray::from_slice(&nonce);

        let out = &r[RECORD_LAYER_HEADER_SIZE + 8..];

        let mut buffer: Vec<u8> = Vec::new();
        buffer.extend_from_slice(out);

        match &self.remote_ccm {
            CryptoCcm::CryptoCcm(ccm) => {
                let additional_data =
                    generate_aead_additional_data(&h, out.len() - CRYPTO_CCM_TAG_LENGTH);
                ccm.decrypt_in_place(nonce, &additional_data, &mut buffer)?;
            }
            CryptoCcm::CryptoCcm8(ccm8) => {
                let additional_data =
                    generate_aead_additional_data(&h, out.len() - CRYPTO_CCM_8_TAG_LENGTH);
                ccm8.decrypt_in_place(nonce, &additional_data, &mut buffer)?;
            }
        }

        let mut d = Vec::with_capacity(RECORD_LAYER_HEADER_SIZE + buffer.len());
        d.extend_from_slice(&r[..RECORD_LAYER_HEADER_SIZE]);
        d.extend_from_slice(&buffer);

        Ok(d)
    }
}
