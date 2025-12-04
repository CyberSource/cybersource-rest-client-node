# CyberSource.InlineResponse20012

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**InlineResponse20012Links**](InlineResponse20012Links.md) |  | [optional] 
**batchId** | **String** | Unique identification number assigned to the submitted request. | [optional] 
**batchCreatedDate** | **String** | ISO-8601 format: yyyy-MM-ddTHH:mm:ssZ | [optional] 
**batchSource** | **String** | Valid Values:   * SCHEDULER   * TOKEN_API   * CREDIT_CARD_FILE_UPLOAD   * AMEX_REGSITRY   * AMEX_REGISTRY_API   * AMEX_MAINTENANCE  | [optional] 
**merchantReference** | **String** | Reference used by merchant to identify batch. | [optional] 
**batchCaEndpoints** | **String** |  | [optional] 
**status** | **String** | Valid Values:   * REJECTED   * RECEIVED   * VALIDATED   * DECLINED   * PROCESSING   * COMPLETED  | [optional] 
**totals** | [**InlineResponse20011EmbeddedTotals**](InlineResponse20011EmbeddedTotals.md) |  | [optional] 
**billing** | [**InlineResponse20012Billing**](InlineResponse20012Billing.md) |  | [optional] 
**description** | **String** |  | [optional] 


