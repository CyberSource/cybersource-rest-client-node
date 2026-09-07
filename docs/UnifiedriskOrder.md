# CyberSource.UnifiedriskOrder

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalItemsCount** | **Number** | Total number of items in order | [optional] 
**returnsAccepted** | **Boolean** | Indicates if returns are accepted | [optional] 
**lineItems** | [**[UnifiedriskOrderLineItems]**](UnifiedriskOrderLineItems.md) |  | [optional] 
**shipping** | [**UnifiedriskOrderShipping**](UnifiedriskOrderShipping.md) |  | [optional] 
**billing** | [**UnifiedriskOrderBilling**](UnifiedriskOrderBilling.md) |  | [optional] 
**orderId** | **String** | Merchant-assigned unique identifier for this order, used for transaction correlation, dispute matching, and fraud monitoring | [optional] 
**orderDescription** | **String** | Free-text description of the order contents or purpose, provided by the merchant for risk analysis and dispute management | [optional] 


