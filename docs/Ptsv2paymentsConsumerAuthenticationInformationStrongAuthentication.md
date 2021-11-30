# CyberSource.Ptsv2paymentsConsumerAuthenticationInformationStrongAuthentication

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lowValueExemptionIndicator** | **String** | This field will contain the low value exemption indicator with one of the following values: Possible values: - &#x60;0&#x60;  ( low value exemption does not apply to the transaction) - &#x60;1&#x60; (Transaction exempt from SCA as the merchant/acquirer has determined it to be a low value payment)  | [optional] 
**riskAnalysisExemptionIndicator** | **String** | This field will contain the transaction risk analysis exemption indicator with one of the following values: Possible values: - &#x60;0&#x60;  (TRA exemption does not apply to the transaction) - &#x60;1&#x60; (Transaction exempt from SCA as the merchant/acquirer has determined it to be low risk in accordance with the criteria defined by PSD2/RTS)  | [optional] 
**trustedMerchantExemptionIndicator** | **String** | Possible values: - &#x60;0&#x60;  (Trusted merchant exemption does not apply to the transaction) - &#x60;1&#x60; (Transaction exempt from SCA as it originated at a merchant trusted by the cardholder)  | [optional] 
**secureCorporatePaymentIndicator** | **String** | This field will contain the secure corporate payment exemption indicator with one of the following values: Possible values: - &#x60;0&#x60;  (SCA exemption does not apply to the transaction) - &#x60;1&#x60; (Transaction exempt from SCA as the merchant/acquirer has determined it as a secure corporate payment)  | [optional] 
**delegatedAuthenticationExemptionIndicator** | **String** | This field will contain the delegated authentication exemption indicator with one of the following values: Possible values: - &#x60;0&#x60;  (delegated Authentication exemption does not apply to the transaction) - &#x60;1&#x60; (Transaction exempt from SCA as authentication has been delegated to other provider (PSP,Acquirer))  | [optional] 
**outageExemptionIndicator** | **String** | This field will contain the outage exemption indicator with one of the following values: Possible values: - &#x60;0&#x60;  (Outage Authentication exemption does not apply to the transaction) - &#x60;1&#x60; (Outage exempt from SCA as authentication could not be done due to outage)  | [optional] 
**authenticationIndicator** | **String** | Indicates the type of Authentication request  01 - Payment transaction  02 - Recurring transaction  03 - Installment transaction  04 - Add card  05 - Maintain card  06 - Cardholder verification as part of EMV token ID and V  | [optional] 


