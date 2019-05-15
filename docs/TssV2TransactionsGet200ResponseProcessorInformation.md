# CyberSource.TssV2TransactionsGet200ResponseProcessorInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**processor** | [**TssV2TransactionsGet200ResponseProcessorInformationProcessor**](TssV2TransactionsGet200ResponseProcessorInformationProcessor.md) |  | [optional] 
**transactionId** | **String** | Network transaction identifier (TID). You can use this value to identify a specific transaction when you are discussing the transaction with your processor. Not all processors provide this value.  | [optional] 
**networkTransactionId** | **String** | The description for this field is not available. | [optional] 
**responseId** | **String** | The description for this field is not available. | [optional] 
**providerTransactionId** | **String** | The description for this field is not available. | [optional] 
**approvalCode** | **String** | Authorization code. Returned only when the processor returns this value.  | [optional] 
**responseCode** | **String** | For most processors, this is the error message sent directly from the bank. Returned only when the processor returns this value.  Important Do not use this field to evaluate the result of the authorization.  | [optional] 
**avs** | [**PtsV2PaymentsPost201ResponseProcessorInformationAvs**](PtsV2PaymentsPost201ResponseProcessorInformationAvs.md) |  | [optional] 
**cardVerification** | [**Riskv1decisionsCardVerification**](Riskv1decisionsCardVerification.md) |  | [optional] 
**achVerification** | [**PtsV2PaymentsPost201ResponseProcessorInformationAchVerification**](PtsV2PaymentsPost201ResponseProcessorInformationAchVerification.md) |  | [optional] 
**electronicVerificationResults** | [**TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults**](TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults.md) |  | [optional] 
**systemTraceAuditNumber** | **String** | This field is returned only for **American Express Direct** and **CyberSource through VisaNet**.  **American Express Direct**  System trace audit number (STAN). This value identifies the transaction and is useful when investigating a chargeback dispute.  **CyberSource through VisaNet**  System trace number that must be printed on the customer’s receipt.  | [optional] 
**responseCodeSource** | **String** | Used by Visa only and contains the response source/reason code that identifies the source of the response decision.  | [optional] 


