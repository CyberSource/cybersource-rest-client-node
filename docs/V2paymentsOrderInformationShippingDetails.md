# CyberSource.V2paymentsOrderInformationShippingDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**giftWrap** | **Boolean** | TBD | [optional] 
**shippingMethod** | **String** | Shipping method for the product. Possible values:   - lowcost: Lowest-cost service  - sameday: Courier or same-day service  - oneday: Next-day or overnight service  - twoday: Two-day service  - threeday: Three-day service  - pickup: Store pick-up  - other: Other shipping method  - none: No shipping method because product is a service or subscription  | [optional] 
**shipFromPostalCode** | **String** | Postal code for the address from which the goods are shipped, which is used to establish nexus. The default is the postal code associated with your CyberSource account.  The postal code must consist of 5 to 9 digits. When the billing country is the U.S., the 9-digit postal code must follow this format:  &#x60;[5 digits][dash][4 digits]&#x60;  Example 12345-6789  When the billing country is Canada, the 6-digit postal code must follow this format:  &#x60;[alpha][numeric][alpha][space] [numeric][alpha][numeric]&#x60;  Example A1B 2C3  This field is frequently used for Level II and Level III transactions.  | [optional] 


