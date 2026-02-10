# CyberSource.PtsV2PaymentsPost201ResponseMerchantInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantName** | **String** | Use this field only if you are requesting payment with Payer Authentication serice together.  Your company's name as you want it to appear to the customer in the issuing bank's authentication form. This value overrides the value specified by your merchant bank.  | [optional] 
**merchantDescriptor** | [**PtsV2PaymentsPost201ResponseMerchantInformationMerchantDescriptor**](PtsV2PaymentsPost201ResponseMerchantInformationMerchantDescriptor.md) |  | [optional] 
**categoryCode** | **String** | The value for this field is a four-digit number that the payment card industry uses to classify merchants into market segments. A payment card company assigned one or more of these values to your business when you started accepting the payment card company's cards. When you do not include this field in your request, Cybersource uses the value in your Cybersource account. Use this field only for clearing with your acquirer.  | [optional] 
**returnUrl** | **String** | URL for displaying payment results to the consumer (notifications) after the transaction is processed. Usually this URL belongs to merchant and its behavior is defined by merchant  | [optional] 


