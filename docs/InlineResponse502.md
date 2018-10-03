# CyberSource.InlineResponse502

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**submitTimeUtc** | **String** | Time of request in UTC. &#x60;Format: YYYY-MM-DDThh:mm:ssZ&#x60;  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC.  | [optional] 
**status** | **String** | The status of the submitted transaction. | [optional] 
**reason** | **String** | The reason of the status.  | [optional] 
**message** | **String** | The detail message related to the status and reason listed above. | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `ERROR` (value: `"SERVER_ERROR"`)




<a name="ReasonEnum"></a>
## Enum: ReasonEnum


* `SYSTEM_ERROR` (value: `"SYSTEM_ERROR"`)

* `SERVER_TIMEOUT` (value: `"SERVER_TIMEOUT"`)

* `SERVICE_TIMEOUT` (value: `"SERVICE_TIMEOUT"`)

* `PROCESSOR_TIMEOUT` (value: `"PROCESSOR_TIMEOUT"`)




