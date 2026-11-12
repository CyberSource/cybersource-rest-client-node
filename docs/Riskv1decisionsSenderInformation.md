# CyberSource.Riskv1decisionsSenderInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Sender's full name, formatted as First Name Last Name.  | [optional] 
**firstName** | **String** | First name of the sender. This field is applicable for AFT and OCT transactions.   Only alpha numeric values are supported.Special characters not in the standard ASCII character set, are not supported and will be stripped before being sent to the processor.  | [optional] 
**middleName** | **String** | Middle name of the sender. This field is applicable for AFT and OCT transactions.   Only alpha numeric values are supported. Special characters not in the standard ASCII character set, are not supported and will be stripped before being sent to sent to the processor.  | [optional] 
**lastName** | **String** | Last name of the sender. This field is applicable for AFT and OCT transactions.  Only alpha numeric values are supported. Special characters not in the standard ASCII character set, are not supported and will be stripped before being sent to sent to the processor.  | [optional] 
**email** | **String** | Sender's email address, including the full domain name.  | [optional] 
**postalCode** | **String** | Postal code of sender.  | [optional] 
**administrativeArea** | **String** | The state or province of the sender. This field is applicable for AFT transactions when the sender country is US or CA. Else it is optional.  Must be a two character value  | [optional] 
**address1** | **String** | The street address of the sender. This field is applicable for AFT transactions.     Only alpha numeric values are supported.  Special characters not in the standard ASCII character set are not supported and will be stripped before being sent to sent to the processor.  | [optional] 
**countryCode** | **String** | The country associated with the address of the sender. This field is applicable for AFT transactions.   Must be a two character ISO country code.  For example, see [ISO Country Code](https://developer.cybersource.com/docs/cybs/en-us/country-codes/reference/all/na/country-codes/country-codes.html)  | [optional] 
**locality** | **String** | The city or locality of the sender. This field is applicable for AFT transactions.  Only alpha numeric values are supported.  Special characters not in the standard ASCII character set are not supported and will be stripped before being sent to sent to the processor.  | [optional] 
**referenceNumber** | **String** | This field is applicable for AFT transactions.   Contains a transaction reference number provided by the Merchant. Only alpha numeric values are supported.  | [optional] 
**phoneNumber** | **String** | Sender's phone number. | [optional] 
**dateOfBirth** | **String** | Sender's date of birth in YYYYMMDD format. | [optional] 
**vatRegistrationNumber** | **String** | Customer's government-assigned tax identification number.  | [optional] 
**personalIdType** | **String** | #### Visa Platform Connect This tag will contain the type of sender identification. The valid values are: • BTHD (Date of birth) • CUID (Customer identification (unspecified)) • NTID (National identification) • PASN (Passport number) • DRLN (Driver license) • TXIN (Tax identification) • CPNY (Company registration number) • PRXY (Proxy identification) • SSNB (Social security number) • ARNB (Alien registration number) • LAWE (Law enforcement identification) • MILI (Military identification) • TRVL (Travel identification (non-passport)) • EMAL (Email) • PHON (Phone number)  | [optional] 
**type** | **String** | #### Visa Platform Connect This tag will denote whether the tax ID is a business or individual tax ID when personal ID Type contains the value of TXIN (Tax identification). The valid values are: • B (Business) • I (Individual)  | [optional] 
**identificationNumber** | **String** | #### Visa Platform Connect This tag will contain an acquirer-populated value associated with the API : senderInformation.personalIdType which will identify the personal ID type of the sender.  | [optional] 
**account** | [**Riskv1decisionsSenderInformationAccount**](Riskv1decisionsSenderInformationAccount.md) |  | [optional] 


