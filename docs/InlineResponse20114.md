# CyberSource.InlineResponse20114

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ucp** | [**InlineResponse20114Ucp**](InlineResponse20114Ucp.md) |  | [optional] 
**id** | **String** | Unique UCP session identifier. Required for all subsequent UCP calls (update, complete, cancel).  | [optional] 
**status** | **String** | Current lifecycle state of the session. - `active` — open and modifiable - `completed` — order placed, immutable - `cancelled` — abandoned, no charge made   Possible values: - active - completed - cancelled | [optional] 
**currency** | **String** | ISO 4217 currency code for this session (e.g. `USD`, `EUR`). | [optional] 
**buyer** | [**UcpCheckoutSessionResponseBuyer**](UcpCheckoutSessionResponseBuyer.md) |  | [optional] 
**lineItems** | [**[InlineResponse20114LineItems]**](InlineResponse20114LineItems.md) | Cart line items with merchant-confirmed pricing. | [optional] 
**totals** | [**[Iccv1checkoutsessionsFulfillmentTotals]**](Iccv1checkoutsessionsFulfillmentTotals.md) | Order cost breakdown. Each entry represents one total type (subtotal, tax, shipping, discount, or grand total). Amounts are in **cents** (not micros).  | [optional] 
**fulfillment** | [**InlineResponse20114Fulfillment**](InlineResponse20114Fulfillment.md) |  | [optional] 
**payment** | [**InlineResponse20114Payment**](InlineResponse20114Payment.md) |  | [optional] 
**discounts** | [**InlineResponse20114Discounts**](InlineResponse20114Discounts.md) |  | [optional] 
**order** | [**InlineResponse20114Order**](InlineResponse20114Order.md) |  | [optional] 
**links** | [**[InlineResponse20113Links]**](InlineResponse20113Links.md) | Related resource links (e.g. terms of use, privacy policy). | [optional] 


