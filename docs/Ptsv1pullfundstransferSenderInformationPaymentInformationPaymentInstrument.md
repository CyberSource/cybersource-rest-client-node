# CyberSource.Ptsv1pullfundstransferSenderInformationPaymentInformationPaymentInstrument

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the Payment Instrument token used in the transaction. When you include this value in your request, many of the fields that are normally required become optional.  If you intend on using more than one token, please take note of the following conditions:  - In case a Payment Instrument token is accompanied by an Instrument Identifier token, the card number from the Instrument Identifier token will take precedence over the Payment Instrument token. - The Customer token and the Payment Instrument token are mutually exclusive. If both are present, you will receive an error.   For more information on TMS, please see our originator-facing documentation.  Conditional: If the card and customer object information is incomplete, this field becomes mandatory to retrieve missing information.  | [optional] 


