# CyberSource.InlineResponse2011SetupsPaymentsCardProcessingSubscriptionStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**submitTimeUtc** | **String** | Time of request in UTC. `Format: YYYY-MM-DDThh:mm:ssZ`  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC.  | [optional] 
**status** | **String** |  | [optional] 
**reason** | **String** |  | [optional] 
**details** | **[{String: String}]** |  | [optional] 
**message** | **String** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `SUCCESS` (value: `"SUCCESS"`)

* `FAILURE` (value: `"FAILURE"`)

* `PARTIAL` (value: `"PARTIAL"`)

* `PENDING` (value: `"PENDING"`)




<a name="ReasonEnum"></a>
## Enum: ReasonEnum


* `DEPENDENT_PRODUCT_NOT_CONTRACTED` (value: `"DEPENDENT_PRODUCT_NOT_CONTRACTED"`)

* `DEPENDENT_FEATURE_NOT_CHOSEN` (value: `"DEPENDENT_FEATURE_NOT_CHOSEN"`)

* `MISSING_DATA` (value: `"MISSING_DATA"`)

* `INVALID_DATA` (value: `"INVALID_DATA"`)

* `DUPLICATE_FIELD` (value: `"DUPLICATE_FIELD"`)




