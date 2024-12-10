# CyberSource.CommerceSolutionsProductsTokenManagementConfigurationInformationConfigurationsVault

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultTokenType** | **String** | Default token type to be used. Possible Values:   - 'CUSTOMER'  - 'PAYMENT_INSTRUMENT'  - 'INSTRUMENT_IDENTIFIER'  | [optional] 
**location** | **String** | Location where the vault will be stored.  Use 'IDC' (the Indian Data Centre) when merchant is storing token data in India  or 'GDC' (the Global Data Centre) for all other cases.  Possible Values:    - 'IDC'   - 'GDC'  | [optional] 
**tokenFormats** | [**TmsTokenFormats**](TmsTokenFormats.md) |  | [optional] 
**tokenPermissions** | [**TokenPermissions**](TokenPermissions.md) |  | [optional] 
**sensitivePrivileges** | [**TmsSensitivePrivileges**](TmsSensitivePrivileges.md) |  | [optional] 
**nullify** | [**TmsNullify**](TmsNullify.md) |  | [optional] 
**networkTokenServices** | [**TmsNetworkTokenServices**](TmsNetworkTokenServices.md) |  | [optional] 


