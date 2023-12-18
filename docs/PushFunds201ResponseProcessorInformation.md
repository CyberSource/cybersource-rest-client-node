# CyberSource.PushFunds201ResponseProcessorInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **Number** | Network transaction identifier (TID). This value can be used to identify a specific transaction when you are discussing the transaction with your processor.  | [optional] 
**responseCode** | **String** | Transaction status from the processor.  | [optional] 
**approvalCode** | **String** | Issuer-generated approval code for the transaction.  | [optional] 
**systemTraceAuditNumber** | **String** | System audit number. Returned by authorization and incremental authorization services.  Visa Platform Connect  System trace number that must be printed on the customer&#39;s receipt.  | [optional] 
**responseCodeSource** | **String** | Used by Visa only and contains the response source/reason code that identifies the source of the response decision.  | [optional] 
**retrievalReferenceNumber** | **String** | Unique reference number returned by the processor that identifies the transaction at the network.  Supported by Mastercard Send  | [optional] 


