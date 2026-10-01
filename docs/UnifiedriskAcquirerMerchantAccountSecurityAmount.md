# CyberSource.UnifiedriskAcquirerMerchantAccountSecurityAmount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baseCurrency** | **String** | The primary reference currency used for security deposit or holdback amounts, expressed as an ISO 4217 3-letter currency code (e.g., USD, EUR, GBP) | [optional] 
**baseValue** | **String** | The monetary value of the security deposit or holdback amount expressed in the base currency, typically in minor units (e.g., cents) | [optional] 
**currency** | **String** | The transaction currency in which the security amount is collected or held, expressed as an ISO 4217 3-letter currency code | [optional] 
**merchantCurrency** | **String** | The merchant's local or preferred currency for expressing the security amount, expressed as an ISO 4217 3-letter currency code | [optional] 
**merchantValue** | **String** | The security deposit or holdback amount expressed in the merchant's local currency, in minor units | [optional] 
**value** | **String** | The security deposit or holdback amount in the transaction currency, in minor units (e.g., cents) | [optional] 


