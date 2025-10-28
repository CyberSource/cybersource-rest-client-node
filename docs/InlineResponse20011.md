# CyberSource.InlineResponse20011

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**InlineResponse20011Links**](InlineResponse20011Links.md) |  | [optional] 
**batchId** | **String** | Unique identification number assigned to the submitted request. | [optional] 
**batchCreatedDate** | **String** | ISO-8601 format: yyyy-MM-ddTHH:mm:ssZ | [optional] 
**batchSource** | **String** | Valid Values:   * SCHEDULER   * TOKEN_API   * CREDIT_CARD_FILE_UPLOAD   * AMEX_REGSITRY   * AMEX_REGISTRY_API   * AMEX_MAINTENANCE  | [optional] 
**merchantReference** | **String** | Reference used by merchant to identify batch. | [optional] 
**batchCaEndpoints** | **String** |  | [optional] 
**status** | **String** | Valid Values:   * REJECTED   * RECEIVED   * VALIDATED   * DECLINED   * PROCESSING   * COMPLETED  | [optional] 
**totals** | [**InlineResponse20010EmbeddedTotals**](InlineResponse20010EmbeddedTotals.md) |  | [optional] 
**billing** | [**InlineResponse20011Billing**](InlineResponse20011Billing.md) |  | [optional] 
**description** | **String** |  | [optional] 


