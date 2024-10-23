# CyberSource.PushFunds201ResponseErrorInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | The reason of the status.  Possible values:  - CONTACT_PROCESSOR - INVALID_MERCHANT_CONFIGURATION - STOLEN_LOST_CARD - PROCESSOR_DECLINED - PARTIAL_APPROVAL - PAYMENT_REFUSED - INVALID_ACCOUNT - ISSUER_UNAVAILABLE - INSUFFICIENT_FUND - EXPIRED_CARD - INVALID_PIN - UNAUTHORIZED_CARD - EXCEEDS_CREDIT_LIMIT - DEBIT_CARD_USAGE_LIMIT_EXCEEDED - CVN_NOT_MATCH - DUPLICATE_REQUEST - GENERAL_DECLINE - BLACKLISTED_CUSTOMER - GATEWAY_TIMEOUT - INVALID_DATA - SYSTEM_ERROR - SERVICE_UNAVAILABLE - GATEWAY_TIMEOUT - DAGGDENIED  | [optional] 
**message** | **String** | The detail message related to the status and reason listed above.  | [optional] 
**details** | [**[PushFunds201ResponseErrorInformationDetails]**](PushFunds201ResponseErrorInformationDetails.md) |  | [optional] 


