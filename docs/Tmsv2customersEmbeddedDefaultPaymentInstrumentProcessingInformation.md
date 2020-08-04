# CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billPaymentProgramEnabled** | **Boolean** | Flag that indicates that this is a payment for a bill or for an existing contractual loan. For processor-specific details, see the &#x60;bill_payment&#x60; field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  Valid values: - &#x60;true&#x60;: Bill payment or loan payment. - &#x60;false&#x60; (default): Not a bill payment or loan payment.  | [optional] 
**bankTransferOptions** | [**Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformationBankTransferOptions**](Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformationBankTransferOptions.md) |  | [optional] 


