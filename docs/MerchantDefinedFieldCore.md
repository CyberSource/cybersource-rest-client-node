# CyberSource.MerchantDefinedFieldCore

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fieldType** | **String** | Possible values: - text - select | 
**label** | **String** |  | 
**customerVisible** | **Boolean** |  | [optional] [default to false]
**textMinLength** | **Number** | Should be used only if fieldType = \"text\" | [optional] 
**textMaxLength** | **Number** | Should be used only if fieldType = \"text\" | [optional] 
**textDefaultValue** | **String** | Should be used only if fieldType = \"text\" | [optional] 
**possibleValues** | **String** | Should be mandatory and used only if fieldType = \"select\" | [optional] 
**readOnly** | **Boolean** |  | [optional] [default to false]
**merchantDefinedDataIndex** | **Number** |  | 


