# CyberSource.InlineResponse20017

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The checkout session identifier. | 
**status** | **String** | Will always be `completed` on a successful response.  Possible values: - completed | 
**currency** | **String** | ISO 4217 lowercase currency code. | 
**buyer** | [**AcpCompleteCheckoutResponseBuyer**](AcpCompleteCheckoutResponseBuyer.md) |  | 
**lineItems** | [**[InlineResponse20112LineItems]**](InlineResponse20112LineItems.md) | Final line items with confirmed pricing. | 
**fulfillmentAddress** | [**InlineResponse20017FulfillmentAddress**](InlineResponse20017FulfillmentAddress.md) |  | [optional] 
**fulfillmentOptions** | [**[InlineResponse20112FulfillmentOptions]**](InlineResponse20112FulfillmentOptions.md) |  | 
**fulfillmentOptionId** | **String** | ID of the selected fulfillment option. | 
**totals** | [**[InlineResponse20112Totals]**](InlineResponse20112Totals.md) | Final order totals as typed total lines. All amounts in minor units (cents). | 
**order** | [**InlineResponse20017Order**](InlineResponse20017Order.md) |  | 
**messages** | [**[InlineResponse20112Messages]**](InlineResponse20112Messages.md) | Informational or error messages from the merchant backend. | 
**links** | [**[InlineResponse20112Links]**](InlineResponse20112Links.md) | Related resource links from the merchant (e.g. terms of use, privacy policy). | 


