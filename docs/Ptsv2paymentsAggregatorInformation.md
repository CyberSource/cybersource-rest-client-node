# CyberSource.Ptsv2paymentsAggregatorInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregatorId** | **String** | Value that identifies you as a payment aggregator. Get this value from the processor.  #### Visa Platform Connect The value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP01 TCR6 - Position: 95-105 - Field: MasterCard Payment Facilitator ID  **FDC Compass**\\ This value must consist of uppercase characters.  For processor-specific information, see the &#x60;aggregator_id&#x60; field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  | [optional] 
**name** | **String** | Your payment aggregator business name.  **American Express Direct**\\ The maximum length of the aggregator name depends on the length of the sub-merchant name. The combined length for both values must not exceed 36 characters.\\  #### Visa Platform Connect With American Express, the maximum length of the aggregator name depends on the length of the sub-merchant name. The combined length for both values must not exceed 36 characters. The value for this field does not map to the TC 33 capture file5.  **FDC Compass**\\ This value must consist of uppercase characters.  For processor-specific information, see the aggregator_name field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  | [optional] 
**subMerchant** | [**Ptsv2paymentsAggregatorInformationSubMerchant**](Ptsv2paymentsAggregatorInformationSubMerchant.md) |  | [optional] 


