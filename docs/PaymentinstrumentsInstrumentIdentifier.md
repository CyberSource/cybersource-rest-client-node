# CyberSource.PaymentinstrumentsInstrumentIdentifier

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**InstrumentidentifiersLinks**](InstrumentidentifiersLinks.md) |  | [optional] 
**_object** | **String** | Describes type of token. For example: customer, paymentInstrument or instrumentIdentifier. | [optional] 
**state** | **String** | Current state of the token. | [optional] 
**id** | **String** | The id of the existing instrument identifier to be linked to the newly created payment instrument. | [optional] 
**card** | [**InstrumentidentifiersCard**](InstrumentidentifiersCard.md) |  | [optional] 
**bankAccount** | [**InstrumentidentifiersBankAccount**](InstrumentidentifiersBankAccount.md) |  | [optional] 
**processingInformation** | [**InstrumentidentifiersProcessingInformation**](InstrumentidentifiersProcessingInformation.md) |  | [optional] 
**metadata** | [**InstrumentidentifiersMetadata**](InstrumentidentifiersMetadata.md) |  | [optional] 


<a name="ObjectEnum"></a>
## Enum: ObjectEnum


* `instrumentIdentifier` (value: `"instrumentIdentifier"`)




<a name="StateEnum"></a>
## Enum: StateEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `CLOSED` (value: `"CLOSED"`)




