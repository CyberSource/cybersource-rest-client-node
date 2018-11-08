# CyberSource.PtsV2PaymentsPost201Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PtsV2PaymentsPost201ResponseLinks**](PtsV2PaymentsPost201ResponseLinks.md) |  | [optional] 
**id** | **String** | An unique identification number assigned by CyberSource to identify the submitted request. | [optional] 
**submitTimeUtc** | **String** | Time of request in UTC. &#x60;Format: YYYY-MM-DDThh:mm:ssZ&#x60;  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC.  | [optional] 
**status** | **String** | The status of the submitted transaction. | [optional] 
**reconciliationId** | **String** | The reconciliation id for the submitted transaction. This value is not returned for all processors.  | [optional] 
**errorInformation** | [**PtsV2PaymentsPost201ResponseErrorInformation**](PtsV2PaymentsPost201ResponseErrorInformation.md) |  | [optional] 
**clientReferenceInformation** | [**PtsV2PaymentsPost201ResponseClientReferenceInformation**](PtsV2PaymentsPost201ResponseClientReferenceInformation.md) |  | [optional] 
**processorInformation** | [**PtsV2PaymentsPost201ResponseProcessorInformation**](PtsV2PaymentsPost201ResponseProcessorInformation.md) |  | [optional] 
**paymentInformation** | [**PtsV2PaymentsPost201ResponsePaymentInformation**](PtsV2PaymentsPost201ResponsePaymentInformation.md) |  | [optional] 
**orderInformation** | [**PtsV2PaymentsPost201ResponseOrderInformation**](PtsV2PaymentsPost201ResponseOrderInformation.md) |  | [optional] 
**pointOfSaleInformation** | [**PtsV2PaymentsPost201ResponsePointOfSaleInformation**](PtsV2PaymentsPost201ResponsePointOfSaleInformation.md) |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `AUTHORIZED` (value: `"AUTHORIZED"`)

* `PARTIAL_AUTHORIZED` (value: `"PARTIAL_AUTHORIZED"`)

* `AUTHORIZED_PENDING_REVIEW` (value: `"AUTHORIZED_PENDING_REVIEW"`)

* `DECLINED` (value: `"DECLINED"`)




