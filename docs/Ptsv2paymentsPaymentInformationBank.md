# CyberSource.Ptsv2paymentsPaymentInformationBank

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Ptsv2paymentsPaymentInformationBankAccount**](Ptsv2paymentsPaymentInformationBankAccount.md) |  | [optional] 
**routingNumber** | **String** | Bank routing number. This is also called the _transit number_.  For details, see `ecp_rdfi` request field description in the [Electronic Check Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/EChecks_SCMP_API/html/)  | [optional] 
**iban** | **String** | International Bank Account Number (IBAN) for the bank account. For some countries you can provide this number instead of the traditional bank account information. You can use this field only when scoring a direct debit transaction.  For all possible values, see the `bank_iban` field description in the _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** > **Documentation** > **Guides** > _Decision Manager Using the SCMP API Developer Guide_ (PDF link).  | [optional] 
**swiftCode** | **String** | Bank's SWIFT code. You can use this field only when scoring a direct debit transaction. Required only for crossborder transactions.  For all possible values, see the `bank_swiftcode` field description in the _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** > **Documentation** > **Guides** > _Decision Manager Using the SCMP API Developer Guide_ (PDF link).  | [optional] 
**code** | **String** | Bank code of the consumer's account  | [optional] 


