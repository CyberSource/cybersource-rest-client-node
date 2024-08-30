# CyberSource.PtsV2PaymentsPost201ResponseEmbeddedActionsCONSUMERAUTHENTICATION

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The status for payerAuthentication 201 enroll and validate calls. Possible values are: - `AUTHENTICATION_SUCCESSFUL` - `PENDING_AUTHENTICATION` - `AUTHENTICATION_FAILED`  | [optional] 
**reason** | **String** | The reason of the status. Possible values are: - `INVALID_MERCHANT_CONFIGURATION` - `CONSUMER_AUTHENTICATION_REQUIRED` - `CONSUMER_AUTHENTICATION_FAILED` - `AUTHENTICATION_FAILED`  | [optional] 
**message** | **String** | The message describing the reason of the status. Value is: - Encountered a Payer Authentication problem. Payer could not be authenticated.  | [optional] 


