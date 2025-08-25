# CyberSource.Ptsv2paymentsPaymentInformationPaymentTypeMethod

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A Payment Type is enabled through a Method. Examples: Visa, Master Card, ApplePay, iDeal, 7Eleven, alfamart, bofaPayByBank, payToPayByBank, etc  For Japan Payment Processing Valid Values: - 1 Banking Data - 2 Authorization Data  #### Via KCP - `KCP` : Local Card, Bank Transfer and Carrier Billing. - `PAYCO` - `KAKAOPAY` - `NAVERPAY`  | [optional] 
**type** | **String** | The payment channel that facilitates the transactions. This parameter can be used if the payment channels are listed on the merchant's site, and the payment channel is known.  Possible Values:  #### Via PPRO - `alfaVa` - `kredivo` - `consumerBarCode` - `merchantQrCode` - `dokuWallet`  | [optional] 


