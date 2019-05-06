# CyberSource.TssV2TransactionsGet200ResponsePaymentInformationBankAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suffix** | **String** | The description for this field is not available. | [optional] 
**prefix** | **String** | The description for this field is not available. | [optional] 
**checkNumber** | **String** | Check number.  Chase Paymentech Solutions - Optional. CyberSource ACH Service - Not used. RBS WorldPay Atlanta - Optional on debits. Required on credits. TeleCheck - Strongly recommended on debit requests. Optional on credits.  | [optional] 
**type** | **String** | Account type.  Possible values:  - **C**: Checking.  - **G**: General ledger. This value is supported only on Wells Fargo ACH.  - **S**: Savings (U.S. dollars only).  - **X**: Corporate checking (U.S. dollars only).  | [optional] 
**name** | **String** | The description for this field is not available. | [optional] 
**checkDigit** | **String** | The description for this field is not available. | [optional] 
**encoderId** | **String** | Identifier for the bank that provided the customer’s encoded account number.  To obtain the bank identifier, contact your processor. See \&quot;Encoded Account Numbers,\&quot; page 39.  | [optional] 


