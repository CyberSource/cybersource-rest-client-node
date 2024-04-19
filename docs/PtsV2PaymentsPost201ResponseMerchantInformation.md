# CyberSource.PtsV2PaymentsPost201ResponseMerchantInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantName** | **String** | Use this field only if you are requesting payment with Payer Authentication serice together.  Your company's name as you want it to appear to the customer in the issuing bank's authentication form. This value overrides the value specified by your merchant bank.  | [optional] 
**merchantDescriptor** | [**PtsV2PaymentsPost201ResponseMerchantInformationMerchantDescriptor**](PtsV2PaymentsPost201ResponseMerchantInformationMerchantDescriptor.md) |  | [optional] 
**returnUrl** | **String** | URL for displaying payment results to the consumer (notifications) after the transaction is processed. Usually this URL belongs to merchant and its behavior is defined by merchant  | [optional] 


