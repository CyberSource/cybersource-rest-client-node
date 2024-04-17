# CyberSource.InlineResponse2007

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**InlineResponse2007Links**](InlineResponse2007Links.md) |  | [optional] 
**batchId** | **String** | Unique identification number assigned to the submitted request. | [optional] 
**batchCreatedDate** | **String** | ISO-8601 format: yyyy-MM-ddTHH:mm:ssZ | [optional] 
**batchSource** | **String** | Valid Values:   * SCHEDULER   * TOKEN_API   * CREDIT_CARD_FILE_UPLOAD   * AMEX_REGSITRY   * AMEX_REGISTRY_API   * AMEX_MAINTENANCE  | [optional] 
**merchantReference** | **String** | Reference used by merchant to identify batch. | [optional] 
**batchCaEndpoints** | **String** |  | [optional] 
**status** | **String** | Valid Values:   * REJECTED   * RECEIVED   * VALIDATED   * DECLINED   * PROCESSING   * COMPLETED  | [optional] 
**totals** | [**InlineResponse2006EmbeddedTotals**](InlineResponse2006EmbeddedTotals.md) |  | [optional] 
**billing** | [**InlineResponse2007Billing**](InlineResponse2007Billing.md) |  | [optional] 
**description** | **String** |  | [optional] 


