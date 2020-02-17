# CyberSource.RiskV1AddressVerificationsPost201Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PtsV2IncrementalAuthorizationPatch201ResponseLinks**](PtsV2IncrementalAuthorizationPatch201ResponseLinks.md) |  | [optional] 
**id** | **String** | An unique identification number assigned by CyberSource to identify the submitted request. It is also appended to the endpoint of the resource.  On incremental authorizations, this value with be the same as the identification number returned in the original authorization response.  | [optional] 
**submitTimeUtc** | **String** | Time of request in UTC. Format: &#x60;YYYY-MM-DDThh:mm:ssZ&#x60; Example &#x60;2016-08-11T22:47:57Z&#x60; equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The &#x60;T&#x60; separates the date and the time. The &#x60;Z&#x60; indicates UTC.  | [optional] 
**submitTimeLocal** | **String** | Time that the transaction was submitted in local time. | [optional] 
**status** | **String** | The status for the call can be: - COMPLETED - INVALID_REQUEST - DECLINED  | [optional] 
**reason** | **String** | The reason of the status. Value can be   - APARTMENT_NUMBER_NOT_FOUND   - INSUFFICIENT_ADDRESS_INFORMATION   - HOUSE_OR_BOX_NUMBER_NOT_FOUND   - MULTIPLE_ADDRESS_MATCHES   - BOX_NUMBER_NOT_FOUND   - ROUTE_SERVICE_NOT_FOUND   - STREET_NAME_NOT_FOUND   - POSTAL_CODE_NOT_FOUND   - UNVERIFIABLE_ADDRESS   - MULTIPLE_ADDRESS_MATCHES_INTERNATIONAL   - ADDRESS_MATCH_NOT_FOUND   - UNSUPPORTED_CHARACTER_SET  | [optional] 
**message** | **String** | The message describing the reason of the status. Value can be   - Apartment number missing or not found.   - Insufficient address information.   - House/Box number not found on street.   - Multiple address matches were found.   - P.O. Box identifier not found or out of range.   - Route service identifier not found or out of range.   - Street name not found in Postal code.   - Postal code not found in database.   - Unable to verify or correct address.   - Multiple addres matches were found (international)   - Address match not found (no reason given)   - Unsupported character set  | [optional] 
**clientReferenceInformation** | [**PtsV2IncrementalAuthorizationPatch201ResponseClientReferenceInformation**](PtsV2IncrementalAuthorizationPatch201ResponseClientReferenceInformation.md) |  | [optional] 
**addressVerificationInformation** | [**RiskV1AddressVerificationsPost201ResponseAddressVerificationInformation**](RiskV1AddressVerificationsPost201ResponseAddressVerificationInformation.md) |  | [optional] 
**errorInformation** | [**PtsV2PaymentsPost201ResponseErrorInformation**](PtsV2PaymentsPost201ResponseErrorInformation.md) |  | [optional] 


