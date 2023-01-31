# CyberSource.Ptsv1pushfundstransferSenderInformationPersonalIdentification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Visa Platform Connect(35) This tag will contain an acquirer-populated value associated with the API : senderInformation.personalIdType which will identify the personal ID type of the sender.  Mastercard Send(80)  | [optional] 
**personalIdType** | **String** | Visa Platform Connect This tag will denote whether the tax ID is a business or individual tax ID when personal ID Type contains the value of TXIN (Tax identification).  The valid values are: • B (Business) • I (Individual)  | [optional] 
**type** | **String** | This tag will contain the type of sender identification. The valid values are:  Visa Platform Connect: - &#x60;BTHD&#x60;: (Date of birth) - &#x60;CUID&#x60;: (Customer identification (unspecified)) - &#x60;NTID&#x60;: (National identification) - &#x60;PASN&#x60;: (Passport number) - &#x60;DRLN&#x60;: (Driver license) - &#x60;TXIN&#x60;: (Tax identification) - &#x60;CPNY&#x60;: (Company registration number) - &#x60;PRXY&#x60;: (Proxy identification) - &#x60;SSNB&#x60;: (Social security number) - &#x60;ARNB&#x60;: (Alien registration number) - &#x60;LAWE&#x60;: (Law enforcement identification) - &#x60;MILI&#x60;: (Military identification) - &#x60;TRVL&#x60;: (Travel identification (non-passport)) - &#x60;EMAL&#x60;: (Email) - &#x60;PHON&#x60;: (Phone number)  Mastercard Send: - &#x60;CUID&#x60;: (Customer identification (unspecified)) - &#x60;NTID&#x60;: (National identification) - &#x60;PASN&#x60;: (Passport number) - &#x60;DRLN&#x60;: (Driver license) - &#x60;TXIN&#x60;: (Tax identification) - &#x60;SSNB&#x60;: (Social security number) - &#x60;ARNB&#x60;: (Alien registration number) - &#x60;EIDN&#x60;: (Employer Identification Number) - &#x60;IDNB&#x60;: (Identity Card Number)  | [optional] 


