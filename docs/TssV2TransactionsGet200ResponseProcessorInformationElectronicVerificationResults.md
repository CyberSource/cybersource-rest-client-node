# CyberSource.TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Mapped Electronic Verification response code for the customer&#39;s email address.  For details, see &#x60;auth_ev_email&#x60; field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  | [optional] 
**emailRaw** | **String** | Raw Electronic Verification response code from the processor for the customer&#39;s email address. | [optional] 
**name** | **String** | #### Visa Platform Connect Mapped Electronic Verification response code for the customer&#39;s name.  Valid values :  &#39;Y&#39;   Yes, the data Matches &#39;N&#39;   No Match &#39;O&#39;   Partial Match  | [optional] 
**nameRaw** | **String** | #### Visa Platform Connect Raw Electronic Verification response code from the processor for the customer&#39;s name.  Valid values :  &#39;01&#39;     Match &#39;50&#39;     Partial Match &#39;99&#39;     No Match  | [optional] 
**phoneNumber** | **String** | Mapped Electronic Verification response code for the customer&#39;s phone number.  For details, see &#x60;auth_ev_phone_number&#x60; field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  | [optional] 
**phoneNumberRaw** | **String** | Raw Electronic Verification response code from the processor for the customer&#39;s phone number. | [optional] 
**street** | **String** | Mapped Electronic Verification response code for the customer&#39;s street address.  For details, see &#x60;auth_ev_street&#x60; field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  | [optional] 
**streetRaw** | **String** | Raw Electronic Verification response code from the processor for the customer&#39;s street address. | [optional] 
**postalCode** | **String** | Mapped Electronic Verification response code for the customer&#39;s postal code.  For details, see &#x60;auth_ev_postal_code&#x60; field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  | [optional] 
**postalCodeRaw** | **String** | Raw Electronic Verification response code from the processor for the customer&#39;s postal code. | [optional] 


