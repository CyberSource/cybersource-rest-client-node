# CyberSource.Ptsv2paymentsidcapturesMerchantInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantDescriptor** | [**Ptsv2paymentsMerchantInformationMerchantDescriptor**](Ptsv2paymentsMerchantInformationMerchantDescriptor.md) |  | [optional] 
**cardAcceptorReferenceNumber** | **String** | Reference number that facilitates card acceptor/corporation communication and record keeping.  For processor-specific information, see the card_acceptor_ref_number field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html)  | [optional] 
**categoryCode** | **Number** | Four-digit number that the payment card industry uses to classify merchants into market segments. Visa assigned one or more of these values to your business when you started accepting Visa cards.  If you do not include this field in your request, CyberSource uses the value in your CyberSource account.  For processor-specific information, see the merchant_category_code field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  | [optional] 
**vatRegistrationNumber** | **String** | Your government-assigned tax identification number.  For CtV processors, the maximum length is 20.  For other processor-specific information, see the merchant_vat_registration_number field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html)  | [optional] 


