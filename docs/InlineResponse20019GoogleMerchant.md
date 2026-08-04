# CyberSource.InlineResponse20019GoogleMerchant

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | Upload outcome status: - `TRIGGERED` — async upload dispatched; check Google Merchant Center for results - `FAILED` — all products failed UCP validation; nothing sent to Google - `DISABLED` — Google Merchant integration is disabled for this merchant - `COMPLETED` — synchronous validate-and-upload completed   Possible values: - TRIGGERED - FAILED - DISABLED - COMPLETED | [optional] 
**ucpValidCount** | **Number** | Number of products that passed UCP validation and were queued for upload. | [optional] 
**ucpInvalidCount** | **Number** | Number of products that failed UCP validation and were not sent to Google. | [optional] 
**googleEnabled** | **Boolean** | Whether Google Merchant integration is enabled for this merchant. | [optional] 
**products** | [**[InlineResponse20019GoogleMerchantProducts]**](InlineResponse20019GoogleMerchantProducts.md) | Per-product UCP validation and upload results. Populated when at least one product was saved successfully. Null when all products failed ACG-level validation.  | [optional] 


