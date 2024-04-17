# CyberSource.PtsV2PaymentsPost201ResponsePaymentInsightsInformationResponseInsights

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **String** | Categorization of response message from processor  Possible Values: - `APPROVED` - `ISSUER_WILL_NEVER_APPROVE` - `ISSUER_CANT_APPROVE_AT_THIS_TIME` - `ISSUER_CANT_APPROVE_WITH_THESE_DETAILS` - `GENERIC_ERROR` - `OTHERS` - `MATCH_NOT_FOUND`  | [optional] 
**categoryCode** | **String** | Categorization Code of response message from processor  Possible Values: - `01` : Issuer Will Never Approve - `02` : Issuer Can't Approve at this Time - `03` : Issuer Can't Approve with these Details - `04` : Generic Error - `98` : Others - `99` : Payment Insights Response Category Match Not Found  | [optional] 
**processorRawName** | **String** | Raw name of the processor used for the transaction processing, especially useful during acquirer swing to see which processor transaction settled with  | [optional] 


