# CyberSource.Ptsv1pullfundstransferRecipientInformationPersonalIdentification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issuingCountry** | **String** | Issuing country of the identification. The field format should be a 2 character ISO 3166-1 alpha-2 country code.  | [optional] 
**id** | **String** | This tag will contain an acquirer-populated id value associated with the API.  | [optional] 
**type** | **String** | This tag will contain the type of recipient identification. The valid values are:  - `BTHD`: (Date of birth) - `CUID`: (Customer identification (unspecified)) - `NTID`: (National identification) - `PASN`: (Passport number) - `DRLN`: (Driver license) - `TXIN`: (Tax identification) - `CPNY`: (Company registration number) - `PRXY`: (Proxy identification) - `SSNB`: (Social security number) - `ARNB`: (Alien registration number) - `LAWE`: (Law enforcement identification) - `MILI`: (Military identification) - `TRVL`: (Travel identification (non-passport)) - `EMAL`: (Email) - `PHON`: (Phone number)  | [optional] 
**personalIdType** | **String** | This field denotes whether the Tax ID is a business or individual's Tax ID when idType contains the value of TXIN (Tax identification).  The valid values are: B (Business) I (Individual)  | [optional] 


