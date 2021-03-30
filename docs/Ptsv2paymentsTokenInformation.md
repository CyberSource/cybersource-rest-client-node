# CyberSource.Ptsv2paymentsTokenInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jti** | **String** | TMS Transient Token, 64 hexadecimal id value representing captured payment credentials (including Sensitive Authentication Data, e.g. CVV).  | [optional] 
**transientTokenJwt** | **String** | Flex API Transient Token encoded as JWT (JSON Web Token), e.g. Flex microform or Unified Payment checkout result.  | [optional] 
**paymentInstrument** | [**Ptsv2paymentsTokenInformationPaymentInstrument**](Ptsv2paymentsTokenInformationPaymentInstrument.md) |  | [optional] 
**shippingAddress** | [**Ptsv2paymentsTokenInformationShippingAddress**](Ptsv2paymentsTokenInformationShippingAddress.md) |  | [optional] 
**networkTokenOption** | **String** | Indicates whether a payment network token associated with a TMS token should be used for authorization. This field can contain one of following values:  - &#x60;ignore&#x60;: Use a tokenized card number for an authorization, even if the TMS token has an associated payment network token. - &#x60;prefer&#x60;: (Default) Use an associated payment network token for an authorization if the TMS token has one; otherwise, use the tokenized card number.  | [optional] 


