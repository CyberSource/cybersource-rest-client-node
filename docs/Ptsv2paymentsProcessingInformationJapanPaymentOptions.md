# CyberSource.Ptsv2paymentsProcessingInformationJapanPaymentOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentMethod** | **String** | This value is a 2-digit code indicating the payment method. Use Payment Method Code value that applies to the tranasction. - 10 (One-time payment) - 21, 22, 23, 24  (Bonus(one-time)payment) - 61 (Installment payment) - 31, 32, 33, 34  (Integrated (Bonus + Installment)payment) - 80 (Revolving payment)  | [optional] 
**installments** | **String** | Number of Installments.  | [optional] 
**terminalId** | **String** | This value is the 13-digit JCCA number. | [optional] 
**firstBillingMonth** | **String** | Billing month in MM format.  | [optional] 
**businessName** | **String** | Business name in Japanese characters. This field is supported only on JCN Gateway and for the Sumitomo Mitsui Card Co. acquirer on CyberSource through VisaNet.  | [optional] 
**businessNameKatakana** | **String** | Business name in Katakana characters. This field is supported only on JCN Gateway and for the Sumitomo Mitsui Card Co. acquirer on CyberSource through VisaNet.  | [optional] 
**jis2TrackData** | **String** | Japanese Industrial Standard Type 2 (JIS2) track data from the front of the card. This field is supported only on JCN Gateway.  | [optional] 
**businessNameAlphaNumeric** | **String** | Business name in alphanumeric characters. This field is supported only on JCN Gateway and for the Sumitomo Mitsui Card Co. acquirer on CyberSource through VisaNet.  | [optional] 


