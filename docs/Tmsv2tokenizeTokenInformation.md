# CyberSource.Tmsv2tokenizeTokenInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jti** | **String** | TMS Transient Token, 64 hexadecimal id value representing captured payment credentials (including Sensitive Authentication Data, e.g. CVV).  | [optional] 
**transientTokenJwt** | **String** | Flex API Transient Token encoded as JWT (JSON Web Token), e.g. Flex microform or Unified Payment checkout result.  | [optional] 
**customer** | [**Tmsv2tokenizeTokenInformationCustomer**](Tmsv2tokenizeTokenInformationCustomer.md) |  | [optional] 
**shippingAddress** | [**Tmsv2tokenizeTokenInformationCustomerEmbeddedDefaultShippingAddress**](Tmsv2tokenizeTokenInformationCustomerEmbeddedDefaultShippingAddress.md) |  | [optional] 
**paymentInstrument** | [**Tmsv2tokenizeTokenInformationCustomerEmbeddedDefaultPaymentInstrument**](Tmsv2tokenizeTokenInformationCustomerEmbeddedDefaultPaymentInstrument.md) |  | [optional] 
**instrumentIdentifier** | [**TmsEmbeddedInstrumentIdentifier**](TmsEmbeddedInstrumentIdentifier.md) |  | [optional] 


