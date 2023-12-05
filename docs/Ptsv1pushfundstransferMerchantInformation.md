# CyberSource.Ptsv1pushfundstransferMerchantInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categoryCode** | **Number** | The value for this field is a four-digit number that the payment card industry uses to classify merchants into market segments. A payment card company assigned one or more of these values to your business when you started accepting the payment card company&#39;s cards. When you do not include this field in your request, CyberSource uses the value in your CyberSource account.  For processor-specific information, see the merchant_category_code field description in Credit Card Services Using the SCMP API.  Visa Platform Connect The value for this field corresponds to the following data in the TC 33 capture file5:  Record: CP01 TCR4 Position: 150-153 Field: Merchant Category Code  | [optional] 
**submitLocalDateTime** | **String** | Time that the transaction was submitted in local time. The time is in hhmmss format.  | [optional] 
**vatRegistrationNumber** | **String** | Your government-assigned tax identification number.  Visa Platform Connect: max length is 20  | [optional] 
**merchantDescriptor** | [**Ptsv1pushfundstransferMerchantInformationMerchantDescriptor**](Ptsv1pushfundstransferMerchantInformationMerchantDescriptor.md) |  | [optional] 


