# CyberSource.Ptsv2paymentsPaymentInformationBank

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Ptsv2paymentsPaymentInformationBankAccount**](Ptsv2paymentsPaymentInformationBankAccount.md) |  | [optional] 
**routingNumber** | **String** | Bank routing number. This is also called the _transit number_.  | [optional] 
**iban** | **String** | International Bank Account Number (IBAN) for the bank account. For some countries you can provide this number instead of the traditional bank account information. You can use this field only when scoring a direct debit transaction.  | [optional] 
**swiftCode** | **String** | Bank's SWIFT code. You can use this field only when scoring a direct debit transaction. Required only for crossborder transactions.  | [optional] 
**code** | **String** | Bank code of the consumer's account  | [optional] 


