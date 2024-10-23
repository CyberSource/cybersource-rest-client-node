# CyberSource.Ptsv1pushfundstransferRecipientInformationPaymentInformationCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | - `001`: Visa - `002`: Mastercard, Eurocard, which is a European regional brand of Mastercard. - `033`: Visa Electron - `024`: Maestro - `042`: Maestro International  | [optional] 
**securityCode** | **String** | 3-digit value that indicates the cardCvv2Value. Values can be 0-9.  | [optional] 
**_number** | **String** | The customer's payment card number, also known as the Primary Account Number (PAN).  Conditional: this field is required if not using tokens.  | [optional] 
**expirationMonth** | **String** | Two-digit month in which the payment card expires.  Format: MM.  Valid values: 01 through 12. Leading 0 is required.  | [optional] 
**expirationYear** | **String** | Four-digit year in which the payment card expires.  Format: YYYY.  | [optional] 
**customer** | [**Ptsv1pushfundstransferRecipientInformationPaymentInformationCardCustomer**](Ptsv1pushfundstransferRecipientInformationPaymentInformationCardCustomer.md) |  | [optional] 
**paymentInstrument** | [**Ptsv1pushfundstransferRecipientInformationPaymentInformationCardPaymentInstrument**](Ptsv1pushfundstransferRecipientInformationPaymentInformationCardPaymentInstrument.md) |  | [optional] 
**instrumentIdentifier** | [**Ptsv1pushfundstransferRecipientInformationPaymentInformationCardInstrumentIdentifier**](Ptsv1pushfundstransferRecipientInformationPaymentInformationCardInstrumentIdentifier.md) |  | [optional] 


