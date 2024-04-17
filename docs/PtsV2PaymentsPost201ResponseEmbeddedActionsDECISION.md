# CyberSource.PtsV2PaymentsPost201ResponseEmbeddedActionsDECISION

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The status of the submitted transaction.  Possible values:   - `ACCEPTED`   - `REJECTED`   - `PENDING_REVIEW`   - `DECLINED`   - `PENDING_AUTHENTICATION`   - `INVALID_REQUEST`   - `AUTHENTICATION_FAILED`   - `CHALLENGE`  | [optional] 
**reason** | **String** | The reason of the status.  Possible values:  - `EXPIRED_CARD`  - `SCORE_EXCEEDS_THRESHOLD`  - `DECISION_PROFILE_REVIEW`  - `DECISION_PROFILE_REJECT`  - `CONSUMER_AUTHENTICATION_REQUIRED`  - `INVALID_MERCHANT_CONFIGURATION`  - `CONSUMER_AUTHENTICATION_FAILED`  - `DECISION_PROFILE_CHALLENGE`  - `CUSTOMER_WATCHLIST_MATCH`  - `ADDRESS_COUNTRY_WATCHLIST_MATCH`  - `EMAIL_COUNTRY_WATCHLIST_MATCH`  - `IP_COUNTRY_WATCHLIST_MATCH`  | [optional] 
**message** | **String** | The detail message related to the status and reason listed above. | [optional] 


