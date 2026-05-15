# CyberSource.Ptsv2paymentsidrefundsPaymentInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card** | [**Ptsv2paymentsidrefundsPaymentInformationCard**](Ptsv2paymentsidrefundsPaymentInformationCard.md) |  | [optional] 
**bank** | [**Ptsv2paymentsidrefundsPaymentInformationBank**](Ptsv2paymentsidrefundsPaymentInformationBank.md) |  | [optional] 
**tokenizedCard** | [**Ptsv2paymentsPaymentInformationTokenizedCard**](Ptsv2paymentsPaymentInformationTokenizedCard.md) |  | [optional] 
**fluidData** | [**Ptsv2paymentsPaymentInformationFluidData**](Ptsv2paymentsPaymentInformationFluidData.md) |  | [optional] 
**customer** | [**Ptsv2paymentsPaymentInformationCustomer**](Ptsv2paymentsPaymentInformationCustomer.md) |  | [optional] 
**paymentInstrument** | [**Ptsv2paymentsPaymentInformationPaymentInstrument**](Ptsv2paymentsPaymentInformationPaymentInstrument.md) |  | [optional] 
**instrumentIdentifier** | [**Ptsv2paymentsPaymentInformationInstrumentIdentifier**](Ptsv2paymentsPaymentInformationInstrumentIdentifier.md) |  | [optional] 
**shippingAddress** | [**Ptsv2paymentsPaymentInformationShippingAddress**](Ptsv2paymentsPaymentInformationShippingAddress.md) |  | [optional] 
**legacyToken** | [**Ptsv2paymentsPaymentInformationLegacyToken**](Ptsv2paymentsPaymentInformationLegacyToken.md) |  | [optional] 
**paymentType** | [**Ptsv2paymentsidrefundsPaymentInformationPaymentType**](Ptsv2paymentsidrefundsPaymentInformationPaymentType.md) |  | [optional] 
**eWallet** | [**Ptsv2paymentsidrefundsPaymentInformationEWallet**](Ptsv2paymentsidrefundsPaymentInformationEWallet.md) |  | [optional] 
**paymentAccountReference** | [**Ptsv2paymentsPaymentInformationPaymentAccountReference**](Ptsv2paymentsPaymentInformationPaymentAccountReference.md) |  | [optional] 
**thirdPartyToken** | [**Ptsv2paymentsPaymentInformationThirdPartyToken**](Ptsv2paymentsPaymentInformationThirdPartyToken.md) |  | [optional] 
**initiationChannel** | **String** | Mastercard-defined code that indicates how the account information was obtained for credit authorization transactions.  Possible values: - `00`: Card (default) - `01`: Mobile network operator (MNO) controlled removable secure element (SIM or UICC) personalized for use with a mobile phone or smartphone - `02`: Key fob - `03`: Watch - `04`: Mobile tag - `05`: Wristband - `06`: Mobile phone case or sleeve - `07`: Mobile phone or smartphone with fixed (nonremovable) secure element controlled by the MNO (for example, code division multiple access (CDMA)) - `08`: Removable secure element not controlled by the MNO (for example, memory card personalized for use with a mobile phone or smartphone) - `09`: Mobile phone or smartphone with a fixed (nonremovable) secure element not controlled by the MNO - `10`: MNO-controlled removable secure element (SIM or UICC) personalized for use with a tablet or e-book - `11`: Tablet or e-book with a fixed (nonremovable) secure element controlled by the MNO - `12`: Removable secure element not controlled by the MNO (for example, memory card personalized for use with a tablet or e-book) - `13`: Tablet or e-book with fixed (nonremovable) secure element not controlled by the MNO - `14` - `99`: Reserved for future use  This field flows in ISO Field 104 DSID 65 Tag 04.  This field is supported for Mastercard credit authorization transactions.  #### Used by **Credit Authorization (Standalone)** Optional field.  | [optional] 


