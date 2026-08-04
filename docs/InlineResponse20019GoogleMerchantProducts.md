# CyberSource.InlineResponse20019GoogleMerchantProducts

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemId** | **String** | Product item ID. | [optional] 
**title** | **String** | Product title. | [optional] 
**ucpValid** | **Boolean** | Whether the product passed UCP validation. | [optional] 
**ucpErrors** | **[String]** | UCP validation errors (empty if ucpValid is true). | [optional] 
**googleUploadStatus** | **String** | Google upload status for this product.   Possible values: - UPLOADED - SKIPPED - FAILED | [optional] 
**googleResourceName** | **String** | Google Merchant resource name assigned after upload. | [optional] 
**googleError** | **String** | Error message from Google if upload failed. Null on success. | [optional] 


