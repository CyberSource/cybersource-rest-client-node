# CyberSource.Ptsv2paymentsAggregatorInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregatorId** | **String** | Value that identifies you as a payment aggregator. Get this value from the processor.  #### CyberSource through VisaNet The value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP01 TCR6 - Position: 95-105 - Field: Payment Facilitator ID  This field is supported for Visa, Mastercard and Discover Transactions.  **FDC Compass**\\ This value must consist of uppercase characters.  | [optional] 
**name** | **String** | Your payment aggregator business name.  **American Express Direct**\\ The maximum length of the aggregator name depends on the length of the sub-merchant name. The combined length for both values must not exceed 36 characters.\\  #### CyberSource through VisaNet With American Express, the maximum length of the aggregator name depends on the length of the sub-merchant name. The combined length for both values must not exceed 36 characters. The value for this field does not map to the TC 33 capture file5.  **FDC Compass**\\ This value must consist of uppercase characters.  | [optional] 
**subMerchant** | [**Ptsv2paymentsAggregatorInformationSubMerchant**](Ptsv2paymentsAggregatorInformationSubMerchant.md) |  | [optional] 
**streetAddress** | **String** | Acquirer street name. | [optional] 
**city** | **String** | Acquirer city. | [optional] 
**state** | **String** | Acquirer state. | [optional] 
**postalCode** | **String** | Acquirer postal code. | [optional] 
**country** | **String** | Acquirer country. | [optional] 


