# CyberSource.VasV2PaymentsPost201ResponseOrderInformationJurisdiction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of tax jurisdiction for the item. Returned only if the `taxInformation.showTaxPerLineItem` field is set to `Yes`.  Possible values: - `city` - `county` - `state` - `country` - `special`  | [optional] 
**taxName** | **String** | Name of the jurisdiction tax for the item. For example, CA State Tax. Returned only if the `taxInformation.showTaxPerLineItem` field is set to `Yes`.  | [optional] 
**taxAmount** | **String** | Jurisdiction tax amount for the item. Returned only if the `taxInformation.showTaxPerLineItem` field is set to `Yes`.  | [optional] 
**taxable** | **String** | Jurisdiction taxable amount for the item, not including product level exemptions. Returned only if the `taxInformation.showTaxPerLineItem` field is set to `Yes`.  | [optional] 
**name** | **String** | Free-text description of the jurisdiction for the item. For example, San Mateo County. Returned only if the `taxInformation.showTaxPerLineItem` field is set to `Yes`.  | [optional] 
**code** | **String** | Jurisdiction code assigned by the tax provider. Returned only if the `taxInformation.showTaxPerLineItem` field is set to `Yes`.  | [optional] 
**rate** | **String** | Jurisdiction tax rate for the item. Returned only if the `taxInformation.showTaxPerLineItem` field is set to `Yes`.  | [optional] 
**region** | **String** | Free-text description of the jurisdiction region for the item. For example, CA (California State) or GB (Great Britain). Returned only if the `taxInformation.showTaxPerLineItem` field is set to `Yes`.  | [optional] 
**country** | **String** | Tax jurisdiction country for the item. Returned only if the `taxInformation.showTaxPerLineItem` field is set to `Yes`.  | [optional] 


