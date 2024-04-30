# CyberSource.PtsV2PaymentsPost201ResponsePaymentInformationAccountFeaturesBalances

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountType** | **String** | Type of account.  This value is returned only if you request a balance inquiry.  Possible values:   - `00`: Not applicable or not specified  - `10`: Savings account  - `20`: Checking account  - `30`: Credit card account  - `40`: Universal account  Balance Account Types returned on EBT Debit card transactions:   - `96`: Cash Benefits Account (PIN Debit Gateway EBT only)  - `98`: Food Stamp Account (PIN Debit Gateway EBT only)  | [optional] 
**amount** | **String** | Remaining balance on the account. If the processor returns the sign, positive or negative, this sign is prefixed to the amount value as (+/-).  | [optional] 
**amountType** | **String** | Type of amount. This value is returned only if you request a balance inquiry. The issuer determines the value that is returned.  Possible values for deposit accounts:   - `01`: Current ledger (posted) balance.  - `02`: Current available balance, which is typically the ledger balance minus outstanding authorizations. Some  depository institutions also include pending deposits and the credit or overdraft line associated with the account.  Possible values for credit card accounts:   - `01`: Credit amount remaining for customer (open to buy).  - `02`: Credit limit.  | [optional] 
**currency** | **String** | Currency of the remaining balance on the account.  | [optional] 


