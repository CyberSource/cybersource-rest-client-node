# CyberSource.VasV2PaymentsPost201ResponseOrderInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exemptAmount** | **String** | Total amount of tax exempt amounts. This value is the sum of the values for all the &#x60;orderInformation.lineItems[].exemptAmount&#x60; fields in the tax calculation request.  | [optional] 
**taxableAmount** | **String** | Total amount of all taxable amounts. This value is the sum of the values for all the &#x60;orderInformation.lineItems[].taxAmount&#x60; fields in the tax calculation request.  | [optional] 
**taxAmount** | **String** | Total amount of tax for all lineItems in the tax calculation request.  | [optional] 
**lineItems** | [**[VasV2PaymentsPost201ResponseOrderInformationLineItems]**](VasV2PaymentsPost201ResponseOrderInformationLineItems.md) |  | [optional] 
**taxDetails** | [**[VasV2PaymentsPost201ResponseOrderInformationTaxDetails]**](VasV2PaymentsPost201ResponseOrderInformationTaxDetails.md) |  | [optional] 
**amountDetails** | [**Ptsv2paymentsidreversalsReversalInformationAmountDetails**](Ptsv2paymentsidreversalsReversalInformationAmountDetails.md) |  | [optional] 


