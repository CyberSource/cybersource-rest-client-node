# CyberSource.UcpCreateCheckoutSessionRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lineItems** | [**[Iccv1checkoutsessionsLineItems]**](Iccv1checkoutsessionsLineItems.md) | The products the buyer wants to purchase. At least one line item is required. | 
**buyer** | [**UcpCreateCheckoutSessionBuyer**](UcpCreateCheckoutSessionBuyer.md) |  | [optional] 
**currency** | **String** | Optional. ISO 4217 currency code for the session (e.g. `USD`, `EUR`). | [optional] 
**payment** | [**Iccv1checkoutsessionsPayment**](Iccv1checkoutsessionsPayment.md) |  | [optional] 
**fulfillment** | [**Iccv1checkoutsessionsFulfillment**](Iccv1checkoutsessionsFulfillment.md) |  | [optional] 
**discounts** | [**Iccv1checkoutsessionsDiscounts**](Iccv1checkoutsessionsDiscounts.md) |  | [optional] 


