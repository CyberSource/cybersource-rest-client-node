# CyberSource.InlineResponse2018ErrorInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | Only required when offer cannot be made. The reason of the status.  Possible values: - 'INVALID_MERCHANT_CONFIGURATION' - 'NOT_ELIGIBLE' - 'CURRENCY_NOT_CONFIGURED' - 'BIN_UNKNOWN' - 'CURRENCY_MATCH' - 'CURRENCY_NOT_ALLOWED' - 'LOOKUP_FAILED' - 'EXCHANGE_RATE_NOT_FOUND' - 'CARD_TYPE_NOT_ACCEPTED' - 'INVALID_AMOUNT' - 'INVALID_CARD' - 'INVALID_CURRENCY' - 'INVALID_TERMINAL' - 'INVALID_ACQUIRER' - 'SERVICE_DISABLED' - 'DUPLICATE_REQUEST' - 'UNKNOWN' - 'PROCESSOR_ERROR'  | [optional] 
**message** | **String** | Only required when the requested action cannot be performed. Descriptive message to add more detail to the status E.g. not all cards are eligible for DCC, so it is not possible for DCC to be offered. | [optional] 


