# CyberSource.TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Mapped Electronic Verification response code for the customer's email address.  For details, see `auth_ev_email` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  | [optional] 
**emailRaw** | **String** | Raw Electronic Verification response code from the processor for the customer's email address. | [optional] 
**name** | **String** | #### Visa Platform Connect Mapped Electronic Verification response code for the customer's name.  Valid values :  'Y'   Yes, the data Matches 'N'   No Match 'O'   Partial Match  | [optional] 
**nameRaw** | **String** | #### Visa Platform Connect Raw Electronic Verification response code from the processor for the customer's name.  Valid values :  '01'     Match '50'     Partial Match '99'     No Match  | [optional] 
**phoneNumber** | **String** | Mapped Electronic Verification response code for the customer's phone number.  For details, see `auth_ev_phone_number` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  | [optional] 
**phoneNumberRaw** | **String** | Raw Electronic Verification response code from the processor for the customer's phone number. | [optional] 
**street** | **String** | Mapped Electronic Verification response code for the customer's street address.  For details, see `auth_ev_street` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  | [optional] 
**streetRaw** | **String** | Raw Electronic Verification response code from the processor for the customer's street address. | [optional] 
**postalCode** | **String** | Mapped Electronic Verification response code for the customer's postal code.  For details, see `auth_ev_postal_code` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  | [optional] 
**postalCodeRaw** | **String** | Raw Electronic Verification response code from the processor for the customer's postal code. | [optional] 


