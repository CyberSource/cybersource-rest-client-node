# CyberSource.PaymentsStrongAuthIssuerInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**riskAnalysisExemptionResult** | **String** | Possible values: Visa Platform Connect - `8401` Merchant not participating in Visa Trusted Listing Program. - `8402` Issuer not participating in Visa Trusted Listing Program. - `8403` Cardholder has not trusted the merchant (supplied by Visa Net). - `8404` Indeterminate or invalid issuer response. - `8473` Cardholder has not trusted the merchant (issuer-supplied). - `8474` Did not meet the exemption criteria (issuer-supplied).  Upto 20 Values may be received in a transaction.  | [optional] 
**trustedMerchantExemptionResult** | **String** | Possible values: Visa Platform Connect - `2` Trusted merchant exemption validated/honored. - `3` Trusted merchant exemption failed validation/not honored.  | [optional] 
**lowValueExemptionResult** | **String** | This will be the value returned by Visanet when low value exemption has been requested.  Valid values: Visa Platform Connect - `2` Low value exemption validated/honored - `3` Low value exemption failed validation/not honored  | [optional] 
**secureCorporatePaymentResult** | **String** | This will be the value returned by Visanet when secure corporate payment (scp) exemption has been requested.  Valid values: Visa Platform Connect - `2` Secure corporate payment exemption validated/honored - `3` Secure corporate payment exemption failed validation/not honored  | [optional] 
**transactionRiskAnalysisExemptionResult** | **String** | This will be the value returned by Visanet when transaction risk analysis (TRA) exemption has been requested.    Valid values: Visa Platform Connect   - `2` transaction risk analysis (TRA) exemption validated/honored   - `3` transaction risk analysis (TRA) exemption failed validation/not honored  | [optional] 
**delegatedAuthenticationResult** | **String** | This will be the value returned by Visanet when delegated authentication has been requested.  | [optional] 


