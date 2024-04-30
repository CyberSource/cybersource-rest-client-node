# CyberSource.VasV2PaymentsPost201ResponseOrderInformationLineItems

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taxDetails** | [**[VasV2PaymentsPost201ResponseOrderInformationTaxDetails]**](VasV2PaymentsPost201ResponseOrderInformationTaxDetails.md) |  | [optional] 
**jurisdiction** | [**[VasV2PaymentsPost201ResponseOrderInformationJurisdiction]**](VasV2PaymentsPost201ResponseOrderInformationJurisdiction.md) |  | [optional] 
**exemptAmount** | **String** | Exempt amount for the lineItem. Returned only if the `taxInformation.showTaxPerLineItem` field is set to `Yes`.  | [optional] 
**taxableAmount** | **String** | Portion of the item amount that is taxable.  | [optional] 
**taxAmount** | **String** | Total tax for the item. This value is the sum of all taxes applied to the item.  | [optional] 


