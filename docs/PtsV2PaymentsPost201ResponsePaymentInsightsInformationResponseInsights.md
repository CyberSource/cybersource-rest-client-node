# CyberSource.PtsV2PaymentsPost201ResponsePaymentInsightsInformationResponseInsights

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **String** | Categorization of response message from processor  Possible Values: - `ISSUER_WILL_NEVER_APPROVE` - `ISSUER_CANNOT_APPROVE_AT_THIS_TIME` - `ISSUER_CANNOT_APPROVE_WITH_THESE_DETAILS` - `GENERIC_ERROR` - `PAYMENT_INSIGHTS_INTERNAL_ERROR` - `OTHERS` - `PAYMENT_INSIGHTS_RESPONSE_CATEGORY_MATCH_NOT_FOUND`  | [optional] 
**categoryCode** | **String** | Categorization Code of response message from processor  Possible Values: - `01` : ISSUER_WILL_NEVER_APPROVE - `02` : ISSUER_CANNOT_APPROVE_AT_THIS_TIME - `03` : ISSUER_CANNOT_APPROVE_WITH_THESE_DETAILS - `04` : GENERIC_ERROR - `97` : PAYMENT_INSIGHTS_INTERNAL_ERROR - `98` : OTHERS - `99` : PAYMENT_INSIGHTS_RESPONSE_CATEGORY_MATCH_NOT_FOUND  | [optional] 
**processorRawName** | **String** | Raw name of the processor used for the transaction processing, especially useful during acquirer swing to see which processor transaction settled with  | [optional] 


