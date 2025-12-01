# CyberSource.PatchCustomerPaymentInstrumentRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**Tmsv2tokenizeTokenInformationCustomerEmbeddedDefaultPaymentInstrumentLinks**](Tmsv2tokenizeTokenInformationCustomerEmbeddedDefaultPaymentInstrumentLinks.md) |  | [optional] 
**id** | **String** | The Id of the Payment Instrument Token. | [optional] 
**_object** | **String** | The type.  Possible Values: - paymentInstrument  | [optional] 
**_default** | **Boolean** | Flag that indicates whether customer payment instrument is the dafault. Possible Values:  - `true`: Payment instrument is customer's default.  - `false`: Payment instrument is not customer's default.  | [optional] 
**state** | **String** | Issuers state for the card number. Possible Values: - ACTIVE - CLOSED : The account has been closed.  | [optional] 
**type** | **String** | The type of Payment Instrument. Possible Values: - cardHash  | [optional] 
**bankAccount** | [**Tmsv2tokenizeTokenInformationCustomerEmbeddedDefaultPaymentInstrumentBankAccount**](Tmsv2tokenizeTokenInformationCustomerEmbeddedDefaultPaymentInstrumentBankAccount.md) |  | [optional] 
**card** | [**Tmsv2tokenizeTokenInformationCustomerEmbeddedDefaultPaymentInstrumentCard**](Tmsv2tokenizeTokenInformationCustomerEmbeddedDefaultPaymentInstrumentCard.md) |  | [optional] 
**buyerInformation** | [**Tmsv2tokenizeTokenInformationCustomerEmbeddedDefaultPaymentInstrumentBuyerInformation**](Tmsv2tokenizeTokenInformationCustomerEmbeddedDefaultPaymentInstrumentBuyerInformation.md) |  | [optional] 
**billTo** | [**Tmsv2tokenizeTokenInformationCustomerEmbeddedDefaultPaymentInstrumentBillTo**](Tmsv2tokenizeTokenInformationCustomerEmbeddedDefaultPaymentInstrumentBillTo.md) |  | [optional] 
**processingInformation** | [**TmsPaymentInstrumentProcessingInfo**](TmsPaymentInstrumentProcessingInfo.md) |  | [optional] 
**merchantInformation** | [**TmsMerchantInformation**](TmsMerchantInformation.md) |  | [optional] 
**instrumentIdentifier** | [**Tmsv2tokenizeTokenInformationCustomerEmbeddedDefaultPaymentInstrumentInstrumentIdentifier**](Tmsv2tokenizeTokenInformationCustomerEmbeddedDefaultPaymentInstrumentInstrumentIdentifier.md) |  | [optional] 
**metadata** | [**Tmsv2tokenizeTokenInformationCustomerEmbeddedDefaultPaymentInstrumentMetadata**](Tmsv2tokenizeTokenInformationCustomerEmbeddedDefaultPaymentInstrumentMetadata.md) |  | [optional] 
**embedded** | [**Tmsv2tokenizeTokenInformationCustomerEmbeddedDefaultPaymentInstrumentEmbedded**](Tmsv2tokenizeTokenInformationCustomerEmbeddedDefaultPaymentInstrumentEmbedded.md) |  | [optional] 


