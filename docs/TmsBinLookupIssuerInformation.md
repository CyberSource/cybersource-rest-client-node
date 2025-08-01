# CyberSource.TmsBinLookupIssuerInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | This field contains the issuer name.  | [optional] 
**country** | **String** | This field contains [2-character ISO Country Codes](http://apps.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf) for the issuer.  | [optional] 
**binLength** | **String** | This field contains the length of the BIN. In some cases, this field may be absent if we do not receive accurate information from the network source.  | [optional] 
**accountPrefix** | **String** | This field contains the first 6 to 8 digits of a primary account number (PAN). The length of the field is determined by [PCI-DSS standards for truncation](https://pcissc.secure.force.com/faq/articles/Frequently_Asked_Question/What-are-acceptable-formats-for-truncation-of-primary-account-numbers).In case the input is not the full intrument (PAN or TOKEN), this field may be truncated.  | [optional] 
**phoneNumber** | **String** | This field contains the customer service phone number for the issuer.  | [optional] 


