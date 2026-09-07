# CyberSource.UnifiedriskPaymentBankAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Account type: CHECKING, SAVINGS, CORPORATE, etc | [optional] 
**_number** | **String** | Masked or tokenized account number | [optional] 
**numberFormat** | **String** | Account number format: IBAN, BBAN, etc | [optional] 
**routingNumber** | **String** | Bank routing/transit number | [optional] 
**iban** | **String** | International Bank Account Number | [optional] 
**swiftCode** | **String** | Bank SWIFT/BIC code | [optional] 
**bankCode** | **String** | Bank code | [optional] 
**checkNumber** | **String** | Check number for check payments | [optional] 
**checkImageReference** | **String** | Check image reference number | [optional] 
**encoderId** | **String** | Bank encoder identifier for encoded account numbers | [optional] 
**branchId** | **String** | Bank branch identifier | [optional] 
**flags** | **[String]** | Account flags: VIP, COMPROMISED, etc | [optional] 
**accountHolderName** | **String** | Full name of the person or business that owns the bank account | [optional] 
**addedAtCheckout** | **Boolean** | Whether the bank account was newly entered during checkout | [optional] 
**financialInstitution** | [**UnifiedriskPaymentBankAccountFinancialInstitution**](UnifiedriskPaymentBankAccountFinancialInstitution.md) |  | [optional] 
**balanceBefore** | [**UnifiedriskPaymentBankAccountBalanceBefore**](UnifiedriskPaymentBankAccountBalanceBefore.md) |  | [optional] 
**creditLimit** | [**UnifiedriskPaymentBankAccountCreditLimit**](UnifiedriskPaymentBankAccountCreditLimit.md) |  | [optional] 
**branchAddress** | [**UnifiedriskPaymentBankAccountBranchAddress**](UnifiedriskPaymentBankAccountBranchAddress.md) |  | [optional] 
**subType** | **String** | Sub-category of the bank account type providing more specific classification (e.g., PERSONAL_CHECKING, BUSINESS_SAVINGS, CORPORATE_CURRENT). Used for risk segmentation within account types | [optional] 
**accountOpenDate** | **String** | Date when the bank account was originally opened, in ISO 8601 format (YYYY-MM-DD). Account tenure is a key risk factor - newer accounts carry higher fraud risk | [optional] 


