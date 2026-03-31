# CyberSource.Ptsv1pullfundstransferSenderInformationPersonalIdentification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issuingCountry** | **String** | Issuing country of the identification.   The field format should be a 2 character ISO 3166-1 alpha-2 country code.  | [optional] 
**id** | **String** | The ID number/value.  Visa Direct(35 characters)   This tag will contain an acquirer-populated id value associated with the API.   If `senderInformation.personalIdentification.type`=`BTHD`, then the id format must be `YYYYMMDD`.  | [optional] 
**type** | **String** | Visa Direct   This tag will contain the type of sender identification.   The valid values are:   • `BTHD` (Date of birth)   • `CUID` (Customer identification (unspecified))   • `NTID` (National identification)   • `PASN` (Passport number)   • `DRLN` (Driver license)   • `TXIN` (Tax identification)   • `CPNY` (Company registration number)   • `PRXY` (Proxy identification)   • `SSNB` (Social security number)   • `ARNB` (Alien registration number)   • `LAWE` (Law enforcement identification)   • `MILI` (Military identification)   • `TRVL` (Travel identification (non-passport))   • `EMAL` (Email)   • `PHON` (Phone number)  | [optional] 
**personalIdType** | **String** | It denotes whether the tax ID is a business or individual tax ID.   The valid values are:   • `B` (Business)   • `I` (Individual)  Visa Direct   This field is required when `senderInformation.personalIdentification.type` has the value of `TXIN` (Tax identification).   A value for `senderInformation.personalInformation.id` is required when `senderInformation.personalIdentification.personalIdType` is present in a request.  | [optional] 


