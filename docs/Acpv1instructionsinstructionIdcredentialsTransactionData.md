# CyberSource.Acpv1instructionsinstructionIdcredentialsTransactionData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientReferenceInformation** | [**Acpv1instructionsinstructionIdcredentialsClientReferenceInformation**](Acpv1instructionsinstructionIdcredentialsClientReferenceInformation.md) |  | 
**mandateReferenceData** | [**[Acpv1instructionsinstructionIdcredentialsMandateReferenceData]**](Acpv1instructionsinstructionIdcredentialsMandateReferenceData.md) | Mandate Reference Data. | [optional] 
**type** | **String** | (Conditional) Type of the transaction. This field is used to determine the type of transaction and the associated processing rules.   Possible values:     - `PURCHASE` (Default)   - `BILL_PAYMENT`   - `MONEY_TRANSFER`   - `DISBURSEMENT`   - `P2P`  | [optional] 
**orderInformation** | [**Acpv1instructionsinstructionIdcredentialsOrderInformation**](Acpv1instructionsinstructionIdcredentialsOrderInformation.md) |  | 
**paymentServiceProviderUrl** | **String** | (Conditional) URL of the payment service provider. | [optional] 
**paymentServiceProviderName** | **String** | (Conditional) Name of the payment service provider. | [optional] 
**merchantOrderId** | **String** | (Conditional) Digital Payment Application generated order/invoice number corresponding to a Consumer purchase. | [optional] 
**merchantInformation** | [**Acpv1instructionsinstructionIdcredentialsMerchantInformation**](Acpv1instructionsinstructionIdcredentialsMerchantInformation.md) |  | 
**paymentOptions** | [**Acpv1instructionsinstructionIdcredentialsPaymentOptions**](Acpv1instructionsinstructionIdcredentialsPaymentOptions.md) |  | [optional] 
**attachments** | [**[Acpv1instructionsinstructionIdcredentialsAttachments]**](Acpv1instructionsinstructionIdcredentialsAttachments.md) |  | [optional] 


