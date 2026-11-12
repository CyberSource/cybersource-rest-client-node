# CyberSource.Ucv1sessionsDataAggregatorInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregatorId** | **String** | Value that identifies you as a payment aggregator. Get this value from the processor.  | [optional] 
**name** | **String** | Your payment aggregator business name.  **American Express Direct**\\ The maximum length of the aggregator name depends on the length of the sub-merchant name. The combined length for both values must not exceed 36 characters.\\  | [optional] 
**subMerchant** | [**Ucv1sessionsDataAggregatorInformationSubMerchant**](Ucv1sessionsDataAggregatorInformationSubMerchant.md) |  | [optional] 
**streetAddress** | **String** | Acquirer street name. | [optional] 
**city** | **String** | Acquirer city. | [optional] 
**state** | **String** | Acquirer state. | [optional] 
**postalCode** | **String** | Acquirer postal code. | [optional] 
**country** | **String** | Acquirer country used for Payment Facilitator scenarios. | [optional] 
**serviceProvidername** | **String** | Contains transfer service provider name. | [optional] 


