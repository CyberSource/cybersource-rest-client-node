# CyberSource.InlineResponse20017

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The checkout session identifier. | [optional] 
**status** | **String** | Will always be `completed` on a successful response.  Possible values: - completed | [optional] 
**currency** | **String** | ISO 4217 lowercase currency code. | [optional] 
**buyer** | [**AcpCompleteCheckoutResponseBuyer**](AcpCompleteCheckoutResponseBuyer.md) |  | [optional] 
**lineItems** | [**[InlineResponse20113LineItems]**](InlineResponse20113LineItems.md) | Final line items with confirmed pricing. | [optional] 
**fulfillmentAddress** | [**InlineResponse20017FulfillmentAddress**](InlineResponse20017FulfillmentAddress.md) |  | [optional] 
**fulfillmentOptions** | [**[InlineResponse20113FulfillmentOptions]**](InlineResponse20113FulfillmentOptions.md) |  | [optional] 
**fulfillmentOptionId** | **String** | ID of the selected fulfillment option. | [optional] 
**totals** | [**[InlineResponse20113Totals]**](InlineResponse20113Totals.md) | Final order totals as typed total lines. All amounts in minor units (cents). | [optional] 
**order** | [**InlineResponse20017Order**](InlineResponse20017Order.md) |  | [optional] 
**messages** | [**[InlineResponse20113Messages]**](InlineResponse20113Messages.md) | Informational or error messages from the merchant backend. | [optional] 
**links** | [**[InlineResponse20113Links]**](InlineResponse20113Links.md) | Related resource links from the merchant (e.g. terms of use, privacy policy). | [optional] 


