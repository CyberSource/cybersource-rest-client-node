# CyberSource.RiskV1AuthenticationExcemptionsPost400Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**submitTimeUtc** | **String** | Time of request in UTC. Format: &#x60;YYYY-MM-DDThh:mm:ssZ&#x60; Example &#x60;2016-08-11T22:47:57Z&#x60; equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The &#x60;T&#x60; separates the date and the time. The &#x60;Z&#x60; indicates UTC.  | [optional] 
**status** | **String** | The status for payerAuthentication 201 enroll and validate calls. Value is: - AUTHENTICATION_FAILED  | [optional] 
**reason** | **String** | The reason of the status. Value is Failed_Authentication.  | [optional] 
**message** | **String** | The message describing the reason of the status. Value is: - Encountered a Payer Authentication problem. Payer could not be authenticated.  | [optional] 
**details** | [**[PtsV2PaymentsPost201ResponseErrorInformationDetails]**](PtsV2PaymentsPost201ResponseErrorInformationDetails.md) |  | [optional] 


