# CyberSource.InlineResponse20113

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this checkout session. Required for all subsequent calls (update, complete, cancel).  | [optional] 
**status** | **String** | Current lifecycle state of the session per ACP spec: - `not_ready_for_payment` — session is open but not yet ready - `ready_for_payment` — session is ready to be completed - `completed` — order has been placed; session is immutable - `canceled` — session was abandoned; no charge was made   Possible values: - not_ready_for_payment - ready_for_payment - completed - canceled | [optional] 
**currency** | **String** | ISO 4217 lowercase currency code for this session. | [optional] 
**lineItems** | [**[InlineResponse20113LineItems]**](InlineResponse20113LineItems.md) | Line items with merchant-confirmed pricing. | [optional] 
**fulfillmentAddress** | [**InlineResponse20113FulfillmentAddress**](InlineResponse20113FulfillmentAddress.md) |  | [optional] 
**fulfillmentOptions** | [**[InlineResponse20113FulfillmentOptions]**](InlineResponse20113FulfillmentOptions.md) | Available fulfillment methods with pricing. | [optional] 
**fulfillmentOptionId** | **String** | ID of the currently selected fulfillment option. | [optional] 
**totals** | [**[InlineResponse20113Totals]**](InlineResponse20113Totals.md) | Order cost breakdown as an array of typed total lines. All amounts in minor units (cents). | [optional] 
**buyer** | [**AcpCheckoutSessionResponseBuyer**](AcpCheckoutSessionResponseBuyer.md) |  | [optional] 
**paymentProvider** | [**InlineResponse20113PaymentProvider**](InlineResponse20113PaymentProvider.md) |  | [optional] 
**messages** | [**[InlineResponse20113Messages]**](InlineResponse20113Messages.md) | Informational or error messages from the merchant backend. | [optional] 
**links** | [**[InlineResponse20113Links]**](InlineResponse20113Links.md) | Related resource links from the merchant (e.g. terms of use, privacy policy, seller shop policies).  | [optional] 


