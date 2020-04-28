# CyberSource.PtsV2PaymentsPost201ResponsePaymentInformationAccountFeaturesBalances

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountType** | **String** | Type of account.  This value is returned only if you request a balance inquiry.  Possible values:   - &#x60;00&#x60;: Not applicable or not specified  - &#x60;10&#x60;: Savings account  - &#x60;20&#x60;: Checking account  - &#x60;30&#x60;: Credit card account  - &#x60;40&#x60;: Universal account  Balance Account Types returned on EBT Debit card transactions:   - &#x60;96&#x60;: Cash Benefits Account (PIN Debit Gateway EBT only)  - &#x60;98&#x60;: Food Stamp Account (PIN Debit Gateway EBT only)  | [optional] 
**amount** | **String** | Remaining balance on the account. If the processor returns the sign, positive or negative, this sign is prefixed to the amount value as (+/-).  | [optional] 
**amountType** | **String** | Type of amount. This value is returned only if you request a balance inquiry. The issuer determines the value that is returned.  Possible values for deposit accounts:   - &#x60;01&#x60;: Current ledger (posted) balance.  - &#x60;02&#x60;: Current available balance, which is typically the ledger balance minus outstanding authorizations. Some  depository institutions also include pending deposits and the credit or overdraft line associated with the account.  Possible values for credit card accounts:   - &#x60;01&#x60;: Credit amount remaining for customer (open to buy).  - &#x60;02&#x60;: Credit limit.  | [optional] 
**currency** | **String** | Currency of the remaining balance on the account.  | [optional] 


