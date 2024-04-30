# CyberSource.Ptsv1pushfundstransferSenderInformationPersonalIdentification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Visa Platform Connect(35) This tag will contain an acquirer-populated value associated with the API : senderInformation.personalIdType which will identify the personal ID type of the sender.  Mastercard Send(80)  | [optional] 
**personalIdType** | **String** | Visa Platform Connect This tag will denote whether the tax ID is a business or individual tax ID when personal ID Type contains the value of TXIN (Tax identification).  The valid values are: • B (Business) • I (Individual)  | [optional] 
**type** | **String** | This tag will contain the type of sender identification. The valid values are:  Visa Platform Connect: - `BTHD`: (Date of birth) - `CUID`: (Customer identification (unspecified)) - `NTID`: (National identification) - `PASN`: (Passport number) - `DRLN`: (Driver license) - `TXIN`: (Tax identification) - `CPNY`: (Company registration number) - `PRXY`: (Proxy identification) - `SSNB`: (Social security number) - `ARNB`: (Alien registration number) - `LAWE`: (Law enforcement identification) - `MILI`: (Military identification) - `TRVL`: (Travel identification (non-passport)) - `EMAL`: (Email) - `PHON`: (Phone number)  Mastercard Send: - `CUID`: (Customer identification (unspecified)) - `NTID`: (National identification) - `PASN`: (Passport number) - `DRLN`: (Driver license) - `TXIN`: (Tax identification) - `SSNB`: (Social security number) - `ARNB`: (Alien registration number) - `EIDN`: (Employer Identification Number) - `IDNB`: (Identity Card Number)  | [optional] 


