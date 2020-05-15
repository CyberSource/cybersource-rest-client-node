# CyberSource.TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentMethod** | **String** | This value is a 2-digit code indicating the payment method. Use Payment Method Code value that applies to the tranasction. - 10 (One-time payment) - 21, 22, 23, 24  (Bonus(one-time)payment) - 61 (Installment payment) - 31, 32, 33, 34  (Integrated (Bonus + Installment)payment) - 80 (Revolving payment)  | [optional] 
**terminalId** | **String** | Unique Japan Credit Card Association (JCCA) terminal identifier.  The difference between this field and the &#x60;pointOfSaleInformation.terminalID&#x60; field is that you can define &#x60;pointOfSaleInformation.terminalID&#x60;, but &#x60;processingInformation.japanPaymentOptions.terminalId&#x60; is defined by the JCCA and is used only in Japan.  This field is supported only on CyberSource through VisaNet and JCN Gateway.  Optional field.  | [optional] 
**businessName** | **String** | Business name in Japanese characters. This field is supported only on JCN Gateway and for the Sumitomo Mitsui Card Co. acquirer on CyberSource through VisaNet.  | [optional] 
**businessNameKatakana** | **String** | Business name in Katakana characters. This field is supported only on JCN Gateway and for the Sumitomo Mitsui Card Co. acquirer on CyberSource through VisaNet.  | [optional] 


