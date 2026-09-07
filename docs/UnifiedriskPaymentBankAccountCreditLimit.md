# CyberSource.UnifiedriskPaymentBankAccountCreditLimit

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **Number** | Credit limit on account     | [optional] 
**currency** | **String** | Currency of credit limit     | [optional] 
**baseCurrency** | **String** | 3 letter ISO 4217 currency code, such as GBP, USD or EUR. A complete list of codes can be found at \"https://www.iso.org/iso-4217-currency-codes.html\" The baseCurrency (the currency the baseValue is ex     | [optional] 
**baseValue** | **Number** | Value of transaction expressed in the currency defined in the baseCurrency field.     | [optional] 
**merchantCurrency** | **String** | ISO 4217 3-letter code for the merchant's local currency used to express the credit limit amount (e.g., EUR for EU merchants) | [optional] 
**merchantValue** | **Number** | Credit limit amount expressed in the merchant's local currency, used for utilization ratio calculations and cross-currency risk assessment | [optional] 


