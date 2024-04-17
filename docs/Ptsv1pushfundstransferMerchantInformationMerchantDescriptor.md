# CyberSource.Ptsv1pushfundstransferMerchantInformationMerchantDescriptor

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administrativeArea** | **String** | The state where the merchant is located.  See https://developer.cybersource.com/library/documentation/sbc/quickref/states_and_provinces.pdf  Note This field is supported only for businesses located in the U.S. or Canada.  | [optional] 
**contact** | **String** | For the descriptions, used-by information, data types, and lengths for these fields, see merchant_descriptor_contact field description in Credit Card Services Using the SCMP API.--> Contact information for the merchant.  Note These are the maximum data lengths for the following payment processors:  FDC Compass (13) Chase Paymentech (13).  | [optional] 
**country** | **String** | Merchant's country.  Country code for your business location. Use the ISO Standard Alpha Country Codes This value might be displayed on the cardholder's statement.  See https://developer.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf  Note If your business is located in the U.S. or Canada and you include this field in a request, you must also include merchantInformation.merchantDescriptor.administrativeArea.  | [optional] 
**locality** | **String** | Merchant's City.  City for your business location. This value might be displayed on the cardholder's statement.  | [optional] 
**name** | **String** | Merchant's business name. This name is displayed on the cardholder's statement.  Chase Paymentech, Visa Platform Connect: length 22  | [optional] 
**storeId** | **String** | The unique id of the merchant's shop which assigned by the merchant.  | [optional] 
**postalCode** | **String** | Merchant's postal code. This value might be displayed on the cardholder's statement.  If your business is domiciled in the U.S., you can use a 5-digit or 9-digit postal code. A 9-digit postal code must follow this format: [5 digits][dash][4 digits] Example: 12345-6789  If your business is domiciled in Canada, you can use a 6-digit or 9-digit postal code. A 6-digit postal code must follow this format: [alpha][numeric][alpha][space] [numeric][alpha][numeric] Example: A1B 2C3  | [optional] 


