# CyberSource.Ptsv2paymentsidcapturesOrderInformationShippingDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipFromPostalCode** | **String** | Postal code for the address from which the goods are shipped, which is used to establish nexus. The default is the postal code associated with your CyberSource account.  The postal code must consist of 5 to 9 digits. When the billing country is the U.S., the 9-digit postal code must follow this format:  `[5 digits][dash][4 digits]`  Example 12345-6789  When the billing country is Canada, the 6-digit postal code must follow this format:  `[alpha][numeric][alpha][space] [numeric][alpha][numeric]`  Example A1B 2C3  This field is frequently used for Level II and Level III transactions.  | [optional] 
**trackingNumber** | **String** | Shipment tracking number provided by the merchant. Used to track the shipment of goods to the customer.  | [optional] 
**trackingUrl** | **String** | URL where the customer can track their shipment. Provides real-time tracking information for the delivery.  | [optional] 
**shippingCarrier** | **String** | Name of the shipping carrier/company handling the delivery.  | [optional] 
**estimatedDeliveryDate** | **String** | Estimated delivery date for the shipment provided by Merchant. Format: YYYYMMDD (e.g., 20251115 for November 15, 2025)  | [optional] 
**shippingMethod** | **String** | Shipping method for the product. Possible values:   - `lowcost`: Lowest-cost service  - `sameday`: Courier or same-day service  - `oneday`: Next-day or overnight service  - `twoday`: Two-day service  - `threeday`: Three-day service  - `pickup`: Store pick-up  - `other`: Other shipping method  - `none`: No shipping method because product is a service or subscription  Klarna Advantage Plus additional values:  - `TO_DOOR`: Delivery to door  - `TO_CURB`: Delivery to curb  - `TO_MAILBOX`: Delivery to mailbox  - `PICKUP_BOX`: Pickup from box  - `PICKUP_POINT`: Pickup from point  - `PICKUP_STORE`: Pickup from store  - `PICKUP_WAREHOUSE`: Pickup from warehouse  - `DIGITAL_EMAIL`: Digital delivery via email  - `DIGITAL_DOWNLOAD`: Digital download  - `DIGITAL_OTHER`: Other digital delivery  - `PHYSICAL_OTHER`: Other physical delivery  | [optional] 


