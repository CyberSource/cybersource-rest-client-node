# CyberSource.CompleteCheckoutResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The checkout session identifier. | 
**status** | **String** | Will always be `completed` on a successful response.  Possible values: - completed | 
**currency** | **String** | ISO 4217 lowercase currency code. | 
**buyer** | [**AcpCompleteCheckoutResponseBuyer**](AcpCompleteCheckoutResponseBuyer.md) |  | 
**lineItems** | [**[CheckoutSessionResponseLineItems]**](CheckoutSessionResponseLineItems.md) | Final line items with confirmed pricing. | 
**fulfillmentAddress** | [**CompleteCheckoutResponseFulfillmentAddress**](CompleteCheckoutResponseFulfillmentAddress.md) |  | [optional] 
**fulfillmentOptions** | [**[CheckoutSessionResponseFulfillmentOptions]**](CheckoutSessionResponseFulfillmentOptions.md) |  | 
**fulfillmentOptionId** | **String** | ID of the selected fulfillment option. | 
**totals** | [**[CheckoutSessionResponseTotals]**](CheckoutSessionResponseTotals.md) | Final order totals as typed total lines. All amounts in minor units (cents). | 
**order** | [**CompleteCheckoutResponseOrder**](CompleteCheckoutResponseOrder.md) |  | 
**messages** | [**[CheckoutSessionResponseMessages]**](CheckoutSessionResponseMessages.md) | Informational or error messages from the merchant backend. | 
**links** | [**[CheckoutSessionResponseLinks]**](CheckoutSessionResponseLinks.md) | Related resource links from the merchant (e.g. terms of use, privacy policy). | 


