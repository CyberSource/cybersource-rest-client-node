# CyberSource.Ptsv2paymentsidrefundsTravelInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **String** | Duration of the auto rental or lodging rental.  #### Auto rental This field is supported for Visa, MasterCard, and American Express. **Important** If this field is not included when the `processingInformation.industryDataType` is auto rental, the transaction is declined.  | [optional] 
**agency** | [**Ptsv2paymentsTravelInformationAgency**](Ptsv2paymentsTravelInformationAgency.md) |  | [optional] 
**autoRental** | [**Ptsv2paymentsTravelInformationAutoRental**](Ptsv2paymentsTravelInformationAutoRental.md) |  | [optional] 
**lodging** | [**Ptsv2paymentsTravelInformationLodging**](Ptsv2paymentsTravelInformationLodging.md) |  | [optional] 
**transit** | [**Ptsv2paymentsidrefundsTravelInformationTransit**](Ptsv2paymentsidrefundsTravelInformationTransit.md) |  | [optional] 
**vehicleData** | [**Ptsv2paymentsTravelInformationVehicleData**](Ptsv2paymentsTravelInformationVehicleData.md) |  | [optional] 


