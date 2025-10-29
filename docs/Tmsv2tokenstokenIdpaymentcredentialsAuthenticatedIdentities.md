# CyberSource.Tmsv2tokenstokenIdpaymentcredentialsAuthenticatedIdentities

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The id from the authenticated identity.  Base64URL encoded string (RFC4648).   The encoding is the same as Base64, but uses '-' characters instead of '+' and '_' characters instead of '/'.  | [optional] 
**provider** | **String** | The provider of the authenticated identity.  Possible Values:   - VISA_PAYMENT_PASSKEY  | [optional] 
**data** | **String** | The data from the authenticated identity, for FIDO this could be the Attestation. Base64URL encoded string (RFC4648).  The encoding is the same as Base64, but uses '-' characters instead of '+' and '_' characters instead of '/'.  | [optional] 
**relyingPartyId** | **String** | The id of the Relying Party.  Base64URL encoded string (RFC4648).   The encoding is the same as Base64, but uses '-' characters instead of '+' and '_' characters instead of '/'.  | [optional] 


