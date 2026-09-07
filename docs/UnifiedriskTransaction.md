# CyberSource.UnifiedriskTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** | Unique identifier for the transaction being assessed | [optional] 
**status** | **String** | Transaction status: NEW, APPROVED, DECLINED, REVERSED, FRAUD | [optional] 
**statusReason** | **String** | Reason code for the transaction status | [optional] 
**messageType** | **String** | Message type: AUTHORIZATION, INQUIRY, ADVICE, REVERSAL | [optional] 
**type** | **String** | The type of transaction being processed | [optional] 
**attribute** | **String** | Transaction attribute: AGGREGATION, CARDLESS_ATM, etc | [optional] 
**initiator** | **String** | Who initiated transaction: MERCHANT, CUSTOMER | [optional] 
**channel** | **String** | Channel used: ONLINE, MOBILE, ATM, BRANCH, etc | [optional] 
**timestamp** | **Date** | Local transaction timestamp without timezone | [optional] 
**cutoffDateTime** | **Date** | Cutoff date/time for event or journey | [optional] 
**isRecurring** | **Boolean** | Indicates if this is a recurring transaction | [optional] 
**preOrder** | **Boolean** | Indicates if this is a pre-order | [optional] 
**preOrderDate** | **Date** | Expected availability date for pre-order | [optional] 
**reordered** | **Boolean** | Indicates if customer is reordering | [optional] 
**destinationCountry** | **String** | Destination country for funds | [optional] 
**declinePhase** | **String** | Phase where transaction was declined | [optional] 
**trustedMerchant** | **Boolean** | Indicates if merchant is on trusted list | [optional] 
**additionalFees** | [**UnifiedriskTransactionAdditionalFees**](UnifiedriskTransactionAdditionalFees.md) |  | [optional] 
**amount** | [**UnifiedriskTransactionAmount**](UnifiedriskTransactionAmount.md) |  | [optional] 
**recurringDetails** | [**UnifiedriskTransactionRecurringDetails**](UnifiedriskTransactionRecurringDetails.md) |  | [optional] 
**direction** | **String** | Direction of the transaction flow relative to the customer's account (e.g., CREDIT for incoming funds, DEBIT for outgoing funds). Determines risk model orientation and velocity tracking | [optional] 
**isChargeback** | **Boolean** | Indicates whether this transaction represents a chargeback or dispute reversal. True signals a disputed transaction requiring fraud investigation and issuer liability assessment | [optional] 
**fraudLiability** | **String** | Indicates which party bears fraud liability for this transaction (e.g., ISSUER, MERCHANT, ACQUIRER). Liability shifts apply in 3DS-authenticated or EMV chip transactions | [optional] 
**onUsFlag** | **Boolean** | Indicates whether the transaction is an on-us transaction where the issuing and acquiring institutions are the same entity. On-us transactions may follow different risk rules and processing paths | [optional] 
**numberOfTransactions** | **Number** | Total count of transactions associated with this batch, order, or session. Used for velocity-based risk rules and aggregated fraud monitoring | [optional] 
**batchDetails** | [**UnifiedriskTransactionBatchDetails**](UnifiedriskTransactionBatchDetails.md) |  | [optional] 
**checkDetails** | [**UnifiedriskTransactionCheckDetails**](UnifiedriskTransactionCheckDetails.md) |  | [optional] 
**purpose** | **String** | Business purpose or reason code for this transaction (e.g., PURCH for purchase, SALA for salary, REFND for refund). Used for transaction classification and AML monitoring | [optional] 


