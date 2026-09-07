# CyberSource.InlineResponse20017

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The checkout session identifier. | [optional] 
**status** | **String** | Will always be `completed` on a successful response.  Possible values: - completed | [optional] 
**currency** | **String** | ISO 4217 lowercase currency code. | [optional] 
**buyer** | [**AcpCompleteCheckoutResponseBuyer**](AcpCompleteCheckoutResponseBuyer.md) |  | [optional] 
**lineItems** | [**[InlineResponse20112LineItems]**](InlineResponse20112LineItems.md) | Final line items with confirmed pricing. | [optional] 
**fulfillmentAddress** | [**InlineResponse20017FulfillmentAddress**](InlineResponse20017FulfillmentAddress.md) |  | [optional] 
**fulfillmentOptions** | [**[InlineResponse20112FulfillmentOptions]**](InlineResponse20112FulfillmentOptions.md) |  | [optional] 
**fulfillmentOptionId** | **String** | ID of the selected fulfillment option. | [optional] 
**totals** | [**[InlineResponse20112Totals]**](InlineResponse20112Totals.md) | Final order totals as typed total lines. All amounts in minor units (cents). | [optional] 
**order** | [**InlineResponse20017Order**](InlineResponse20017Order.md) |  | [optional] 
**messages** | [**[InlineResponse20112Messages]**](InlineResponse20112Messages.md) | Informational or error messages from the merchant backend. | [optional] 
**links** | [**[InlineResponse20112Links]**](InlineResponse20112Links.md) | Related resource links from the merchant (e.g. terms of use, privacy policy). | [optional] 


