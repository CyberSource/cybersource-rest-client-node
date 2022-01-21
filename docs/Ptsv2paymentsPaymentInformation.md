# CyberSource.Ptsv2paymentsPaymentInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card** | [**Ptsv2paymentsPaymentInformationCard**](Ptsv2paymentsPaymentInformationCard.md) |  | [optional] 
**tokenizedCard** | [**Ptsv2paymentsPaymentInformationTokenizedCard**](Ptsv2paymentsPaymentInformationTokenizedCard.md) |  | [optional] 
**fluidData** | [**Ptsv2paymentsPaymentInformationFluidData**](Ptsv2paymentsPaymentInformationFluidData.md) |  | [optional] 
**customer** | [**Ptsv2paymentsPaymentInformationCustomer**](Ptsv2paymentsPaymentInformationCustomer.md) |  | [optional] 
**paymentInstrument** | [**Ptsv2paymentsPaymentInformationPaymentInstrument**](Ptsv2paymentsPaymentInformationPaymentInstrument.md) |  | [optional] 
**instrumentIdentifier** | [**Ptsv2paymentsPaymentInformationInstrumentIdentifier**](Ptsv2paymentsPaymentInformationInstrumentIdentifier.md) |  | [optional] 
**shippingAddress** | [**Ptsv2paymentsPaymentInformationShippingAddress**](Ptsv2paymentsPaymentInformationShippingAddress.md) |  | [optional] 
**legacyToken** | [**Ptsv2paymentsPaymentInformationLegacyToken**](Ptsv2paymentsPaymentInformationLegacyToken.md) |  | [optional] 
**bank** | [**Ptsv2paymentsPaymentInformationBank**](Ptsv2paymentsPaymentInformationBank.md) |  | [optional] 
**paymentType** | [**Ptsv2paymentsPaymentInformationPaymentType**](Ptsv2paymentsPaymentInformationPaymentType.md) |  | [optional] 
**initiationChannel** | **String** | Mastercard-defined code that indicates how the account information was obtained.  - &#x60;00&#x60; (default): Card - &#x60;01&#x60;: Removable secure element that is personalized for use with a mobile phone and controlled by the wireless service provider; examples: subscriber identity module (SIM), universal integrated circuit card (UICC) - &#x60;02&#x60;: Key fob - &#x60;03&#x60;: Watch - &#x60;04&#x60;: Mobile tag - &#x60;05&#x60;: Wristband - &#x60;06&#x60;: Mobile phone case or sleeve - &#x60;07&#x60;: Mobile phone with a non-removable, secure element that is controlled by the wireless service provider; for example, code division multiple access (CDMA) - &#x60;08&#x60;: Removable secure element that is personalized for use with a mobile phone and not controlled by the wireless service provider; example: memory card - &#x60;09&#x60;: Mobile phone with a non-removable, secure element that is not controlled by the wireless service provider - &#x60;10&#x60;: Removable secure element that is personalized for use with a tablet or e-book and is controlled by the wireless service provider; examples: subscriber identity module (SIM), universal integrated circuit card (UICC) - &#x60;11&#x60;: Tablet or e-book with a non-removable, secure element that is controlled by the wireless service provider - &#x60;12&#x60;: Removable secure element that is personalized for use with a tablet or e-book and is not controlled by the wireless service provider - &#x60;13&#x60;: Tablet or e-book with a non-removable, secure element that is not controlled by the wireless service provider  This field is supported only for Mastercard on CyberSource through VisaNet.  #### Used by **Authorization** Optional field.  | [optional] 
**eWallet** | [**Ptsv2paymentsPaymentInformationEWallet**](Ptsv2paymentsPaymentInformationEWallet.md) |  | [optional] 


