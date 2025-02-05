# CyberSource.Ptsv2payoutsAggregatorInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregatorId** | **String** | Value that identifies you as a payment aggregator. Get this value from the processor.  | [optional] 
**name** | **String** | Your payment aggregator business name. This field is conditionally required when aggregator id is present.  | [optional] 
**independentSalesOrganizationID** | **String** | Independent sales organization ID. This field is only used for Mastercard transactions submitted through PPGS.  | [optional] 
**subMerchant** | [**Ptsv2payoutsAggregatorInformationSubMerchant**](Ptsv2payoutsAggregatorInformationSubMerchant.md) |  | [optional] 
**streetAddress** | **String** | Acquirer street name. | [optional] 
**city** | **String** | Acquirer city. | [optional] 
**state** | **String** | Acquirer state. | [optional] 
**postalCode** | **String** | Acquirer postal code. | [optional] 
**country** | **String** | Acquirer country. | [optional] 


