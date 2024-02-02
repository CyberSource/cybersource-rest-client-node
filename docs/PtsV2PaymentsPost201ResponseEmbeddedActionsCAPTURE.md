# CyberSource.PtsV2PaymentsPost201ResponseEmbeddedActionsCAPTURE

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The status of the submitted transaction.  Possible values:  - PENDING  - TRANSMITTED (Only for Online Capture enabled merchants)  | [optional] 
**reason** | **String** | The reason of the status.  Possible values:  - MISSING_FIELD  - INVALID_DATA  - DUPLICATE_REQUEST  - INVALID_MERCHANT_CONFIGURATION  - EXCEEDS_AUTH_AMOUNT  - AUTH_ALREADY_REVERSED  - TRANSACTION_ALREADY_SETTLED  - INVALID_AMOUNT  - MISSING_AUTH  - TRANSACTION_ALREADY_REVERSED_OR_SETTLED  - NOT_SUPPORTED  | [optional] 
**message** | **String** | The detail message related to the status and reason listed above. | [optional] 


