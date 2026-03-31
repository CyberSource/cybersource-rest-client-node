# CyberSource.Ptsv1pullfundstransferRecipientInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administrativeArea** | **String** | Recipient's state. Use the State, Province, and Territory Codes for the United States and Canada. Value must be an ISO Standard State Code:  https://developer.cybersource.com/library/documentation/sbc/quickref/states_and_provinces.pdf  | [optional] 
**postalCode** | **String** | Recipient's postal code.  | [optional] 
**country** | **String** | Recipient's country code. Check that this field contains 2-character alpha ISO 3166-1 standard values.  | [optional] 
**personalIdentification** | [**Ptsv1pullfundstransferRecipientInformationPersonalIdentification**](Ptsv1pullfundstransferRecipientInformationPersonalIdentification.md) |  | [optional] 
**firstName** | **String** | Recipient's first name.  | [optional] 
**middleInitial** | **String** | Middle Initial of recipient. This field is supported by FDC Compass.  | [optional] 
**middleName** | **String** | Recipient's middle name. This field is a pass through, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor.  | [optional] 
**lastName** | **String** | Recipient's last name. Conditional field. If `recipientInformation.sameAsSender` = `false`, this field is mandatory.  | [optional] 
**address1** | **String** | Street address of recipient. This field is conditional: it is required if using neither a Customer nor Payment Instrument token.  | [optional] 
**address2** | **String** | Second line of the recipient's address.  | [optional] 
**buildingNumber** | **String** | This field contains the house or the building number of the recipient address.  | [optional] 
**locality** | **String** | Recipient city.  | [optional] 
**identificationNumber** | **String** | Government-issued identification number.  Conditional: This field is mandatory if the `processingInformation.businessApplicationId` is any of the following:   - `AA` - `PP` - `TU` - `BI` - `WT` - `FT` - and country code = `BR`, `AR`, `CO`, `PE`, in `recipientInformation.countryCode` (Argentina, Brazil, Colombia, and Peru)  | [optional] 
**type** | **String** | `B` for Business or `I` for individual.  Conditional:  If `recipientInformation.identificationNumber` is present, then this field is mandatory.  | [optional] 
**descriptor** | **String** | Recipient first name, this will be concatenated with the 4-digit originator abbreviation.  | [optional] 
**accountId** | **String** | Identifier for the recipient's account.  | [optional] 
**accountType** | **String** | Identifies the recipient's account type. This field is applicable for AFT transactions.  Valid values are:  - `00` Other - `01` Routing transit number (RTN) and bank account - `02` IBAN - `03` Card account - `04` Email - `05` Phone number - `06` Bank account number (BAN) and bank identification code (BIC) - `07` Wallet ID - `08` Social network ID  | [optional] 
**aliasName** | **String** | Account owner alias name.  | [optional] 
**countryOfBirth** | **String** | Account Owner Country of Birth  | [optional] 
**dateOfBirth** | **String** | Recipient's date of birth. Format: YYYYMMDD.  | [optional] 
**email** | **String** | Account Owner email address  | [optional] 
**nationality** | **String** | Account Owner Nationality  | [optional] 
**occupation** | **String** | Account Owner Occupation  | [optional] 
**streetName** | **String** | This field contains the street name of the recipient's address.  | [optional] 


