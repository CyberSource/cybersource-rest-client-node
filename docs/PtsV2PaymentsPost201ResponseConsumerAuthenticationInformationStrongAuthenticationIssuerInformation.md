# CyberSource.PtsV2PaymentsPost201ResponseConsumerAuthenticationInformationStrongAuthenticationIssuerInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**riskAnalysisExemptionResult** | **String** | Possible values: Visa Platform Connect - &#x60;8401&#x60; Merchant not participating in Visa Trusted Listing Program. - &#x60;8402&#x60; Issuer not participating in Visa Trusted Listing Program. - &#x60;8403&#x60; Cardholder has not trusted the merchant (supplied by Visa Net). - &#x60;8404&#x60; Indeterminate or invalid issuer response. - &#x60;8473&#x60; Cardholder has not trusted the merchant (issuer-supplied). - &#x60;8474&#x60; Did not meet the exemption criteria (issuer-supplied).  Upto 20 Values may be received in a transaction.  | [optional] 
**trustedMerchantExemptionResult** | **String** | Possible values: Visa Platform Connect - &#x60;2&#x60; Trusted merchant exemption validated/honored. - &#x60;3&#x60; Trusted merchant exemption failed validation/not honored.  | [optional] 
**lowValueExemptionResult** | **String** | This will be the value returned by Visanet when low value exemption has been requested.  Valid values: Visa Platform Connect - &#x60;2&#x60; Low value exemption validated/honored - &#x60;3&#x60; Low value exemption failed validation/not honored  | [optional] 
**secureCorporatePaymentResult** | **String** | This will be the value returned by Visanet when secure corporate payment (scp) exemption has been requested.  Valid values: Visa Platform Connect - &#x60;2&#x60; Secure corporate payment exemption validated/honored - &#x60;3&#x60; Secure corporate payment exemption failed validation/not honored  | [optional] 
**transactionRiskAnalysisExemptionResult** | **String** | This will be the value returned by Visanet when transaction risk analysis (TRA) exemption has been requested.    Valid values: Visa Platform Connect   - &#x60;2&#x60; transaction risk analysis (TRA) exemption validated/honored   - &#x60;3&#x60; transaction risk analysis (TRA) exemption failed validation/not honored  | [optional] 


