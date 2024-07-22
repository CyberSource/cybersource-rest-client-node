# CyberSource.Ptsv2payoutsMerchantInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categoryCode** | **Number** | The value for this field is a four-digit number that the payment card industry uses to classify merchants into market segments. A payment card company assigned one or more of these values to your business when you started accepting the payment card company's cards. When you do not include this field in your request, CyberSource uses the value in your CyberSource account.  #### CyberSource through VisaNet The value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP01 TCR4 - Position: 150-153 - Field: Merchant Category Code  | [optional] 
**submitLocalDateTime** | **String** | Time that the transaction was submitted in local time. The time is in hhmmss format.  | [optional] 
**vatRegistrationNumber** | **String** | Your government-assigned tax identification number.  #### Tax Calculation Required field for value added tax only. Not applicable to U.S. and Canadian taxes.  #### CyberSource through VisaNet For CtV processors, the maximum length is 20.  | [optional] 
**merchantDescriptor** | [**Ptsv2payoutsMerchantInformationMerchantDescriptor**](Ptsv2payoutsMerchantInformationMerchantDescriptor.md) |  | [optional] 


