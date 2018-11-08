# CyberSource.PtsV2PaymentsRefundPost201ResponseProcessorInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** | Processor transaction ID.  This value identifies the transaction on a host system. This value is supported only for Moneris. It contains this information:   - Terminal used to process the transaction  - Shift during which the transaction took place  - Batch number  - Transaction number within the batch  You must store this value. If you give the customer a receipt, display this value on the receipt.  Example For the value 66012345001069003:   - Terminal ID &#x3D; 66012345  - Shift number &#x3D; 001  - Batch number &#x3D; 069  - Transaction number &#x3D; 003  | [optional] 
**forwardedAcquirerCode** | **String** | Name of the Japanese acquirer that processed the transaction. Returned only for CCS (CAFIS) and JCN Gateway. Please contact the CyberSource Japan Support Group for more information.  | [optional] 


