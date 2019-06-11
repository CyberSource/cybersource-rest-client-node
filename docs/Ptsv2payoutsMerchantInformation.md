# CyberSource.Ptsv2payoutsMerchantInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categoryCode** | **Number** | The value for this field is a four-digit number that the payment card industry uses to classify merchants into market segments. A payment card company assigned one or more of these values to your business when you started accepting the payment card company’s cards. When you do not include this field in your request, CyberSource uses the value in your CyberSource account.  For processor-specific information, see the &#x60;merchant_category_code&#x60; field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  #### CyberSource through VisaNet The value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP01 TCR4 - Position: 150-153 - Field: Merchant Category Code  | [optional] 
**submitLocalDateTime** | **String** | Time that the transaction was submitted in local time. The time is in hhmmss format.  | [optional] 
**vatRegistrationNumber** | **String** | Your government-assigned tax identification number.  For CtV processors, the maximum length is 20.  For other processor-specific information, see the &#x60;merchant_vat_registration_number&#x60; field description in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html)  | [optional] 
**merchantDescriptor** | [**Ptsv2payoutsMerchantInformationMerchantDescriptor**](Ptsv2payoutsMerchantInformationMerchantDescriptor.md) |  | [optional] 


