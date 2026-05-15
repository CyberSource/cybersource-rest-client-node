# CyberSource.Riskv1decisionsOrderInformationShippingDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**giftWrap** | **Boolean** | Boolean that indicates whether the customer requested gift wrapping for this purchase. This field can contain one of the following values: - true: The customer requested gift wrapping. - false: The customer did not request gift wrapping.  | [optional] 
**shippingMethod** | **String** | Shipping method for the product. Possible values:   - `lowcost`: Lowest-cost service  - `sameday`: Courier or same-day service  - `oneday`: Next-day or overnight service  - `twoday`: Two-day service  - `threeday`: Three-day service  - `pickup`: Store pick-up  - `other`: Other shipping method  - `none`: No shipping method because product is a service or subscription  Klarna Advantage Plus additional values:  - `TO_DOOR`: Delivery to door  - `TO_CURB`: Delivery to curb  - `TO_MAILBOX`: Delivery to mailbox  - `PICKUP_BOX`: Pickup from box  - `PICKUP_POINT`: Pickup from point  - `PICKUP_STORE`: Pickup from store  - `PICKUP_WAREHOUSE`: Pickup from warehouse  - `DIGITAL_EMAIL`: Digital delivery via email  - `DIGITAL_DOWNLOAD`: Digital download  - `DIGITAL_OTHER`: Other digital delivery  - `PHYSICAL_OTHER`: Other physical delivery  | [optional] 


