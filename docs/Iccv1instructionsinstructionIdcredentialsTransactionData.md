# CyberSource.Iccv1instructionsinstructionIdcredentialsTransactionData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientReferenceInformation** | [**Iccv1instructionsinstructionIdcredentialsClientReferenceInformation**](Iccv1instructionsinstructionIdcredentialsClientReferenceInformation.md) |  | 
**mandateReferenceData** | [**[Iccv1instructionsinstructionIdcredentialsMandateReferenceData]**](Iccv1instructionsinstructionIdcredentialsMandateReferenceData.md) | Mandate Reference Data. | [optional] 
**type** | **String** | (Conditional) Type of the transaction. This field is used to determine the type of transaction and the associated processing rules.   Possible values:     - `PURCHASE` (Default)   - `BILL_PAYMENT`   - `MONEY_TRANSFER`   - `DISBURSEMENT`   - `P2P`  | [optional] 
**orderInformation** | [**Iccv1instructionsinstructionIdcredentialsOrderInformation**](Iccv1instructionsinstructionIdcredentialsOrderInformation.md) |  | 
**paymentServiceProviderUrl** | **String** | (Conditional) URL of the payment service provider. | [optional] 
**paymentServiceProviderName** | **String** | (Conditional) Name of the payment service provider. | [optional] 
**merchantOrderId** | **String** | (Conditional) Digital Payment Application generated order/invoice number corresponding to a Consumer purchase. | [optional] 
**merchantInformation** | [**Iccv1instructionsinstructionIdcredentialsMerchantInformation**](Iccv1instructionsinstructionIdcredentialsMerchantInformation.md) |  | 
**paymentOptions** | [**Iccv1instructionsinstructionIdcredentialsPaymentOptions**](Iccv1instructionsinstructionIdcredentialsPaymentOptions.md) |  | [optional] 
**attachments** | [**[Iccv1instructionsinstructionIdcredentialsAttachments]**](Iccv1instructionsinstructionIdcredentialsAttachments.md) |  | [optional] 


