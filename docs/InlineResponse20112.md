# CyberSource.InlineResponse20112

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this checkout session. Required for all subsequent calls (update, complete, cancel).  | [optional] 
**status** | **String** | Current lifecycle state of the session per ACP spec: - `not_ready_for_payment` — session is open but not yet ready - `ready_for_payment` — session is ready to be completed - `completed` — order has been placed; session is immutable - `canceled` — session was abandoned; no charge was made   Possible values: - not_ready_for_payment - ready_for_payment - completed - canceled | [optional] 
**currency** | **String** | ISO 4217 lowercase currency code for this session. | [optional] 
**lineItems** | [**[InlineResponse20112LineItems]**](InlineResponse20112LineItems.md) | Line items with merchant-confirmed pricing. | [optional] 
**fulfillmentAddress** | [**InlineResponse20112FulfillmentAddress**](InlineResponse20112FulfillmentAddress.md) |  | [optional] 
**fulfillmentOptions** | [**[InlineResponse20112FulfillmentOptions]**](InlineResponse20112FulfillmentOptions.md) | Available fulfillment methods with pricing. | [optional] 
**fulfillmentOptionId** | **String** | ID of the currently selected fulfillment option. | [optional] 
**totals** | [**[InlineResponse20112Totals]**](InlineResponse20112Totals.md) | Order cost breakdown as an array of typed total lines. All amounts in minor units (cents). | [optional] 
**buyer** | [**AcpCheckoutSessionResponseBuyer**](AcpCheckoutSessionResponseBuyer.md) |  | [optional] 
**paymentProvider** | [**InlineResponse20112PaymentProvider**](InlineResponse20112PaymentProvider.md) |  | [optional] 
**messages** | [**[InlineResponse20112Messages]**](InlineResponse20112Messages.md) | Informational or error messages from the merchant backend. | [optional] 
**links** | [**[InlineResponse20112Links]**](InlineResponse20112Links.md) | Related resource links from the merchant (e.g. terms of use, privacy policy, seller shop policies).  | [optional] 


