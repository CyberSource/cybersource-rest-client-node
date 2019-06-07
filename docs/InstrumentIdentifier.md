# CyberSource.InstrumentIdentifier

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**TmsV1InstrumentIdentifiersPost200ResponseLinks**](TmsV1InstrumentIdentifiersPost200ResponseLinks.md) |  | [optional] 
**id** | **String** | Unique identification number assigned by CyberSource to the submitted request. | [optional] 
**_object** | **String** | Describes type of token. | [optional] 
**state** | **String** | Current state of the token. | [optional] 
**card** | [**TmsV1InstrumentIdentifiersPost200ResponseCard**](TmsV1InstrumentIdentifiersPost200ResponseCard.md) |  | [optional] 
**bankAccount** | [**TmsV1InstrumentIdentifiersPost200ResponseBankAccount**](TmsV1InstrumentIdentifiersPost200ResponseBankAccount.md) |  | [optional] 
**processingInformation** | [**TmsV1InstrumentIdentifiersPost200ResponseProcessingInformation**](TmsV1InstrumentIdentifiersPost200ResponseProcessingInformation.md) |  | [optional] 
**metadata** | [**TmsV1InstrumentIdentifiersPost200ResponseMetadata**](TmsV1InstrumentIdentifiersPost200ResponseMetadata.md) |  | [optional] 


<a name="ObjectEnum"></a>
## Enum: ObjectEnum


* `instrumentIdentifier` (value: `"instrumentIdentifier"`)




<a name="StateEnum"></a>
## Enum: StateEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `CLOSED` (value: `"CLOSED"`)




