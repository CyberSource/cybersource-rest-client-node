# CyberSource.RiskV1DecisionsPost201ResponseErrorInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | The reason of the status.  Possible values:  - &#x60;EXPIRED_CARD&#x60;  - &#x60;SCORE_EXCEEDS_THRESHOLD&#x60;  - &#x60;DECISION_PROFILE_REVIEW&#x60;  - &#x60;DECISION_PROFILE_REJECT&#x60;  - &#x60;CONSUMER_AUTHENTICATION_REQUIRED&#x60;  - &#x60;INVALID_MERCHANT_CONFIGURATION&#x60;  - &#x60;CONSUMER_AUTHENTICATION_FAILED&#x60;  - &#x60;DECISION_PROFILE_CHALLENGE&#x60;  | [optional] 
**message** | **String** | The detail message related to the status and reason listed above. | [optional] 
**details** | [**[PtsV2PaymentsPost201ResponseErrorInformationDetails]**](PtsV2PaymentsPost201ResponseErrorInformationDetails.md) |  | [optional] 


