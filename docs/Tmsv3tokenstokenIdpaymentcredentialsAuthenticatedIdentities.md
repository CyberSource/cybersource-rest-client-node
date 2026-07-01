# CyberSource.Tmsv3tokenstokenIdpaymentcredentialsAuthenticatedIdentities

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The id from the authenticated identity.  Base64URL encoded string (RFC4648).   The encoding is the same as Base64, but uses '-' characters instead of '+' and '_' characters instead of '/'.  | [optional] 
**provider** | **String** | The provider of the authenticated identity.  Possible Values:   - VISA_PAYMENT_PASSKEY   - CLIENT_DEVICE_CERT_JWS  | [optional] 
**data** | **String** | The data from the authenticated identity. For Passkey this could be the FIDO Attestation. For Classic Cloud Token Framework (CTF) this could be a JWS containing device authentication information signed by a devices private key. Base64URL encoded string (RFC4648). The encoding is the same as Base64, but uses '-' characters instead of '+' and '_' characters instead of '/'.  | [optional] 
**relyingPartyId** | **String** | The id of the Relying Party.  Base64URL encoded string (RFC4648).  The encoding is the same as Base64, but uses '-' characters instead of '+' and '_' characters instead of '/'.  | [optional] 
**userAuthenticationMethod** | **String** | The method used to authenticate the user.  Possible Values:   - USERNAME_PASSWORD   - PASSCODE_PASSWORD   - PASSCODE   - PASSWORD   - PATTERN   - BIOMETRIC_FINGERPRINT   - BIOMETRIC_FACIAL   - BIOMETRIC_IRIS   - BIOMETRIC_VOICE   - BIOMETRIC_BEHAVIORAL   - DEVICE_UNLOCKED_METHOD_UNKNOWN   - OTP_SMS   - OTP_EMAIL   - OTP_SMS_KNOWLEDGE   - KNOWLEDGE_BASED_AUTHENTICATION   - USER_UNVERIFIED   - BIOMETRIC  | [optional] 


