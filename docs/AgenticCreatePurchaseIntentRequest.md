# CyberSource.AgenticCreatePurchaseIntentRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientCorrelationId** | **String** | Client Correlation Id used during the tokenization or during FIDO assertion. | 
**paymentInformation** | [**Acpv1tokensPaymentInformation**](Acpv1tokensPaymentInformation.md) |  | 
**deviceInformation** | [**Acpv1tokensDeviceInformation**](Acpv1tokensDeviceInformation.md) |  | 
**assuranceData** | [**[Acpv1tokensAssuranceData]**](Acpv1tokensAssuranceData.md) | Assurance data. | 
**mandates** | [**[Acpv1instructionsMandates]**](Acpv1instructionsMandates.md) | Mandate data. | 
**buyerInformation** | [**Acpv1tokensBuyerInformation**](Acpv1tokensBuyerInformation.md) |  | [optional] 
**isRecurring** | **Boolean** | Indicates whether the transaction is recurring. Default value is false. | [optional] 
**consumerPrompt** | **String** | Recap - A summary or condensed version of user prompts that leads to the purchase. | [optional] 


