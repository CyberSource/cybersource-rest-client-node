# CyberSource.Ptsv2paymentsTokenInformationTokenAuthenticationInformationAuthenticatedIdentities

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **String** | Data related to the authenticated identity. Contains verification payload from the identity provider.  | [optional] 
**provider** | **String** | Provider of the authenticated identity. Identifies the authentication service or identity provider.   Possible values: - CLIENT_DEVICE_CERT_JWS - VISA_PAYMENT_PASSKEY | [optional] 
**id** | **String** | Unique identifier for the authenticated identity. A distinctive and non-transparent identifier for correlation purposes.  | [optional] 
**relyingPartyId** | **String** | Identifier of the relying party that requested the authentication.  | [optional] 
**userAuthenticationMethod** | **String** | The method used to authenticate the user.   Possible values: - USERNAME_PASSWORD - PASSCODE_PASSWORD - PASSCODE - PASSWORD - PATTERN - BIOMETRIC_FINGERPRINT - BIOMETRIC_FACIAL - BIOMETRIC_IRIS - BIOMETRIC_VOICE - BIOMETRIC_BEHAVIORAL - DEVICE_UNLOCKED_METHOD_UNKNOWN - OTP_SMS - OTP_EMAIL - OTP_SMS_KNOWLEDGE - KNOWLEDGE_BASED_AUTHENTICATION - USER_UNVERIFIED - BIOMETRIC | [optional] 


