# CyberSource.PtsV2PayoutsPost201ResponseErrorInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | The reason of the status.  Possible values:  - EXPIRED_CARD  - PROCESSOR_DECLINED  - STOLEN_LOST_CARD  - UNAUTHORIZED_CARD  - CVN_NOT_MATCH  - INVALID_CVN  - BLACKLISTED_CUSTOMER  - INVALID_ACCOUNT  - GENERAL_DECLINE  - RISK_CONTROL_DECLINE  - PROCESSOR_RISK_CONTROL_DECLINE  | [optional] 
**message** | **String** | The detail message related to the status and reason listed above. | [optional] 
**details** | [**[PtsV2PaymentsPost201ResponseErrorInformationDetails]**](PtsV2PaymentsPost201ResponseErrorInformationDetails.md) |  | [optional] 


