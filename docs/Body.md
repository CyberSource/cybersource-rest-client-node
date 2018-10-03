# CyberSource.Body

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**InstrumentidentifiersLinks**](InstrumentidentifiersLinks.md) |  | [optional] 
**id** | **String** | Unique identification number assigned by CyberSource to the submitted request. | [optional] 
**_object** | **String** | Describes type of token. For example: customer, paymentInstrument or instrumentIdentifier. | [optional] 
**state** | **String** | Current state of the token. | [optional] 
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




