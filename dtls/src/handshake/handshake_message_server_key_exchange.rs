#[cfg(test)]
mod handshake_message_server_key_exchange_test;

use super::*;
use crate::curve::named_curve::*;
use crate::curve::*;
use crate::signature_hash_algorithm::*;

use std::io::{Read, Write};

use byteorder::{BigEndian, WriteBytesExt};

use util::Error;

// Structure supports ECDH and PSK
#[derive(Clone, Debug, PartialEq)]
pub struct HandshakeMessageServerKeyExchange {
    pub(crate) identity_hint: Vec<u8>,

    elliptic_curve_type: EllipticCurveType,
    pub(crate) named_curve: NamedCurve,
    pub(crate) public_key: Vec<u8>,
    hash_algorithm: HashAlgorithm,
    signature_algorithm: SignatureAlgorithm,
    signature: Vec<u8>,
}

impl HandshakeMessageServerKeyExchange {
    fn handshake_type() -> HandshakeType {
        HandshakeType::ServerKeyExchange
    }

    pub fn marshal<W: Write>(&self, writer: &mut W) -> Result<(), Error> {
        if !self.identity_hint.is_empty() {
            writer.write_u16::<BigEndian>(self.identity_hint.len() as u16)?;
            writer.write_all(&self.identity_hint)?;
            return Ok(());
        }

        writer.write_u8(self.elliptic_curve_type as u8)?;
        writer.write_u16::<BigEndian>(self.named_curve as u16)?;

        writer.write_u8(self.public_key.len() as u8)?;
        writer.write_all(&self.public_key)?;

        writer.write_u8(self.hash_algorithm as u8)?;
        writer.write_u8(self.signature_algorithm as u8)?;

        writer.write_u16::<BigEndian>(self.signature.len() as u16)?;
        writer.write_all(&self.signature)?;

        Ok(())
    }

    pub fn unmarshal<R: Read>(reader: &mut R) -> Result<Self, Error> {
        let mut data = vec![];
        reader.read_to_end(&mut data)?;

        // If parsed as PSK return early and only populate PSK Identity Hint
        let psk_length = ((data[0] as u16) << 8) | data[1] as u16;
        if data.len() == psk_length as usize + 2 {
            return Ok(HandshakeMessageServerKeyExchange {
                identity_hint: data[2..].to_vec(),

                elliptic_curve_type: EllipticCurveType::Unsupported,
                named_curve: NamedCurve::Unsupported,
                public_key: vec![],
                hash_algorithm: HashAlgorithm::Unsupported,
                signature_algorithm: SignatureAlgorithm::Unsupported,
                signature: vec![],
            });
        }

        let elliptic_curve_type = data[0].into();
        if data[1..].len() < 2 {
            return Err(ERR_BUFFER_TOO_SMALL.clone());
        }

        let named_curve = (((data[1] as u16) << 8) | data[2] as u16).into();
        if data.len() < 4 {
            return Err(ERR_BUFFER_TOO_SMALL.clone());
        }

        let public_key_length = data[3] as usize;
        let mut offset = 4 + public_key_length;
        if data.len() < offset {
            return Err(ERR_BUFFER_TOO_SMALL.clone());
        }
        let public_key = data[4..offset].to_vec();
        if data.len() <= offset {
            return Err(ERR_BUFFER_TOO_SMALL.clone());
        }

        let hash_algorithm = data[offset].into();
        offset += 1;
        if data.len() <= offset {
            return Err(ERR_BUFFER_TOO_SMALL.clone());
        }

        let signature_algorithm = data[offset].into();
        offset += 1;
        if data.len() < offset + 2 {
            return Err(ERR_BUFFER_TOO_SMALL.clone());
        }

        let signature_length = (((data[offset] as u16) << 8) | data[offset + 1] as u16) as usize;
        offset += 2;
        if data.len() < offset + signature_length {
            return Err(ERR_BUFFER_TOO_SMALL.clone());
        }
        let signature = data[offset..offset + signature_length].to_vec();

        Ok(HandshakeMessageServerKeyExchange {
            identity_hint: vec![],

            elliptic_curve_type,
            named_curve,
            public_key,
            hash_algorithm,
            signature_algorithm,
            signature,
        })
    }
}