# CyberSource.InlineResponse20112LineItems

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ACG-assigned line item identifier. | [optional] 
**item** | [**InlineResponse20112Item**](InlineResponse20112Item.md) |  | [optional] 
**baseAmount** | **Number** | Unit price × quantity before discounts, in minor units. | [optional] 
**discount** | **Number** | Discount amount for this line item, in minor units. | [optional] 
**subtotal** | **Number** | base_amount minus discount, in minor units. | [optional] 
**tax** | **Number** | Tax on this line item, in minor units. | [optional] 
**total** | **Number** | subtotal plus tax, in minor units. | [optional] 


