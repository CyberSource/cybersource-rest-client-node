# CyberSource.TssV2TransactionsGet200ResponseTokenInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | [**PtsV2PaymentsPost201ResponseTokenInformationCustomer**](PtsV2PaymentsPost201ResponseTokenInformationCustomer.md) |  | [optional] 
**paymentInstrument** | [**PtsV2PaymentsPost201ResponseTokenInformationPaymentInstrument**](PtsV2PaymentsPost201ResponseTokenInformationPaymentInstrument.md) |  | [optional] 
**shippingAddress** | [**PtsV2PaymentsPost201ResponseTokenInformationShippingAddress**](PtsV2PaymentsPost201ResponseTokenInformationShippingAddress.md) |  | [optional] 
**instrumentIdentifier** | [**TssV2TransactionsGet200ResponsePaymentInformationInstrumentIdentifier**](TssV2TransactionsGet200ResponsePaymentInformationInstrumentIdentifier.md) |  | [optional] 
**jti** | **String** | TMS Transient Token, 64 hexadecimal id value representing captured payment credentials (including Sensitive Authentication Data, e.g. CVV).  | [optional] 
**transientTokenJwt** | **String** | Flex API Transient Token encoded as JWT (JSON Web Token), e.g. Flex microform or Unified Payment checkout result.  | [optional] 


