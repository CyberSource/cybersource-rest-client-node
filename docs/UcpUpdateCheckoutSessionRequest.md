# CyberSource.UcpUpdateCheckoutSessionRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The session ID being updated. | [optional] 
**lineItems** | [**[Iccv1checkoutsessionsLineItems]**](Iccv1checkoutsessionsLineItems.md) | Replacement line item list. When provided, replaces the entire cart. | [optional] 
**buyer** | [**UcpUpdateCheckoutSessionBuyer**](UcpUpdateCheckoutSessionBuyer.md) |  | [optional] 
**currency** | **String** | ISO 4217 currency code for the session (e.g. `USD`, `EUR`). | [optional] 
**payment** | [**Iccv1UpdateCheckoutsessionsPayment**](Iccv1UpdateCheckoutsessionsPayment.md) |  | [optional] 
**fulfillment** | [**Iccv1UpdateCheckoutSessionsFulfillment**](Iccv1UpdateCheckoutSessionsFulfillment.md) |  | [optional] 
**discounts** | [**Iccv1UpdateCheckoutSessionsDiscounts**](Iccv1UpdateCheckoutSessionsDiscounts.md) |  | [optional] 


