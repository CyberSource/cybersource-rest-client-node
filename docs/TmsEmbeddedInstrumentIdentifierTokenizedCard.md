# CyberSource.TmsEmbeddedInstrumentIdentifierTokenizedCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The network token card association brand Possible Values: - visa - mastercard - americanexpress  | [optional] 
**state** | **String** | State of the network token or network token provision Possible Values: - ACTIVE : Network token is active. - SUSPENDED : Network token is suspended. This state can change back to ACTIVE. - DELETED : This is a final state for a network token instance. - UNPROVISIONED : A previous network token provision was unsuccessful.  | [optional] 
**enrollmentId** | **String** | Unique Identifier for the enrolled PAN. This Id is provided by the card association when a network token is provisioned successfully.  | [optional] 
**tokenReferenceId** | **String** | Unique Identifier for the network token. This Id is provided by the card association when a network token is provisioned successfully.  | [optional] 
**reason** | **String** | Issuers state for the network token Possible Values: - INVALID_REQUEST : The network token provision request contained invalid data. - CARD_VERIFICATION_FAILED : The network token provision request contained data that could not be verified. - CARD_NOT_ELIGIBLE : Card can currently not be used with issuer for tokenization. - CARD_NOT_ALLOWED : Card can currently not be used with card association for tokenization. - DECLINED : Card can currently not be used with issuer for tokenization. - SERVICE_UNAVAILABLE : The network token service was unavailable or timed out. - SYSTEM_ERROR : An unexpected error occurred with network token service, check configuration.  | [optional] 
**_number** | **String** | The token requestors network token  | [optional] 
**expirationMonth** | **String** | Two-digit month in which the network token expires.  Format: &#x60;MM&#x60;.  Possible Values: &#x60;01&#x60; through &#x60;12&#x60;.  | [optional] 
**expirationYear** | **String** | Four-digit year in which the network token expires.  Format: &#x60;YYYY&#x60;.  | [optional] 
**cryptogram** | **String** | Generated value used in conjunction with the network token for making a payment.  | [optional] 
**card** | [**TmsEmbeddedInstrumentIdentifierTokenizedCardCard**](TmsEmbeddedInstrumentIdentifierTokenizedCardCard.md) |  | [optional] 


