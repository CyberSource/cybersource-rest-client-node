# CyberSource.TmsEmbeddedInstrumentIdentifierCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_number** | **String** | The customer's payment card number, also known as the Primary Account Number (PAN). You can also use this field for encoded account numbers.  | [optional] 
**expirationMonth** | **String** | Two-digit month in which the payment card expires.  Format: `MM`.  Possible Values: `01` through `12`.  | [optional] 
**expirationYear** | **String** | Four-digit year in which the credit card expires.  Format: `YYYY`.  | [optional] 
**securityCode** | **String** | Card Verification Code.  This value is sent to the issuer to support the approval of a network token provision. It is not persisted against the Instrument Identifier.  | [optional] 


