# CyberSource.AcpUpdateCheckoutSessionRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**[Iccv1checkoutSessionsItems]**](Iccv1checkoutSessionsItems.md) | Replacement cart item list. When provided, the entire cart is replaced with this array. To add a single item, include all existing items plus the new one.  | [optional] 
**buyer** | [**AcpUpdateCheckoutSessionBuyer**](AcpUpdateCheckoutSessionBuyer.md) |  | [optional] 
**fulfillmentAddress** | [**Iccv1checkoutSessionssessionIdFulfillmentAddress**](Iccv1checkoutSessionssessionIdFulfillmentAddress.md) |  | [optional] 
**fulfillmentOptionId** | **String** | Optional. ID of the selected fulfillment option from `fulfillment_options` in the session response. | [optional] 


