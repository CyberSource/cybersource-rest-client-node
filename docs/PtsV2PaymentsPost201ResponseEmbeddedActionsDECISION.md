# CyberSource.PtsV2PaymentsPost201ResponseEmbeddedActionsDECISION

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The status of the submitted transaction.  Possible values:   - &#x60;ACCEPTED&#x60;   - &#x60;REJECTED&#x60;   - &#x60;PENDING_REVIEW&#x60;   - &#x60;DECLINED&#x60;   - &#x60;PENDING_AUTHENTICATION&#x60;   - &#x60;INVALID_REQUEST&#x60;   - &#x60;AUTHENTICATION_FAILED&#x60;   - &#x60;CHALLENGE&#x60;  | [optional] 
**reason** | **String** | The reason of the status.  Possible values:  - &#x60;EXPIRED_CARD&#x60;  - &#x60;SCORE_EXCEEDS_THRESHOLD&#x60;  - &#x60;DECISION_PROFILE_REVIEW&#x60;  - &#x60;DECISION_PROFILE_REJECT&#x60;  - &#x60;CONSUMER_AUTHENTICATION_REQUIRED&#x60;  - &#x60;INVALID_MERCHANT_CONFIGURATION&#x60;  - &#x60;CONSUMER_AUTHENTICATION_FAILED&#x60;  - &#x60;DECISION_PROFILE_CHALLENGE&#x60;  - &#x60;CUSTOMER_WATCHLIST_MATCH&#x60;  - &#x60;ADDRESS_COUNTRY_WATCHLIST_MATCH&#x60;  - &#x60;EMAIL_COUNTRY_WATCHLIST_MATCH&#x60;  - &#x60;IP_COUNTRY_WATCHLIST_MATCH&#x60;  | [optional] 
**message** | **String** | The detail message related to the status and reason listed above. | [optional] 


