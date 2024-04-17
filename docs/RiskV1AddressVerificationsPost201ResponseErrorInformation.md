# CyberSource.RiskV1AddressVerificationsPost201ResponseErrorInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | The reason of the status. Value can be   - `APARTMENT_NUMBER_NOT_FOUND`   - `INSUFFICIENT_ADDRESS_INFORMATION`   - `HOUSE_OR_BOX_NUMBER_NOT_FOUND`   - `MULTIPLE_ADDRESS_MATCHES`   - `BOX_NUMBER_NOT_FOUND`   - `ROUTE_SERVICE_NOT_FOUND`   - `STREET_NAME_NOT_FOUND`   - `POSTAL_CODE_NOT_FOUND`   - `UNVERIFIABLE_ADDRESS`   - `MULTIPLE_ADDRESS_MATCHES_INTERNATIONAL`   - `ADDRESS_MATCH_NOT_FOUND`   - `UNSUPPORTED_CHARACTER_SET`   - `INVALID_MERCHANT_CONFIGURATION`  | [optional] 
**message** | **String** | The detail message related to the status and reason listed above. | [optional] 
**details** | [**[PtsV2PaymentsPost201ResponseErrorInformationDetails]**](PtsV2PaymentsPost201ResponseErrorInformationDetails.md) |  | [optional] 


