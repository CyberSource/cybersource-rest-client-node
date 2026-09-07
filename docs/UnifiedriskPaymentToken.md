# CyberSource.UnifiedriskPaymentToken

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **String** | The actual token string or transient token JWT value used as a payment reference. This replaces the raw payment credential in tokenized payment flows | [optional] 
**expiryDate** | **String** | Expiry date of the payment token, in MMYYYY or MMYY format. Expired tokens must not be used for payment processing | [optional] 
**jti** | **String** | JWT ID (jti claim) from the transient token, providing a unique identifier for the token JWT for nonce validation and replay prevention | [optional] 


