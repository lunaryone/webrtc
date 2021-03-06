#[cfg(test)]
mod test {
    use crate::{context::Context, protection_profile::ProtectionProfile};

    pub const MASTER_KEY: [u8; 16] = [
        0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e,
        0x0f,
    ];
    pub const MASTER_SALT: [u8; 12] = [
        0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 0xaa, 0xab,
    ];

    pub const DECRYPTED_RTP_PACKET: [u8; 28] = [
        0x80, 0x0f, 0x12, 0x34, 0xde, 0xca, 0xfb, 0xad, 0xca, 0xfe, 0xba, 0xbe, 0xab, 0xab, 0xab,
        0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab,
    ];
    pub const ENCRYPTED_RTP_PACKET: [u8; 44] = [
        0x80, 0x0f, 0x12, 0x34, 0xde, 0xca, 0xfb, 0xad, 0xca, 0xfe, 0xba, 0xbe, 0xc5, 0x00, 0x2e,
        0xde, 0x04, 0xcf, 0xdd, 0x2e, 0xb9, 0x11, 0x59, 0xe0, 0x88, 0x0a, 0xa0, 0x6e, 0xd2, 0x97,
        0x68, 0x26, 0xf7, 0x96, 0xb2, 0x01, 0xdf, 0x31, 0x31, 0xa1, 0x27, 0xe8, 0xa3, 0x92,
    ];

    pub const DECRYPTED_RTCP_PACKET: [u8; 24] = [
        0x81, 0xc8, 0x00, 0x0b, 0xca, 0xfe, 0xba, 0xbe, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab,
        0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab,
    ];
    pub const ENCRYPTED_RTCP_PACKET: [u8; 44] = [
        0x81, 0xc8, 0x00, 0x0b, 0xca, 0xfe, 0xba, 0xbe, 0xc9, 0x8b, 0x8b, 0x5d, 0xf0, 0x39, 0x2a,
        0x55, 0x85, 0x2b, 0x6c, 0x21, 0xac, 0x8e, 0x70, 0x25, 0xc5, 0x2c, 0x6f, 0xbe, 0xa2, 0xb3,
        0xb4, 0x46, 0xea, 0x31, 0x12, 0x3b, 0xa8, 0x8c, 0xe6, 0x1e, 0x80, 0x00, 0x00, 0x01,
    ];

    #[test]
    fn test_encrypt_rtp() {
        let mut ctx = Context::new(
            &MASTER_KEY,
            &MASTER_SALT,
            ProtectionProfile::AEADAES128GCM,
            None,
            None,
        )
        .expect("Error creating srtp context");

        let gotten_encrypted_rtp_packet = ctx
            .encrypt_rtp(&DECRYPTED_RTP_PACKET)
            .expect("Error encrypting rtp payload");

        assert_eq!(gotten_encrypted_rtp_packet, ENCRYPTED_RTP_PACKET)
    }

    #[test]
    fn test_decrypt_rtp() {
        let mut ctx = Context::new(
            &MASTER_KEY,
            &MASTER_SALT,
            ProtectionProfile::AEADAES128GCM,
            None,
            None,
        )
        .expect("Error creating srtp context");

        let gotten_decrypted_rtp_packet = ctx
            .decrypt_rtp(&ENCRYPTED_RTP_PACKET)
            .expect("Error decrypting rtp payload");

        assert_eq!(gotten_decrypted_rtp_packet, DECRYPTED_RTP_PACKET)
    }

    #[test]
    fn test_encrypt_rtcp() {
        let mut ctx = Context::new(
            &MASTER_KEY,
            &MASTER_SALT,
            ProtectionProfile::AEADAES128GCM,
            None,
            None,
        )
        .expect("Error creating srtp context");

        let gotten_encrypted_rtcp_packet = ctx
            .encrypt_rtcp(&DECRYPTED_RTCP_PACKET)
            .expect("Error encrypting rtcp payload");

        assert_eq!(gotten_encrypted_rtcp_packet, ENCRYPTED_RTCP_PACKET)
    }

    #[test]
    fn test_decrypt_rtcp() {
        let mut ctx = Context::new(
            &MASTER_KEY,
            &MASTER_SALT,
            ProtectionProfile::AEADAES128GCM,
            None,
            None,
        )
        .expect("Error creating srtp context");

        let gotten_decrypted_rtcp_packet = ctx
            .decrypt_rtcp(&ENCRYPTED_RTCP_PACKET)
            .expect("Error decrypting rtcp payload");

        assert_eq!(gotten_decrypted_rtcp_packet, DECRYPTED_RTCP_PACKET)
    }
}
