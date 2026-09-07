# CyberSource.InlineResponse20113

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ucp** | [**InlineResponse20113Ucp**](InlineResponse20113Ucp.md) |  | [optional] 
**id** | **String** | Unique UCP session identifier. Required for all subsequent UCP calls (update, complete, cancel).  | [optional] 
**status** | **String** | Current lifecycle state of the session. - `active` — open and modifiable - `completed` — order placed, immutable - `cancelled` — abandoned, no charge made   Possible values: - active - completed - cancelled | [optional] 
**currency** | **String** | ISO 4217 currency code for this session (e.g. `USD`, `EUR`). | [optional] 
**buyer** | [**UcpCheckoutSessionResponseBuyer**](UcpCheckoutSessionResponseBuyer.md) |  | [optional] 
**lineItems** | [**[InlineResponse20113LineItems]**](InlineResponse20113LineItems.md) | Cart line items with merchant-confirmed pricing. | [optional] 
**totals** | [**[Iccv1checkoutsessionsFulfillmentTotals]**](Iccv1checkoutsessionsFulfillmentTotals.md) | Order cost breakdown. Each entry represents one total type (subtotal, tax, shipping, discount, or grand total). Amounts are in **cents** (not micros).  | [optional] 
**fulfillment** | [**InlineResponse20113Fulfillment**](InlineResponse20113Fulfillment.md) |  | [optional] 
**payment** | [**InlineResponse20113Payment**](InlineResponse20113Payment.md) |  | [optional] 
**discounts** | [**InlineResponse20113Discounts**](InlineResponse20113Discounts.md) |  | [optional] 
**order** | [**InlineResponse20113Order**](InlineResponse20113Order.md) |  | [optional] 
**links** | [**[InlineResponse20112Links]**](InlineResponse20112Links.md) | Related resource links (e.g. terms of use, privacy policy). | [optional] 


