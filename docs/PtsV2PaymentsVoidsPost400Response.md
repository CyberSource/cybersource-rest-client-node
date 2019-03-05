# CyberSource.PtsV2PaymentsVoidsPost400Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**submitTimeUtc** | **String** | Time of request in UTC. &#x60;Format: YYYY-MM-DDThh:mm:ssZ&#x60;  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC.  | [optional] 
**status** | **String** | The status of the submitted transaction.  Possible values:  - INVALID_REQUEST  | [optional] 
**reason** | **String** | The reason of the status.  Possible values:  - MISSING_FIELD  - INVALID_DATA  - DUPLICATE_REQUEST  - INVALID_MERCHANT_CONFIGURATION  - NOT_VOIDABLE  | [optional] 
**message** | **String** | The detail message related to the status and reason listed above. | [optional] 
**details** | [**[PtsV2PaymentsPost201ResponseErrorInformationDetails]**](PtsV2PaymentsPost201ResponseErrorInformationDetails.md) |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `REQUEST` (value: `"INVALID_REQUEST"`)




<a name="ReasonEnum"></a>
## Enum: ReasonEnum


* `MISSING_FIELD` (value: `"MISSING_FIELD"`)

* `INVALID_DATA` (value: `"INVALID_DATA"`)

* `DUPLICATE_REQUEST` (value: `"DUPLICATE_REQUEST"`)

* `INVALID_MERCHANT_CONFIGURATION` (value: `"INVALID_MERCHANT_CONFIGURATION"`)

* `NOT_VOIDABLE` (value: `"NOT_VOIDABLE"`)




