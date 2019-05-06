# CyberSource.UpdatePaymentInstrumentRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**TmsV1InstrumentIdentifiersPost200ResponseLinks**](TmsV1InstrumentIdentifiersPost200ResponseLinks.md) |  | [optional] 
**id** | **String** | Unique identification number assigned by CyberSource to the submitted request. | [optional] 
**_object** | **String** | Describes type of token. | [optional] 
**state** | **String** | Current state of the token. | [optional] 
**bankAccount** | [**TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseBankAccount**](TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseBankAccount.md) |  | [optional] 
**card** | [**TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseCard**](TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseCard.md) |  | [optional] 
**buyerInformation** | [**TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseBuyerInformation**](TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseBuyerInformation.md) |  | [optional] 
**billTo** | [**TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseBillTo**](TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseBillTo.md) |  | [optional] 
**processingInformation** | [**TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseProcessingInformation**](TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseProcessingInformation.md) |  | [optional] 
**merchantInformation** | [**TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseMerchantInformation**](TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseMerchantInformation.md) |  | [optional] 
**metaData** | [**TmsV1InstrumentIdentifiersPost200ResponseMetadata**](TmsV1InstrumentIdentifiersPost200ResponseMetadata.md) |  | [optional] 
**instrumentIdentifier** | [**TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseInstrumentIdentifier**](TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseInstrumentIdentifier.md) |  | [optional] 


<a name="ObjectEnum"></a>
## Enum: ObjectEnum


* `paymentInstrument` (value: `"paymentInstrument"`)




<a name="StateEnum"></a>
## Enum: StateEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `CLOSED` (value: `"CLOSED"`)




