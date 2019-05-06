# CyberSource.PtsV2PaymentsReversalsPost400Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**submitTimeUtc** | **String** | Time of request in UTC. Format: &#x60;YYYY-MM-DDThh:mm:ssZ&#x60; Example &#x60;2016-08-11T22:47:57Z&#x60; equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The &#x60;T&#x60; separates the date and the time. The &#x60;Z&#x60; indicates UTC.  | [optional] 
**status** | **String** | The status of the submitted transaction.  Possible values:  - INVALID_REQUEST  | [optional] 
**reason** | **String** | The reason of the status.  Possible values:  - MISSING_FIELD  - INVALID_DATA  - DUPLICATE_REQUEST  - INVALID_MERCHANT_CONFIGURATION  - PROCESSOR_UNAVAILABLE  - AUTH_ALREADY_REVERSED  - TRANSACTION_ALREADY_SETTLED  - INVALID_AMOUNT  - MISSING_AUTH  - TRANSACTION_ALREADY_REVERSED_OR_SETTLED  | [optional] 
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

* `AUTH_ALREADY_REVERSED` (value: `"AUTH_ALREADY_REVERSED"`)

* `MISSING_AUTH` (value: `"MISSING_AUTH"`)

* `TRANSACTION_ALREADY_REVERSED_OR_SETTLED` (value: `"TRANSACTION_ALREADY_REVERSED_OR_SETTLED"`)




