# CyberSource.Ptsv2billingagreementsPaymentInformationBank

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Ptsv2billingagreementsPaymentInformationBankAccount**](Ptsv2billingagreementsPaymentInformationBankAccount.md) |  | [optional] 
**iban** | **String** | International Bank Account Number (IBAN). #### SEPA Required for mandates services  | [optional] 
**swiftCode** | **String** | Bank's SWIFT code. You can use this field only when scoring a direct debit transaction. #### BACS Required for mandates services  | [optional] 
**scheme** | **String** | The scheme that sets the rules for the direct debit process. Possible values:   - SEPA   - BACS #### SEPA/BACS Required for mandates services  | [optional] 


