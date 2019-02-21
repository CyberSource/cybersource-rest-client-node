# CyberSource.PtsV2PayoutsPost201ResponseErrorInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | The reason of the status.  | [optional] 
**message** | **String** | The detail message related to the status and reason listed above. | [optional] 
**details** | [**[PtsV2PaymentsPost201ResponseErrorInformationDetails]**](PtsV2PaymentsPost201ResponseErrorInformationDetails.md) |  | [optional] 


<a name="ReasonEnum"></a>
## Enum: ReasonEnum


* `EXPIRED_CARD` (value: `"EXPIRED_CARD"`)

* `PROCESSOR_DECLINED` (value: `"PROCESSOR_DECLINED"`)

* `STOLEN_LOST_CARD` (value: `"STOLEN_LOST_CARD"`)

* `UNAUTHORIZED_CARD` (value: `"UNAUTHORIZED_CARD"`)

* `CVN_NOT_MATCH` (value: `"CVN_NOT_MATCH"`)

* `INVALID_CVN` (value: `"INVALID_CVN"`)

* `BLACKLISTED_CUSTOMER` (value: `"BLACKLISTED_CUSTOMER"`)

* `INVALID_ACCOUNT` (value: `"INVALID_ACCOUNT"`)

* `GENERAL_DECLINE` (value: `"GENERAL_DECLINE"`)

* `RISK_CONTROL_DECLINE` (value: `"RISK_CONTROL_DECLINE"`)

* `PROCESSOR_RISK_CONTROL_DECLINE` (value: `"PROCESSOR_RISK_CONTROL_DECLINE"`)




