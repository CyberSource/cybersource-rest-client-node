# CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBankAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suffix** | **String** | Last four digits of the customer's payment account number.  | [optional] 
**prefix** | **String** | Bank Identification Number (BIN). This is the initial four to six numbers on a credit card account number.  | [optional] 
**checkNumber** | **String** | Check number.  Chase Paymentech Solutions - Optional. CyberSource ACH Service - Not used. RBS WorldPay Atlanta - Optional on debits. Required on credits. TeleCheck - Strongly recommended on debit requests. Optional on credits.  | [optional] 
**type** | **String** | Account type.  Possible values:  - **C**: Checking.  - **G**: General ledger. This value is supported only on Wells Fargo ACH.  - **S**: Savings (U.S. dollars only).  - **X**: Corporate checking (U.S. dollars only).  | [optional] 
**name** | **String** | Name used on the bank account. You can use this field only when scoring a direct debit transaction  | [optional] 
**checkDigit** | **String** | Code used to validate the customer's account number. Required for some countries if you do not or are not allowed to provide the IBAN instead. You may use this field only when scoring a direct debit transaction.  | [optional] 
**encoderId** | **String** | Identifier for the bank that provided the customer's encoded account number.  To obtain the bank identifier, contact your processor.  | [optional] 


