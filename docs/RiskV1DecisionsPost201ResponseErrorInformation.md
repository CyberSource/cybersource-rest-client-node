# CyberSource.RiskV1DecisionsPost201ResponseErrorInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | The reason of the status.  Possible values:  - `EXPIRED_CARD`  - `SCORE_EXCEEDS_THRESHOLD`  - `DECISION_PROFILE_REVIEW`  - `DECISION_PROFILE_REJECT`  - `CONSUMER_AUTHENTICATION_REQUIRED`  - `INVALID_MERCHANT_CONFIGURATION`  - `CONSUMER_AUTHENTICATION_FAILED`  - `DECISION_PROFILE_CHALLENGE`  - `CUSTOMER_WATCHLIST_MATCH`  - `ADDRESS_COUNTRY_WATCHLIST_MATCH`  - `EMAIL_COUNTRY_WATCHLIST_MATCH`  - `IP_COUNTRY_WATCHLIST_MATCH`  | [optional] 
**message** | **String** | The detail message related to the status and reason listed above. | [optional] 
**details** | [**[PtsV2PaymentsPost201ResponseErrorInformationDetails]**](PtsV2PaymentsPost201ResponseErrorInformationDetails.md) |  | [optional] 


