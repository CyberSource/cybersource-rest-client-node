# CyberSource.Ptsv2paymentsOrderInformationShippingDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**giftWrap** | **Boolean** | Boolean that indicates whether the customer requested gift wrapping for this purchase. This field can contain one of the following values: - true: The customer requested gift wrapping. - false: The customer did not request gift wrapping.  | [optional] 
**shippingMethod** | **String** | Shipping method for the product. Possible values:   - &#x60;lowcost&#x60;: Lowest-cost service  - &#x60;sameday&#x60;: Courier or same-day service  - &#x60;oneday&#x60;: Next-day or overnight service  - &#x60;twoday&#x60;: Two-day service  - &#x60;threeday&#x60;: Three-day service  - &#x60;pickup&#x60;: Store pick-up  - &#x60;other&#x60;: Other shipping method  - &#x60;none&#x60;: No shipping method because product is a service or subscription  | [optional] 
**shipFromPostalCode** | **String** | Postal code for the address from which the goods are shipped, which is used to establish nexus. The default is the postal code associated with your CyberSource account.  The postal code must consist of 5 to 9 digits. When the billing country is the U.S., the 9-digit postal code must follow this format:  &#x60;[5 digits][dash][4 digits]&#x60;  Example 12345-6789  When the billing country is Canada, the 6-digit postal code must follow this format:  &#x60;[alpha][numeric][alpha][space] [numeric][alpha][numeric]&#x60;  Example A1B 2C3  This field is frequently used for Level II and Level III transactions.  | [optional] 


