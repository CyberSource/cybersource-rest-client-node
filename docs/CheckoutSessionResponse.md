# CyberSource.CheckoutSessionResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this checkout session. Required for all subsequent calls (update, complete, cancel).  | 
**status** | **String** | Current lifecycle state of the session per ACP spec: - `not_ready_for_payment` — session is open but not yet ready - `ready_for_payment` — session is ready to be completed - `completed` — order has been placed; session is immutable - `canceled` — session was abandoned; no charge was made   Possible values: - not_ready_for_payment - ready_for_payment - completed - canceled | 
**currency** | **String** | ISO 4217 lowercase currency code for this session. | 
**lineItems** | [**[CheckoutSessionResponseLineItems]**](CheckoutSessionResponseLineItems.md) | Line items with merchant-confirmed pricing. | 
**fulfillmentAddress** | [**CheckoutSessionResponseFulfillmentAddress**](CheckoutSessionResponseFulfillmentAddress.md) |  | [optional] 
**fulfillmentOptions** | [**[CheckoutSessionResponseFulfillmentOptions]**](CheckoutSessionResponseFulfillmentOptions.md) | Available fulfillment methods with pricing. | 
**fulfillmentOptionId** | **String** | ID of the currently selected fulfillment option. | [optional] 
**totals** | [**[CheckoutSessionResponseTotals]**](CheckoutSessionResponseTotals.md) | Order cost breakdown as an array of typed total lines. All amounts in minor units (cents). | 
**buyer** | [**AcpCheckoutSessionResponseBuyer**](AcpCheckoutSessionResponseBuyer.md) |  | [optional] 
**paymentProvider** | [**CheckoutSessionResponsePaymentProvider**](CheckoutSessionResponsePaymentProvider.md) |  | [optional] 
**messages** | [**[CheckoutSessionResponseMessages]**](CheckoutSessionResponseMessages.md) | Informational or error messages from the merchant backend. | 
**links** | [**[CheckoutSessionResponseLinks]**](CheckoutSessionResponseLinks.md) | Related resource links from the merchant (e.g. terms of use, privacy policy, seller shop policies).  | 


