# CyberSource.Ptsv1pushfundstransferRecipientInformationPersonalIdentification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID number/value.  Visa Platform Connect This tag will contain an acquirer-populated value associated with the API : senderInformation.personalIdType which will identify the personal ID type of the sender.  Mastercard Send(80)  | [optional] 
**type** | **String** | This tag will contain the type of sender identification. The valid values are:  Visa Platform Connect: - `BTHD`: (Date of birth) - `CUID`: (Customer identification (unspecified)) - `NTID`: (National identification) - `PASN`: (Passport number) - `DRLN`: (Driver license) - `TXIN`: (Tax identification) - `CPNY`: (Company registration number) - `PRXY`: (Proxy identification) - `SSNB`: (Social security number) - `ARNB`: (Alien registration number) - `LAWE`: (Law enforcement identification) - `MILI`: (Military identification) - `TRVL`: (Travel identification (non-passport)) - `EMAL`: (Email) - `PHON`: (Phone number)  Mastercard Send: - `CUID`: (Customer identification (unspecified)) - `NTID`: (National identification) - `PASN`: (Passport number) - `DRLN`: (Driver license) - `TXIN`: (Tax identification) - `SSNB`: (Social security number) - `ARNB`: (Alien registration number) - `EIDN`: (Employer Identification Number) - `IDNB`: (Identity Card Number)  | [optional] 


