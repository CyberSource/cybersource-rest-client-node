# CyberSource.UnifiedriskRiskAssessmentBuyerHistoryCustomerAccountAlertnateAuthentication

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authenticationMethod** | **String** | Method used for alternate authentication during the current session (e.g., FRICTIONLESS, OTP, BIOMETRIC, PUSH_NOTIFICATION). Used as a risk signal in the 3DS flow | [optional] 
**authenticationDate** | **String** | Date and time of the alternate authentication event in ISO 8601 format. Recency of authentication affects risk scoring and challenge exemption decisions | [optional] 
**authenticationData** | **String** | Opaque data payload from the alternate authentication process (e.g., signed assertion, biometric template reference). Value is issuer or method specific | [optional] 
**priorAuthenticationMethod** | **String** | Authentication method used in the most recent prior authentication for this account (e.g., OTP, PASSWORD, BIOMETRIC). Provides historical authentication context | [optional] 
**priorAuthenticationDate** | **String** | Date and time of the most recent prior authentication event in ISO 8601 format, used to calculate authentication recency risk signals | [optional] 
**priorAuthenticationData** | **String** | Opaque data payload from the prior authentication event, providing additional context about the historical authentication assertion | [optional] 
**priorAuthenticationRef** | **String** | Reference identifier linking back to the prior authentication session or transaction, used for session continuity and risk correlation | [optional] 


