# CyberSource.Ptsv2payoutsRecipientInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **String** | First name of the recipient.    This field is applicable for AFT & OCT transactions.  Only alpha numeric values are supported. Special characters not in the standard ASCII character set, are not supported and will be stripped before being sent to sent to the processor.  | [optional] 
**middleName** | **String** | Middle name of the recipient.    This field is applicable for AFT & OCT transactions.  Only alpha numeric values are supported. Special characters not in the standard ASCII character set, are not supported and will be stripped before being sent to sent to the processor.  | [optional] 
**lastName** | **String** | Last name of the recipient.  This field is applicable for AFT & OCT transactions.  Only alpha numeric values are supported. Special characters not in the standard ASCII character set, are not supported and will be stripped before being sent to sent to the processor.  | [optional] 
**address1** | **String** | The street address of the recipient This field is applicable for AFT and OCT transactions.  Only alpha numeric values are supported. Special characters not in the standard ASCII character set are not supported and will be stripped before being sent to sent to the processor.  | [optional] 
**locality** | **String** | The city of the recipient. This field is applicable for AFT and OCT transactions.  Only alpha numeric values are supported. Special characters not in the standard ASCII character set are not supported and will be stripped before being sent to sent to the processor.  | [optional] 
**administrativeArea** | **String** | The state or province of the recipient. This field is applicable for AFT and OCT transactions when the recipient country is US or CA. Else it is optional.  Must be a two character value  | [optional] 
**country** | **String** | The country associated with the address of the recipient. This field is applicable for AFT and OCT transactions.  Must be a two character ISO country code.  For example, see [ISO Country Code](https://developer.cybersource.com/docs/cybs/en-us/country-codes/reference/all/na/country-codes/country-codes.html)  | [optional] 
**postalCode** | **String** | Recipient postal code. Required only for FDCCompass. | [optional] 
**phoneNumber** | **String** | Recipient phone number. Required only for FDCCompass. | [optional] 
**aliasName** | **String** | Account owner alias name.  | [optional] 
**nationality** | **String** | Account Owner Nationality | [optional] 
**countryOfBirth** | **String** | Account Owner Country of Birth | [optional] 
**occupation** | **String** | Account Owner Occupation | [optional] 
**email** | **String** | Account Owner email address | [optional] 


