# CyberSource.Iccv1checkoutsessionsPaymentInstruments

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Client-assigned instrument identifier. | [optional] 
**type** | **String** | Payment method type (e.g. `card`, `wallet`). | [optional] 
**handlerId** | **String** | Payment handler or processor identifier (e.g. `visa`). | [optional] 
**handlerName** | **String** | Human-readable name of the payment handler. | [optional] 
**brand** | **String** | Card brand (e.g. `visa`, `mastercard`). | [optional] 
**lastDigits** | **String** | Last 4 digits of the card number for display purposes. | [optional] 
**token** | **String** | Opaque payment token from the payment provider. | [optional] 
**credential** | [**Iccv1checkoutsessionsPaymentCredential**](Iccv1checkoutsessionsPaymentCredential.md) |  | [optional] 
**billingAddress** | [**Iccv1checkoutsessionsPaymentBillingAddress**](Iccv1checkoutsessionsPaymentBillingAddress.md) |  | [optional] 
**selected** | **Boolean** | Whether this instrument is selected for the current session. | [optional] 


