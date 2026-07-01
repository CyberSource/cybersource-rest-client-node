# CyberSource.Iccv1instructionsinstructionIdconfirmationsOrderInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **String** | Unique identifier for the order | [optional] 
**orderStatus** | **String** | Status of the order | [optional] 
**orderDate** | **String** | Order date (UTC time in Epoch format) | [optional] 
**expectedDeliveryDate** | **String** | Expected delivery date for the order (UTC time in Epoch format) | [optional] 
**amountDetail** | [**IccAmountDetail**](IccAmountDetail.md) |  | [optional] 
**shipTo** | [**Iccv1instructionsinstructionIdcredentialsOrderInformationShipTo**](Iccv1instructionsinstructionIdcredentialsOrderInformationShipTo.md) |  | [optional] 
**shippingDetails** | [**IccShippingDetails**](IccShippingDetails.md) |  | [optional] 
**trackingId** | **String** | Tracking ID for the shipment | [optional] 
**carrier** | **String** | Shipping carrier or provider | [optional] 
**lineItems** | [**[Iccv1instructionsinstructionIdcredentialsOrderInformationLineItems]**](Iccv1instructionsinstructionIdcredentialsOrderInformationLineItems.md) |  | [optional] 


