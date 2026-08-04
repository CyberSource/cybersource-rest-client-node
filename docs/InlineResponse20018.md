# CyberSource.InlineResponse20018

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The checkout session identifier. | [optional] 
**status** | **String** | Will always be `canceled` on a successful response.  Possible values: - canceled | [optional] 
**currency** | **String** | ISO 4217 lowercase currency code. | [optional] 
**buyer** | [**AcpCheckoutSessionResponseBuyer**](AcpCheckoutSessionResponseBuyer.md) |  | [optional] 
**lineItems** | [**[InlineResponse20113LineItems]**](InlineResponse20113LineItems.md) | Line items with merchant-confirmed pricing. | [optional] 
**fulfillmentAddress** | [**InlineResponse20017FulfillmentAddress**](InlineResponse20017FulfillmentAddress.md) |  | [optional] 
**fulfillmentOptions** | [**[InlineResponse20113FulfillmentOptions]**](InlineResponse20113FulfillmentOptions.md) | Available fulfillment methods with pricing. | [optional] 
**fulfillmentOptionId** | **String** | ID of the currently selected fulfillment option. | [optional] 
**totals** | [**[InlineResponse20113Totals]**](InlineResponse20113Totals.md) | Order cost breakdown as typed total lines. All amounts in minor units (cents). | [optional] 
**messages** | [**[InlineResponse20113Messages]**](InlineResponse20113Messages.md) | Informational or error messages from the merchant backend. | [optional] 
**links** | [**[InlineResponse20113Links]**](InlineResponse20113Links.md) | Related resource links from the merchant (e.g. terms of use, privacy policy). | [optional] 


