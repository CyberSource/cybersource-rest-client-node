# CyberSource.Ucv1sessionsDataSenderInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **String** | First name of the sender. This field is applicable for AFT and OCT transactions.   Only alpha numeric values are supported.Special characters not in the standard ASCII character set, are not supported and will be stripped before being sent to the processor.  | [optional] 
**middleName** | **String** | Middle name of the sender. This field is applicable for AFT and OCT transactions.   Only alpha numeric values are supported. Special characters not in the standard ASCII character set, are not supported and will be stripped before being sent to sent to the processor.  | [optional] 
**lastName** | **String** | Last name of the sender. This field is applicable for AFT and OCT transactions.  Only alpha numeric values are supported. Special characters not in the standard ASCII character set, are not supported and will be stripped before being sent to sent to the processor.  | [optional] 
**address1** | **String** | The street address of the sender. This field is applicable for AFT transactions.   Only alpha numeric values are supported.  Special characters not in the standard ASCII character set are not supported and will be stripped before being sent to sent to the processor.  | [optional] 
**locality** | **String** | The city or locality of the sender. This field is applicable for AFT transactions.  Only alpha numeric values are supported.  Special characters not in the standard ASCII character set are not supported and will be stripped before being sent to sent to the processor.  | [optional] 
**administrativeArea** | **String** | The state or province of the sender. This field is applicable for AFT transactions when the sender country is US or CA. Else it is optional.  Must be a two character value  | [optional] 
**postalCode** | **String** | Postal code of sender.  | [optional] 
**countryCode** | **String** | The country associated with the address of the sender. This field is applicable for AFT transactions.   Must be a two character ISO country code.  For example, see [ISO Country Code](https://developer.cybersource.com/docs/cybs/en-us/country-codes/reference/all/na/country-codes/country-codes.html)  | [optional] 
**phoneNumber** | **String** | Sender phone number | [optional] 
**dateOfBirth** | **String** | Sender's date of birth. **Format**: `YYYYMMDD`.  This field is a `pass-through`, which means that CyberSource ensures that the value is eight numeric characters but otherwise does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor.  | [optional] 
**accountType** | **String** | Identifies the sender's account type.     This field is applicable for AFT transactions.      Valid values are:       - `00` for Other       - `01` for Routing Transit Number (RTN) + Bank Account Number (BAN)       - `02` for International Bank Account Number (IBAN)       - `03` for Card Account       - `04` for Email       - `05` for Phone Number       - `06` for Bank Account Number (BAN) + Bank Identification Code (BIC), also known as a SWIFT code       - `07` for Wallet ID       - `08` for Social Network ID  | [optional] 
**account** | [**Ucv1sessionsDataSenderInformationAccount**](Ucv1sessionsDataSenderInformationAccount.md) |  | [optional] 


