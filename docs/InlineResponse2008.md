# CyberSource.InlineResponse2008

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **String** |  | [optional] 
**reportCreatedDate** | **String** | ISO-8601 format: yyyy-MM-ddTHH:mm:ssZ | [optional] 
**batchId** | **String** | Unique identification number assigned to the submitted request. | [optional] 
**batchSource** | **String** | Valid Values:   * SCHEDULER   * TOKEN_API   * CREDIT_CARD_FILE_UPLOAD   * AMEX_REGSITRY   * AMEX_REGISTRY_API   * AMEX_MAINTENANCE  | [optional] 
**batchCaEndpoints** | **String** |  | [optional] 
**batchCreatedDate** | **String** | ISO-8601 format: yyyy-MM-ddTHH:mm:ssZ | [optional] 
**merchantReference** | **String** | Reference used by merchant to identify batch. | [optional] 
**totals** | [**InlineResponse2006EmbeddedTotals**](InlineResponse2006EmbeddedTotals.md) |  | [optional] 
**billing** | [**InlineResponse2007Billing**](InlineResponse2007Billing.md) |  | [optional] 
**records** | [**[InlineResponse2008Records]**](InlineResponse2008Records.md) |  | [optional] 


