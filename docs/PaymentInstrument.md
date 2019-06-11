# CyberSource.PaymentInstrument

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**TmsV1InstrumentIdentifiersPost200ResponseLinks**](TmsV1InstrumentIdentifiersPost200ResponseLinks.md) |  | [optional] 
**id** | **String** | Unique identification number assigned by CyberSource to the submitted request. | [optional] 
**_object** | **String** | Describes type of token. | [optional] 
**state** | **String** | Current state of the token. | [optional] 
**bankAccount** | [**TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBankAccount**](TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBankAccount.md) |  | [optional] 
**card** | [**TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedCard**](TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedCard.md) |  | [optional] 
**buyerInformation** | [**TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformation**](TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBuyerInformation.md) |  | [optional] 
**billTo** | [**TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBillTo**](TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedBillTo.md) |  | [optional] 
**processingInformation** | [**TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedProcessingInformation**](TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedProcessingInformation.md) |  | [optional] 
**merchantInformation** | [**TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedMerchantInformation**](TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedMerchantInformation.md) |  | [optional] 
**metaData** | [**TmsV1InstrumentIdentifiersPost200ResponseMetadata**](TmsV1InstrumentIdentifiersPost200ResponseMetadata.md) |  | [optional] 
**instrumentIdentifier** | [**TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedInstrumentIdentifier**](TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedInstrumentIdentifier.md) |  | [optional] 


<a name="ObjectEnum"></a>
## Enum: ObjectEnum


* `paymentInstrument` (value: `"paymentInstrument"`)




<a name="StateEnum"></a>
## Enum: StateEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `CLOSED` (value: `"CLOSED"`)




