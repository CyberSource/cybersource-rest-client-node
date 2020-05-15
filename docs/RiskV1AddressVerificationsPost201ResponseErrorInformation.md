# CyberSource.RiskV1AddressVerificationsPost201ResponseErrorInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | The reason of the status. Value can be   - &#x60;APARTMENT_NUMBER_NOT_FOUND&#x60;   - &#x60;INSUFFICIENT_ADDRESS_INFORMATION&#x60;   - &#x60;HOUSE_OR_BOX_NUMBER_NOT_FOUND&#x60;   - &#x60;MULTIPLE_ADDRESS_MATCHES&#x60;   - &#x60;BOX_NUMBER_NOT_FOUND&#x60;   - &#x60;ROUTE_SERVICE_NOT_FOUND&#x60;   - &#x60;STREET_NAME_NOT_FOUND&#x60;   - &#x60;POSTAL_CODE_NOT_FOUND&#x60;   - &#x60;UNVERIFIABLE_ADDRESS&#x60;   - &#x60;MULTIPLE_ADDRESS_MATCHES_INTERNATIONAL&#x60;   - &#x60;ADDRESS_MATCH_NOT_FOUND&#x60;   - &#x60;UNSUPPORTED_CHARACTER_SET&#x60;   - &#x60;INVALID_MERCHANT_CONFIGURATION&#x60;  | [optional] 
**message** | **String** | The detail message related to the status and reason listed above. | [optional] 
**details** | [**[PtsV2PaymentsPost201ResponseErrorInformationDetails]**](PtsV2PaymentsPost201ResponseErrorInformationDetails.md) |  | [optional] 


