# CyberSource.PtsV2PaymentsCapturesPost201Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PtsV2PaymentsCapturesPost201ResponseLinks**](PtsV2PaymentsCapturesPost201ResponseLinks.md) |  | [optional] 
**id** | **String** | An unique identification number assigned by CyberSource to identify the submitted request. | [optional] 
**submitTimeUtc** | **String** | Time of request in UTC. &#x60;Format: YYYY-MM-DDThh:mm:ssZ&#x60;  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC.  | [optional] 
**status** | **String** | The status of the submitted transaction. | [optional] 
**reconciliationId** | **String** | The reconciliation id for the submitted transaction. This value is not returned for all processors.  | [optional] 
**clientReferenceInformation** | [**PtsV2PaymentsPost201ResponseClientReferenceInformation**](PtsV2PaymentsPost201ResponseClientReferenceInformation.md) |  | [optional] 
**processorInformation** | [**PtsV2PaymentsCapturesPost201ResponseProcessorInformation**](PtsV2PaymentsCapturesPost201ResponseProcessorInformation.md) |  | [optional] 
**orderInformation** | [**PtsV2PaymentsCapturesPost201ResponseOrderInformation**](PtsV2PaymentsCapturesPost201ResponseOrderInformation.md) |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `PENDING` (value: `"PENDING"`)




