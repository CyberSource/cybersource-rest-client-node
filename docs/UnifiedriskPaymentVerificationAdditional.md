# CyberSource.UnifiedriskPaymentVerificationAdditional

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signature** | **String** | Paper signature verification: SUCCESS, FAILURE     | [optional] 
**accountHolderAuth** | **String** | Account holder authentication value: SUCCESS, FAILURE     | [optional] 
**authenticationToken** | **String** | Authentication token verification: SUCCESS, FAILURE     | [optional] 
**cardholderIdData** | **String** | Cardholder ID data verification: SUCCESS, FAILURE     | [optional] 
**passiveAuth** | **String** | Passive authentication: SUCCESS, FAILURE     | [optional] 
**simSwap** | **String** | SIM swap check: NO_SWAP_DETECTED, SWAP_DETECTED     | [optional] 
**secureCorpPaymentIndicator** | **String** | Secure Corporate Payment Indicator (SCPI) flag assigned by the issuer to indicate a trusted commercial or corporate payment credential. Impacts SCA (Strong Customer Authentication) exemption eligibility under PSD2 | [optional] 


