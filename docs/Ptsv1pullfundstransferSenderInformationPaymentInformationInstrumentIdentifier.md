# CyberSource.Ptsv1pullfundstransferSenderInformationPaymentInformationInstrumentIdentifier

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the Instrument Identifier token used in the transaction. When you use this in the request, the card number field becomes optional. Conditional: this field is only required if card number is not sent in through `senderInformation.paymentInformation.card.number`.   For more information on TMS, please see our originator-facing documentation.  Conditional: this field is only required if card number is **not** sent in through `senderInformation.paymentInformation.card.number`.  | [optional] 


