# CyberSource.PtsV2PaymentsPost201ResponseEmbeddedActionsCONSUMERAUTHENTICATION

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The status for payerAuthentication 201 enroll and validate calls. Possible values are: - &#x60;AUTHENTICATION_SUCCESSFUL&#x60; - &#x60;PENDING_AUTHENTICATION&#x60; - &#x60;INVALID_REQUEST&#x60; - &#x60;AUTHENTICATION_FAILED&#x60;  | [optional] 
**reason** | **String** | The reason of the status. Possible values are: - &#x60;INVALID_MERCHANT_CONFIGURATION&#x60; - &#x60;CONSUMER_AUTHENTICATION_REQUIRED&#x60; - &#x60;CONSUMER_AUTHENTICATION_FAILED&#x60; - &#x60;AUTHENTICATION_FAILED&#x60;  | [optional] 
**message** | **String** | The message describing the reason of the status. Value is: - Encountered a Payer Authentication problem. Payer could not be authenticated.  | [optional] 


