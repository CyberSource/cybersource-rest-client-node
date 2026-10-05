# CyberSource.InlineResponse20112FulfillmentOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique fulfillment option ID. Pass as `fulfillment_option_id` to select it. | 
**type** | **String** | Fulfillment method type.  Possible values: - shipping - digital | 
**title** | **String** | Display name for this fulfillment option. | 
**subtitle** | **String** | Additional description (e.g. estimated delivery window). | [optional] 
**carrier** | **String** | Carrier name for shipping options. | [optional] 
**earliestDeliveryTime** | **Date** | Earliest estimated delivery in RFC 3339 format. | [optional] 
**latestDeliveryTime** | **Date** | Latest estimated delivery in RFC 3339 format. | [optional] 
**subtotal** | **Number** | Shipping cost before tax, in minor units. | 
**tax** | **Number** | Tax on shipping cost, in minor units. | 
**total** | **Number** | Total shipping cost including tax, in minor units. | 


