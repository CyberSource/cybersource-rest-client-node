# CyberSource.Ptsv2paymentreferencesPaymentInformationBankAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_number** | **String** | Account number.  When processing encoded account numbers, use this field for the encoded account number.  | [optional] 
**iban** | **String** | International Bank Account Number (IBAN) for the bank account. For some countries you can provide this number instead of the traditional bank account information. You can use this field only when scoring a direct debit transaction.  For all possible values, see the `bank_iban` field description in the _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** > **Documentation** > **Guides** > _Decision Manager Using the SCMP API Developer Guide_ (PDF link).  | [optional] 


