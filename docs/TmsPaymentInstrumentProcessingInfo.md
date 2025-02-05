# CyberSource.TmsPaymentInstrumentProcessingInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billPaymentProgramEnabled** | **Boolean** | Flag that indicates that this is a payment for a bill or for an existing contractual loan. Possible Values: - `true`: Bill payment or loan payment. - `false` (default): Not a bill payment or loan payment. # For processor-specific details, see the `bill_payment` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  | [optional] 
**bankTransferOptions** | [**TmsPaymentInstrumentProcessingInfoBankTransferOptions**](TmsPaymentInstrumentProcessingInfoBankTransferOptions.md) |  | [optional] 


