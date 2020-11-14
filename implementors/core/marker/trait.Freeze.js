(function() {var implementors = {};
implementors["dtls"] = [{"text":"impl Freeze for Alert","synthetic":true,"types":[]},{"text":"impl Freeze for ApplicationData","synthetic":true,"types":[]},{"text":"impl Freeze for ChangeCipherSpec","synthetic":true,"types":[]},{"text":"impl Freeze for CipherSuiteID","synthetic":true,"types":[]},{"text":"impl Freeze for CipherSuiteHash","synthetic":true,"types":[]},{"text":"impl Freeze for CipherSuiteTLSEcdheEcdsaWithAes128GcmSha256","synthetic":true,"types":[]},{"text":"impl Freeze for CipherSuiteTLSEcdheEcdsaWithAes256CbcSha","synthetic":true,"types":[]},{"text":"impl Freeze for ClientCertificateType","synthetic":true,"types":[]},{"text":"impl Freeze for CompressionMethods","synthetic":true,"types":[]},{"text":"impl Freeze for CompressionMethodId","synthetic":true,"types":[]},{"text":"impl Freeze for Config","synthetic":true,"types":[]},{"text":"impl Freeze for INVALID_KEYING_LABELS","synthetic":true,"types":[]},{"text":"impl Freeze for ContentType","synthetic":true,"types":[]},{"text":"impl Freeze for Content","synthetic":true,"types":[]},{"text":"impl Freeze for Certificate","synthetic":true,"types":[]},{"text":"impl Freeze for CryptoPrivateKey","synthetic":true,"types":[]},{"text":"impl Freeze for CryptoCbc","synthetic":true,"types":[]},{"text":"impl Freeze for CryptoGcm","synthetic":true,"types":[]},{"text":"impl Freeze for EllipticCurveType","synthetic":true,"types":[]},{"text":"impl Freeze for NamedCurveKeypair","synthetic":true,"types":[]},{"text":"impl Freeze for NamedCurve","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_CONN_CLOSED","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_DEADLINE_EXCEEDED","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_BUFFER_TOO_SMALL","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_CONTEXT_UNSUPPORTED","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_DTLSPACKET_INVALID_LENGTH","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_HANDSHAKE_IN_PROGRESS","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_INVALID_CONTENT_TYPE","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_INVALID_MAC","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_INVALID_PACKET_LENGTH","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_RESERVED_EXPORT_KEYING_MATERIAL","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_CERTIFICATE_VERIFY_NO_CERTIFICATE","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_CIPHER_SUITE_NO_INTERSECTION","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_CIPHER_SUITE_UNSET","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_CLIENT_CERTIFICATE_NOT_VERIFIED","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_CLIENT_CERTIFICATE_REQUIRED","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_CLIENT_NO_MATCHING_SRTP_PROFILE","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_CLIENT_REQUIRED_BUT_NO_SERVER_EMS","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_COMPRESSION_METHOD_UNSET","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_COOKIE_MISMATCH","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_COOKIE_TOO_LONG","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_IDENTITY_NO_PSK","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_INVALID_CERTIFICATE","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_INVALID_CIPHER_SPEC","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_INVALID_CIPHER_SUITE","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_INVALID_CLIENT_KEY_EXCHANGE","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_INVALID_COMPRESSION_METHOD","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_INVALID_ECDSASIGNATURE","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_INVALID_ELLIPTIC_CURVE_TYPE","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_INVALID_EXTENSION_TYPE","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_INVALID_HASH_ALGORITHM","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_INVALID_NAMED_CURVE","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_INVALID_PRIVATE_KEY","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_INVALID_SNI_FORMAT","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_INVALID_SIGNATURE_ALGORITHM","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_KEY_SIGNATURE_MISMATCH","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_NIL_NEXT_CONN","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_NO_AVAILABLE_CIPHER_SUITES","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_NO_AVAILABLE_SIGNATURE_SCHEMES","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_NO_CERTIFICATES","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_NO_CONFIG_PROVIDED","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_NO_SUPPORTED_ELLIPTIC_CURVES","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_UNSUPPORTED_PROTOCOL_VERSION","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_PSK_AND_CERTIFICATE","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_PSK_AND_IDENTITY_MUST_BE_SET_FOR_CLIENT","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_REQUESTED_BUT_NO_SRTP_EXTENSION","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_SERVER_MUST_HAVE_CERTIFICATE","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_SERVER_NO_MATCHING_SRTP_PROFILE","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_SERVER_REQUIRED_BUT_NO_CLIENT_EMS","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_VERIFY_DATA_MISMATCH","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_HANDSHAKE_MESSAGE_UNSET","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_INVALID_FLIGHT","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_KEY_SIGNATURE_GENERATE_UNIMPLEMENTED","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_KEY_SIGNATURE_VERIFY_UNIMPLEMENTED","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_LENGTH_MISMATCH","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_NOT_ENOUGH_ROOM_FOR_NONCE","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_NOT_IMPLEMENTED","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_SEQUENCE_NUMBER_OVERFLOW","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_UNABLE_TO_MARSHAL_FRAGMENTED","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_INVALID_FSM_TRANSITION","synthetic":true,"types":[]},{"text":"impl Freeze for ExtensionValue","synthetic":true,"types":[]},{"text":"impl Freeze for Extension","synthetic":true,"types":[]},{"text":"impl Freeze for ExtensionServerName","synthetic":true,"types":[]},{"text":"impl Freeze for ExtensionSupportedEllipticCurves","synthetic":true,"types":[]},{"text":"impl Freeze for ExtensionSupportedPointFormats","synthetic":true,"types":[]},{"text":"impl Freeze for ExtensionSupportedSignatureAlgorithms","synthetic":true,"types":[]},{"text":"impl Freeze for ExtensionUseExtendedMasterSecret","synthetic":true,"types":[]},{"text":"impl Freeze for ExtensionUseSRTP","synthetic":true,"types":[]},{"text":"impl Freeze for SRTPProtectionProfile","synthetic":true,"types":[]},{"text":"impl Freeze for Handshake","synthetic":true,"types":[]},{"text":"impl Freeze for HandshakeType","synthetic":true,"types":[]},{"text":"impl Freeze for HandshakeMessage","synthetic":true,"types":[]},{"text":"impl Freeze for HandshakeHeader","synthetic":true,"types":[]},{"text":"impl Freeze for HandshakeMessageCertificate","synthetic":true,"types":[]},{"text":"impl Freeze for HandshakeMessageCertificateRequest","synthetic":true,"types":[]},{"text":"impl Freeze for HandshakeMessageCertificateVerify","synthetic":true,"types":[]},{"text":"impl Freeze for HandshakeMessageClientHello","synthetic":true,"types":[]},{"text":"impl Freeze for HandshakeMessageClientKeyExchange","synthetic":true,"types":[]},{"text":"impl Freeze for HandshakeMessageFinished","synthetic":true,"types":[]},{"text":"impl Freeze for HandshakeMessageHelloVerifyRequest","synthetic":true,"types":[]},{"text":"impl Freeze for HandshakeMessageServerHello","synthetic":true,"types":[]},{"text":"impl Freeze for HandshakeMessageServerHelloDone","synthetic":true,"types":[]},{"text":"impl Freeze for HandshakeMessageServerKeyExchange","synthetic":true,"types":[]},{"text":"impl Freeze for HandshakeRandom","synthetic":true,"types":[]},{"text":"impl Freeze for RecordLayer","synthetic":true,"types":[]},{"text":"impl Freeze for ProtocolVersion","synthetic":true,"types":[]},{"text":"impl Freeze for RecordLayerHeader","synthetic":true,"types":[]},{"text":"impl Freeze for SignatureHashAlgorithm","synthetic":true,"types":[]},{"text":"impl Freeze for HashAlgorithm","synthetic":true,"types":[]},{"text":"impl Freeze for SignatureAlgorithm","synthetic":true,"types":[]}];
implementors["rtcp"] = [{"text":"impl Freeze for CompoundPacket","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_INVALID_TOTAL_LOST","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_INVALID_HEADER","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_EMPTY_COMPOUND","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_BAD_FIRST_PACKET","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_MISSING_CNAME","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_PACKET_BEFORE_CNAME","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_TOO_MANY_REPORTS","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_TOO_MANY_CHUNKS","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_TOO_MANY_SOURCES","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_PACKET_TOO_SHORT","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_WRONG_TYPE","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_SDESTEXT_TOO_LONG","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_SDESMISSING_TYPE","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_REASON_TOO_LONG","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_BAD_VERSION","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_FAILED_TO_FILL_WHOLE_BUFFER","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_BAD_UNIQUE_IDENTIFIER","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_BAD_MEDIA_SSRC","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_DELTA_EXCEED_LIMIT","synthetic":true,"types":[]},{"text":"impl Freeze for FIREntry","synthetic":true,"types":[]},{"text":"impl Freeze for FullIntraRequest","synthetic":true,"types":[]},{"text":"impl Freeze for Goodbye","synthetic":true,"types":[]},{"text":"impl Freeze for Header","synthetic":true,"types":[]},{"text":"impl Freeze for PacketType","synthetic":true,"types":[]},{"text":"impl Freeze for Packet","synthetic":true,"types":[]},{"text":"impl Freeze for PictureLossIndication","synthetic":true,"types":[]},{"text":"impl Freeze for RapidResynchronizationRequest","synthetic":true,"types":[]},{"text":"impl Freeze for RawPacket","synthetic":true,"types":[]},{"text":"impl Freeze for ReceiverEstimatedMaximumBitrate","synthetic":true,"types":[]},{"text":"impl Freeze for ReceiverReport","synthetic":true,"types":[]},{"text":"impl Freeze for ReceptionReport","synthetic":true,"types":[]},{"text":"impl Freeze for SenderReport","synthetic":true,"types":[]},{"text":"impl Freeze for SLIEntry","synthetic":true,"types":[]},{"text":"impl Freeze for SliceLossIndication","synthetic":true,"types":[]},{"text":"impl Freeze for SourceDescriptionChunk","synthetic":true,"types":[]},{"text":"impl Freeze for SourceDescriptionItem","synthetic":true,"types":[]},{"text":"impl Freeze for SourceDescription","synthetic":true,"types":[]},{"text":"impl Freeze for SDESType","synthetic":true,"types":[]},{"text":"impl Freeze for TransportLayerCC","synthetic":true,"types":[]},{"text":"impl Freeze for NackPair","synthetic":true,"types":[]},{"text":"impl Freeze for TransportLayerNack","synthetic":true,"types":[]}];
implementors["rtp"] = [{"text":"impl Freeze for G711Payloader","synthetic":true,"types":[]},{"text":"impl Freeze for G722Payloader","synthetic":true,"types":[]},{"text":"impl Freeze for H264Payloader","synthetic":true,"types":[]},{"text":"impl Freeze for H264Packet","synthetic":true,"types":[]},{"text":"impl Freeze for OpusPayloader","synthetic":true,"types":[]},{"text":"impl Freeze for OpusPacket","synthetic":true,"types":[]},{"text":"impl Freeze for VP8Payloader","synthetic":true,"types":[]},{"text":"impl Freeze for AbsSendTimeExtension","synthetic":true,"types":[]},{"text":"impl Freeze for AudioLevelExtension","synthetic":true,"types":[]},{"text":"impl Freeze for TransportCCExtension","synthetic":true,"types":[]},{"text":"impl Freeze for Extension","synthetic":true,"types":[]},{"text":"impl Freeze for Header","synthetic":true,"types":[]},{"text":"impl Freeze for Packet","synthetic":true,"types":[]}];
implementors["sdp"] = [{"text":"impl Freeze for ConnectionInformation","synthetic":true,"types":[]},{"text":"impl Freeze for Address","synthetic":true,"types":[]},{"text":"impl Freeze for Bandwidth","synthetic":true,"types":[]},{"text":"impl Freeze for Attribute","synthetic":true,"types":[]},{"text":"impl Freeze for Direction","synthetic":true,"types":[]},{"text":"impl Freeze for ExtMap","synthetic":true,"types":[]},{"text":"impl Freeze for MediaDescription","synthetic":true,"types":[]},{"text":"impl Freeze for RangedPort","synthetic":true,"types":[]},{"text":"impl Freeze for MediaName","synthetic":true,"types":[]},{"text":"impl Freeze for Origin","synthetic":true,"types":[]},{"text":"impl Freeze for TimeZone","synthetic":true,"types":[]},{"text":"impl Freeze for TimeDescription","synthetic":true,"types":[]},{"text":"impl Freeze for Timing","synthetic":true,"types":[]},{"text":"impl Freeze for RepeatTime","synthetic":true,"types":[]},{"text":"impl Freeze for SessionDescription","synthetic":true,"types":[]},{"text":"impl Freeze for Codec","synthetic":true,"types":[]},{"text":"impl&lt;'a, R&gt; Freeze for Lexer&lt;'a, R&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, R&gt; Freeze for StateFn&lt;'a, R&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for ConnectionRole","synthetic":true,"types":[]}];
implementors["srtp"] = [{"text":"impl Freeze for SessionKeys","synthetic":true,"types":[]},{"text":"impl Freeze for Config","synthetic":true,"types":[]},{"text":"impl Freeze for SrtpSsrcState","synthetic":true,"types":[]},{"text":"impl Freeze for SrtcpSsrcState","synthetic":true,"types":[]},{"text":"impl Freeze for Context","synthetic":true,"types":[]},{"text":"impl Freeze for Session","synthetic":true,"types":[]},{"text":"impl Freeze for Stream","synthetic":true,"types":[]}];
implementors["transport"] = [{"text":"impl Freeze for ERR_BUFFER_FULL","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_BUFFER_CLOSED","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_BUFFER_SHORT","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_PACKET_TOO_BIG","synthetic":true,"types":[]},{"text":"impl Freeze for ERR_TIMEOUT","synthetic":true,"types":[]},{"text":"impl Freeze for Buffer","synthetic":true,"types":[]},{"text":"impl Freeze for SlidingWindowDetector","synthetic":true,"types":[]},{"text":"impl Freeze for WrappedSlidingWindowDetector","synthetic":true,"types":[]},{"text":"impl Freeze for NoOpReplayDetector","synthetic":true,"types":[]}];
implementors["util"] = [{"text":"impl Freeze for Error","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()