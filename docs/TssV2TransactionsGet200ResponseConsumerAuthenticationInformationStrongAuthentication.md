# CyberSource.TssV2TransactionsGet200ResponseConsumerAuthenticationInformationStrongAuthentication

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lowValueExemptionIndicator** | **String** | This field will contain the low value exemption indicator with one of the following values: Possible values: - `0`  ( low value exemption does not apply to the transaction) - `1` (Transaction exempt from SCA as the merchant/acquirer has determined it to be a low value payment)  | [optional] 
**riskAnalysisExemptionIndicator** | **String** | This field will contain the transaction risk analysis exemption indicator with one of the following values: Possible values: - `0`  (TRA exemption does not apply to the transaction) - `1` (Transaction exempt from SCA as the merchant/acquirer has determined it to be low risk in accordance with the criteria defined by PSD2/RTS)  | [optional] 
**trustedMerchantExemptionIndicator** | **String** | Possible values: - `0`  (Trusted merchant exemption does not apply to the transaction) - `1` (Transaction exempt from SCA as it originated at a merchant trusted by the cardholder)  | [optional] 
**secureCorporatePaymentIndicator** | **String** | This field will contain the secure corporate payment exemption indicator with one of the following values: Possible values: - `0`  (SCA exemption does not apply to the transaction) - `1` (Transaction exempt from SCA as the merchant/acquirer has determined it as a secure corporate payment)  | [optional] 
**delegatedAuthenticationExemptionIndicator** | **String** | This field will contain the delegated authentication exemption indicator with one of the following values: Possible values: - `0`  (delegated Authentication exemption does not apply to the transaction) - `1` (Transaction exempt from SCA as authentication has been delegated to other provider (PSP,Acquirer))  | [optional] 


