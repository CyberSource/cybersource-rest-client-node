# CyberSource.RiskV1ExportComplianceInquiriesPost201Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PtsV2IncrementalAuthorizationPatch201ResponseLinks**](PtsV2IncrementalAuthorizationPatch201ResponseLinks.md) |  | [optional] 
**id** | **String** | An unique identification number assigned by CyberSource to identify the submitted request. It is also appended to the endpoint of the resource.  On incremental authorizations, this value with be the same as the identification number returned in the original authorization response.  | [optional] 
**submitTimeUtc** | **String** | Time of request in UTC. Format: &#x60;YYYY-MM-DDThh:mm:ssZ&#x60; Example &#x60;2016-08-11T22:47:57Z&#x60; equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The &#x60;T&#x60; separates the date and the time. The &#x60;Z&#x60; indicates UTC.  | [optional] 
**submitTimeLocal** | **String** | Time that the transaction was submitted in local time. | [optional] 
**status** | **String** | The status for the call can be: - COMPLETED - INVALID_REQUEST - DECLINED  | [optional] 
**reason** | **String** | The reason of the status. Value can be   - CUSTOMER_WATCHLIST_MATCH   - ADDRESS_COUNTRY_WATCHLIST_MATCH   - EMAIL_COUNTRY_WATCHLIST_MATCH   - IP_COUNTRY_WATCHLIST_MATCH  | [optional] 
**message** | **String** | The message describing the reason of the status. Value can be   - The customer matched the Denied Parties List   - The Export bill_country/ship_country  match   - Export email_country match   - Export hostname_country/ip_country match  | [optional] 
**clientReferenceInformation** | [**PtsV2IncrementalAuthorizationPatch201ResponseClientReferenceInformation**](PtsV2IncrementalAuthorizationPatch201ResponseClientReferenceInformation.md) |  | [optional] 
**exportComplianceInformation** | [**RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformation**](RiskV1ExportComplianceInquiriesPost201ResponseExportComplianceInformation.md) |  | [optional] 
**errorInformation** | [**PtsV2PaymentsPost201ResponseErrorInformation**](PtsV2PaymentsPost201ResponseErrorInformation.md) |  | [optional] 


