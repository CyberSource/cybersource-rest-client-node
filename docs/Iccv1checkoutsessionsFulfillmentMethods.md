# CyberSource.Iccv1checkoutsessionsFulfillmentMethods

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique fulfillment method identifier. | [optional] 
**type** | **String** | Fulfillment method type (e.g. `shipping`, `pickup`, `delivery`). | [optional] 
**lineItemIds** | **[String]** | IDs of line items fulfilled by this method. | [optional] 
**destinations** | [**[Iccv1checkoutsessionsFulfillmentDestinations]**](Iccv1checkoutsessionsFulfillmentDestinations.md) | Available delivery destinations for this method. | [optional] 
**selectedDestinationId** | **String** | ID of the currently selected destination. | [optional] 
**groups** | [**[Iccv1checkoutsessionsFulfillmentGroups]**](Iccv1checkoutsessionsFulfillmentGroups.md) | Groups of line items with their associated shipping options. | [optional] 


