# CyberSource.TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentMethod** | **String** | This value is a 2-digit code indicating the payment method. Use Payment Method Code value that applies to the tranasction. - 10 (One-time payment) - 21, 22, 23, 24  (Bonus(one-time)payment) - 61 (Installment payment) - 31, 32, 33, 34  (Integrated (Bonus + Installment)payment) - 80 (Revolving payment)  | [optional] 
**terminalId** | **String** | Unique Japan Credit Card Association (JCCA) terminal identifier.  The difference between this field and the `pointOfSaleInformation.terminalID` field is that you can define `pointOfSaleInformation.terminalID`, but `processingInformation.japanPaymentOptions.terminalId` is defined by the JCCA and is used only in Japan.  This field is supported only on CyberSource through VisaNet and JCN Gateway.  Optional field.  | [optional] 
**businessName** | **String** | Business name in Japanese characters. This field is supported only on JCN Gateway and for the Sumitomo Mitsui Card Co. acquirer on CyberSource through VisaNet.  | [optional] 
**businessNameKatakana** | **String** | Business name in Katakana characters. This field is supported only on JCN Gateway and for the Sumitomo Mitsui Card Co. acquirer on CyberSource through VisaNet.  | [optional] 
**businessNameEnglish** | **String** | Business name in English characters. This field is supported only on JCN Gateway and for the Sumitomo Mitsui Card Co. acquirer on CyberSource through VisaNet.  | [optional] 
**bonuses** | [**[Ptsv2paymentsProcessingInformationJapanPaymentOptionsBonuses]**](Ptsv2paymentsProcessingInformationJapanPaymentOptionsBonuses.md) | An array of objects, each of which contains a bonus month and bonus amount.  Length of bonuses array is equal to the number of bonuses.  Max length = 6.  In case of bonus month and amount not specified, null objects to be returned in the array. Example: bonuses : [ {\"month\": \"1\",\"amount\": \"200\"}, {\"month\": \"3\",\"amount\": \"2500\"}, null]  | [optional] 
**firstBillingMonth** | **String** | Billing month in MM format.  | [optional] 
**numberOfInstallments** | **String** | Number of Installments.  | [optional] 
**preApprovalType** | **String** | This will contain the details of the kind of transaction that has been processe. Used only for Japan. Possible Values: - 0 = Normal (authorization with amount and clearing/settlement; data capture or paper draft) - 1 = Negative card authorization (authorization-only with 0 or 1 amount) - 2 = Reservation of authorization (authorization-only with amount) - 3 = Cancel transaction - 4 = Merchant-initiated reversal/refund transactions - 5 = Cancel reservation of authorization - 6 = Post authorization  | [optional] 


