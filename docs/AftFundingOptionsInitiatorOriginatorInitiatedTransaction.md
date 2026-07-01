# CyberSource.AftFundingOptionsInitiatorOriginatorInitiatedTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**originalTransactionId** | **String** | Contains a Visa-generated Transaction Identifier (TID) that is unique for each original authorization and financial request. The identifier links original messages to subsequent messages.  Conditional field. If the `processingInformation.fundingOptions.initiator.type`=`originator`, this field is mandatory.   **Notes**:   1. If an Pull Funds Transfer (AFT) transaction has a corresponding Push Funds Transfer (OCT) transaction, originators are strongly recommended to take the Transaction ID from the AFT and populate it into the OCT to link the two transactions together.  2. Originators must link the Originator-Initiated Transaction with the original transaction using the Transaction Identifier that was generated for the original cardholder initiated transaction. However, for standing-instruction MITs (i.e., recurring), acquirers can use the Transaction Identifier generated for the previous transaction in the series to link the subsequent transactions.  | [optional] 
**reason** | **String** | Possible values: - `1`: Resubmission - `2`: Delayed charge - `3`: Reauthorization for split shipment - `4`: No show - `5`: Account top up  Conditional: This field is not required for recurring transactions or when `processingInformation.fundingOptions.initiator.credentialStoredOnFile` = `True`. It is required for all other originator-initiated (MIT) transactions.  | [optional] 


