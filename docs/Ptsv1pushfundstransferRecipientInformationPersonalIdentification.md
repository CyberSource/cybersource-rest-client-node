# CyberSource.Ptsv1pushfundstransferRecipientInformationPersonalIdentification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID number/value. Processor(35)  | [optional] 
**type** | **String** | This tag will contain the type of sender identification. The valid values are: - `BTHD`: (Date of birth) - `CUID`: (Customer identification (unspecified)) - `NTID`: (National identification) - `PASN`: (Passport number) - `DRLN`: (Driver license) - `TXIN`: (Tax identification) - `CPNY`: (Company registration number) - `PRXY`: (Proxy identification) - `SSNB`: (Social security number) - `ARNB`: (Alien registration number) - `LAWE`: (Law enforcement identification) - `MILI`: (Military identification) - `TRVL`: (Travel identification (non-passport)) - `EMAL`: (Email) - `PHON`: (Phone number)  | [optional] 
**issuingCountry** | **String** | Issuing country of the identification. The field format should be a 2 character ISO 3166-1 alpha-2 country code.  | [optional] 
**personalIdType** | **String** | This tag will denote whether the tax ID is a business or individual tax ID when personal ID Type contains the value of TXIN (Tax identification).  The valid values are:  - `B` (Business) - `I` (Individual)  | [optional] 


