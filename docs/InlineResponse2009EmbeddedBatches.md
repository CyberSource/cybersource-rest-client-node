# CyberSource.InlineResponse2009EmbeddedBatches

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**InlineResponse2009EmbeddedLinks**](InlineResponse2009EmbeddedLinks.md) |  | [optional] 
**batchId** | **String** | Unique identification number assigned to the submitted request. | [optional] 
**batchCreatedDate** | **String** | ISO-8601 format: yyyy-MM-ddTHH:mm:ssZ | [optional] 
**batchModifiedDate** | **String** | ISO-8601 format: yyyy-MM-ddTHH:mm:ssZ | [optional] 
**batchSource** | **String** | Valid Values:   * SCHEDULER   * TOKEN_API   * CREDIT_CARD_FILE_UPLOAD   * AMEX_REGSITRY   * AMEX_REGISTRY_API   * AMEX_REGISTRY_API_SYNC   * AMEX_MAINTENANCE  | [optional] 
**tokenSource** | **String** | Valid Values:   * SECURE_STORAGE   * TMS   * CYBERSOURCE  | [optional] 
**merchantReference** | **String** | Reference used by merchant to identify batch. | [optional] 
**batchCaEndpoints** | **[String]** | Valid Values:   * VISA   * MASTERCARD   * AMEX  | [optional] 
**status** | **String** | Valid Values:   * REJECTED   * RECEIVED   * VALIDATED   * DECLINED   * PROCESSING   * COMPLETE  | [optional] 
**totals** | [**InlineResponse2009EmbeddedTotals**](InlineResponse2009EmbeddedTotals.md) |  | [optional] 


