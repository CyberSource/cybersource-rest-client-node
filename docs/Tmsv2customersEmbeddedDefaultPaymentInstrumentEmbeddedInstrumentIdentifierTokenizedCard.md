# CyberSource.Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierTokenizedCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The network token card association brand Valid values: - visa - mastercard  | [optional] 
**state** | **String** | Issuers state for the network token Valid values: - ACTIVE - SUSPENDED : This state can change to ACTIVE or DELETED. - DELETED : This is a final state for the network token.  | [optional] 
**_number** | **String** | The token requestors customer’s payment network token  | [optional] 
**expirationMonth** | **String** | Two-digit month in which the network token expires.  Format: &#x60;MM&#x60;.  Valid values: &#x60;01&#x60; through &#x60;12&#x60;.  | [optional] 
**expirationYear** | **String** | Four-digit year in which the network token expires.  Format: &#x60;YYYY&#x60;.  | [optional] 
**cryptogram** | **String** | Generated value used in conjunction with the network token for making a payment.  | [optional] 
**card** | [**Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierTokenizedCardCard**](Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifierTokenizedCardCard.md) |  | [optional] 


