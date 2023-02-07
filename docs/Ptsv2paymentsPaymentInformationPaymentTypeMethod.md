# CyberSource.Ptsv2paymentsPaymentInformationPaymentTypeMethod

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A Payment Type is enabled through a Method. Examples: Visa, Master Card, ApplePay, iDeal, 7Eleven, alfamart, etc  For Japan Payment Processing Valid Values: - 1 Banking Data - 2 Authorization Data  #### Via KCP - &#x60;KCP&#x60; : Local Card, Bank Transfer and Carrier Billing. - &#x60;PAYCO&#x60; - &#x60;KAKAOPAY&#x60; - &#x60;NAVERPAY&#x60;  | [optional] 
**type** | **String** | The payment channel that facilitates the transactions. This parameter can be used if the payment channels are listed on the merchant’s site, and the payment channel is known.  Possible Values:  #### Via PPRO - &#x60;alfaVa&#x60; - &#x60;kredivo&#x60; - &#x60;consumerBarCode&#x60; - &#x60;merchantQrCode&#x60; - &#x60;dokuWallet&#x60;  | [optional] 


