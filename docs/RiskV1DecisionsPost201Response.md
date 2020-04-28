# CyberSource.RiskV1DecisionsPost201Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PtsV2PaymentsPost201ResponseLinks**](PtsV2PaymentsPost201ResponseLinks.md) |  | [optional] 
**id** | **String** | An unique identification number assigned by CyberSource to identify the submitted request. It is also appended to the endpoint of the resource.  On incremental authorizations, this value with be the same as the identification number returned in the original authorization response.  | [optional] 
**submitTimeUtc** | **String** | Time of request in UTC. Format: &#x60;YYYY-MM-DDThh:mm:ssZ&#x60; Example &#x60;2016-08-11T22:47:57Z&#x60; equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The &#x60;T&#x60; separates the date and the time. The &#x60;Z&#x60; indicates UTC.  | [optional] 
**submitTimeLocal** | **String** | Time that the transaction was submitted in local time. | [optional] 
**status** | **String** | The status of the submitted transaction.  Possible values:   - &#x60;ACCEPTED&#x60;   - &#x60;REJECTED&#x60;   - &#x60;PENDING_REVIEW&#x60;   - &#x60;DECLINED&#x60;   - &#x60;CHALLENGE&#x60;   - &#x60;PENDING_AUTHENTICATION&#x60;  | [optional] 
**riskInformation** | [**PtsV2PaymentsPost201ResponseRiskInformation**](PtsV2PaymentsPost201ResponseRiskInformation.md) |  | [optional] 
**paymentInformation** | [**RiskV1DecisionsPost201ResponsePaymentInformation**](RiskV1DecisionsPost201ResponsePaymentInformation.md) |  | [optional] 
**errorInformation** | [**PtsV2PaymentsPost201ResponseErrorInformation**](PtsV2PaymentsPost201ResponseErrorInformation.md) |  | [optional] 


