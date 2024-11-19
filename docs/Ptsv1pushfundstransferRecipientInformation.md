# CyberSource.Ptsv1pushfundstransferRecipientInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentInformation** | [**Ptsv1pushfundstransferRecipientInformationPaymentInformation**](Ptsv1pushfundstransferRecipientInformationPaymentInformation.md) |  | [optional] 
**address1** | **String** | First line of the recipient's address. Required for card payments  | [optional] 
**address2** | **String** | Second line of the recipient's address  | [optional] 
**locality** | **String** | Recipient city.  | [optional] 
**postalCode** | **String** | Recipient postal code.   For USA, this must be a valid value of 5 digits or 5 digits hyphen 4 digits, for example '63368', '63368-5555'. For other regions, this can be alphanumeric, length 1-10.  Mandatory for card payments.  | [optional] 
**administrativeArea** | **String** | The recipient's province, state or territory. Conditional, required if recipient's country is USA or CAN. Must be an ISO 3166-2 uppercase alpha 2 or 3 character country subdivision code. For example, Missouri is MO.  See https://developer.cybersource.com/library/documentation/sbc/quickref/states_and_provinces.pdf  Required for card payments.  | [optional] 
**country** | **String** | Recipient country code. Use the ISO Standard Alpha Country Codes.  https://developer.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf  | [optional] 
**firstName** | **String** | First name of recipient.  | [optional] 
**middleName** | **String** | Sender's middle name. This field is a passthrough, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor.  | [optional] 
**lastName** | **String** | Last name of recipient.  | [optional] 
**phoneNumber** | **String** | Customer's phone number.  It is recommended that you include the country code when the order is from outside the U.S.  | [optional] 
**email** | **String** | Customer's email address, including the full domain name.  | [optional] 
**personalIdentification** | [**Ptsv1pushfundstransferRecipientInformationPersonalIdentification**](Ptsv1pushfundstransferRecipientInformationPersonalIdentification.md) |  | [optional] 
**buildingNumber** | **String** | Building number in the street address.  For example, if the street address is: Rua da Quitanda 187 then the building number is 187.  Applicable to domestic Colombia transactions only.  | [optional] 
**streetName** | **String** | This field contains the street name of the recipient's address.  Applicable to domestic Colombia transactions only.  | [optional] 
**type** | **String** | `B` for Business or `I` for individual.  | [optional] 


