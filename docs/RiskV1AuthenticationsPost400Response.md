# CyberSource.RiskV1AuthenticationsPost400Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**submitTimeUtc** | **String** | Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` **Example** `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  Returned by Cybersource for all services.  | [optional] 
**status** | **String** | The status for payerAuthentication 400 setup calls. Possible values are: - INVALID_REQUEST  | [optional] 
**reason** | **String** | The reason of the status.  | [optional] 
**message** | **String** | The message describing the reason of the status. Value is: - Encountered a Payer Authentication problem. Payer could not be setup.  | [optional] 
**details** | [**[PtsV2PaymentsPost201ResponseErrorInformationDetails]**](PtsV2PaymentsPost201ResponseErrorInformationDetails.md) |  | [optional] 


