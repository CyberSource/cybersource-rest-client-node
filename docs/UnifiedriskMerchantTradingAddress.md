# CyberSource.UnifiedriskMerchantTradingAddress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressLine1** | **String** | First line of the merchant's trading (physical store or operating) address, including street number and name | [optional] 
**addressLine2** | **String** | Second line of the merchant's trading address for suite, unit, or floor details | [optional] 
**addressLine3** | **String** | Third line of the merchant's trading address for additional location information | [optional] 
**addressType** | **String** | Type of the trading address (e.g., TRADING, PHYSICAL, OPERATING) identifying its business use | [optional] 
**country** | **String** | ISO 3166-1 alpha-3 country code for the merchant's trading address (e.g., GBR, USA, DEU) | [optional] 
**countrySubDivision** | **String** | ISO 3166-2 subdivision code for the merchant's trading address state, province, or region (e.g., US-CA, GB-ENG) | [optional] 
**fullAddress** | **String** | Complete concatenated trading address as a single string, including all lines, locality, postcode, and country | [optional] 
**latitude** | **String** | Geographic latitude coordinate of the merchant's trading location in decimal degrees, used for proximity risk signals | [optional] 
**longitude** | **String** | Geographic longitude coordinate of the merchant's trading location in decimal degrees, used for proximity risk signals | [optional] 
**postalCode** | **String** | Postal or ZIP code of the merchant's trading address (e.g., SW1A 1AA, 10001) | [optional] 
**locality** | **String** | City or town of the merchant's trading address (e.g., London, New York, Berlin) | [optional] 


