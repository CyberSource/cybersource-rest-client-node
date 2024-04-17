# CyberSource.Boardingv1registrationsOrganizationInformationOwners

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **String** |  | 
**middleName** | **String** |  | [optional] 
**lastName** | **String** |  | 
**birthDate** | **Date** | `Format: YYYY-MM-DD` Example 2016-08-11 equals August 11, 2016  | 
**isPrimary** | **Boolean** | Determines whether the owner is the Primary owner of the organization | 
**ssn** | **String** | Social Security Number | [optional] 
**passportNumber** | **String** | Passport number | [optional] 
**passportCountry** | **String** |  | [optional] 
**jobTitle** | **String** |  | 
**hasSignificantResponsability** | **Boolean** | Determines whether owner has significant responsibility to control, manage or direct the company | 
**ownershipPercentage** | **Number** | Determines the percentage of ownership this owner has. For the primary owner the percentage can be from 0-100; for other owners the percentage can be from 25-100 and the sum of ownership accross owners cannot exceed 100 | 
**phoneNumber** | **String** |  | 
**email** | **String** |  | 
**address** | [**Boardingv1registrationsOrganizationInformationBusinessInformationAddress**](Boardingv1registrationsOrganizationInformationBusinessInformationAddress.md) |  | 


