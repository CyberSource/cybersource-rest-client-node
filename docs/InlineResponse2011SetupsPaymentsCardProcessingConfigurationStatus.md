# CyberSource.InlineResponse2011SetupsPaymentsCardProcessingConfigurationStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configurationId** | **String** | This is NOT for MVP | [optional] 
**version** | **String** |  | [optional] 
**submitTimeUtc** | **String** | Time of request in UTC. `Format: YYYY-MM-DDThh:mm:ssZ`  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC.  | [optional] 
**status** | **String** |  | [optional] 
**reason** | **String** |  | [optional] 
**details** | **[{String: String}]** |  | [optional] 
**message** | **String** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `SUCCESS` (value: `"SUCCESS"`)

* `PARTIAL` (value: `"PARTIAL"`)

* `PENDING` (value: `"PENDING"`)

* `NOT_SETUP` (value: `"NOT_SETUP"`)




<a name="ReasonEnum"></a>
## Enum: ReasonEnum


* `PENDING_PROVISIONING_PROCESS` (value: `"PENDING_PROVISIONING_PROCESS"`)

* `MISSING_DATA` (value: `"MISSING_DATA"`)

* `INVALID_DATA` (value: `"INVALID_DATA"`)

* `DUPLICATE_FIELD` (value: `"DUPLICATE_FIELD"`)

* `NOT_APPLICABLE` (value: `"NOT_APPLICABLE"`)




