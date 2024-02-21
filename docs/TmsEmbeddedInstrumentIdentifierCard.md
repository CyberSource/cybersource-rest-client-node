# CyberSource.TmsEmbeddedInstrumentIdentifierCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_number** | **String** | The customer&#39;s payment card number, also known as the Primary Account Number (PAN). You can also use this field for encoded account numbers.  | [optional] 
**expirationMonth** | **String** | Two-digit month in which the payment card expires.  Format: &#x60;MM&#x60;.  Possible Values: &#x60;01&#x60; through &#x60;12&#x60;.  | [optional] 
**expirationYear** | **String** | Four-digit year in which the credit card expires.  Format: &#x60;YYYY&#x60;.  | [optional] 
**securityCode** | **String** | Card Verification Code.  This value is sent to the issuer to support the approval of a network token provision. It is not persisted against the Instrument Identifier.  | [optional] 


