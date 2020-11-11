# CyberSource.PatchPaymentInstrumentRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**Tmsv2customersEmbeddedDefaultPaymentInstrumentLinks**](Tmsv2customersEmbeddedDefaultPaymentInstrumentLinks.md) |  | [optional] 
**id** | **String** | The id of the Payment Instrument Token. | [optional] 
**_object** | **String** | The type of token.  Valid values: - paymentInstrument  | [optional] 
**_default** | **Boolean** | Flag that indicates whether customer payment instrument is the dafault. Valid values:  - &#x60;true&#x60;: Payment instrument is customer&#39;s default.  - &#x60;false&#x60;: Payment instrument is not customer&#39;s default.  | [optional] 
**state** | **String** | Issuers state for the card number. Valid values: - ACTIVE - CLOSED : The account has been closed.  | [optional] 
**bankAccount** | [**Tmsv2customersEmbeddedDefaultPaymentInstrumentBankAccount**](Tmsv2customersEmbeddedDefaultPaymentInstrumentBankAccount.md) |  | [optional] 
**card** | [**Tmsv2customersEmbeddedDefaultPaymentInstrumentCard**](Tmsv2customersEmbeddedDefaultPaymentInstrumentCard.md) |  | [optional] 
**buyerInformation** | [**Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation**](Tmsv2customersEmbeddedDefaultPaymentInstrumentBuyerInformation.md) |  | [optional] 
**billTo** | [**Tmsv2customersEmbeddedDefaultPaymentInstrumentBillTo**](Tmsv2customersEmbeddedDefaultPaymentInstrumentBillTo.md) |  | [optional] 
**processingInformation** | [**Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformation**](Tmsv2customersEmbeddedDefaultPaymentInstrumentProcessingInformation.md) |  | [optional] 
**merchantInformation** | [**Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformation**](Tmsv2customersEmbeddedDefaultPaymentInstrumentMerchantInformation.md) |  | [optional] 
**instrumentIdentifier** | [**Tmsv2customersEmbeddedDefaultPaymentInstrumentInstrumentIdentifier**](Tmsv2customersEmbeddedDefaultPaymentInstrumentInstrumentIdentifier.md) |  | [optional] 
**metadata** | [**Tmsv2customersEmbeddedDefaultPaymentInstrumentMetadata**](Tmsv2customersEmbeddedDefaultPaymentInstrumentMetadata.md) |  | [optional] 
**embedded** | [**Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded**](Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbedded.md) |  | [optional] 


