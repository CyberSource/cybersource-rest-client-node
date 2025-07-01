# CyberSource.InlineResponse20010

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
**totals** | [**InlineResponse2008EmbeddedTotals**](InlineResponse2008EmbeddedTotals.md) |  | [optional] 
**billing** | [**InlineResponse2009Billing**](InlineResponse2009Billing.md) |  | [optional] 
**records** | [**[InlineResponse20010Records]**](InlineResponse20010Records.md) |  | [optional] 


