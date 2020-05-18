# CyberSource.Riskv1decisionsOrderInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amountDetails** | [**Riskv1decisionsOrderInformationAmountDetails**](Riskv1decisionsOrderInformationAmountDetails.md) |  | [optional] 
**preOrder** | **String** | Indicates whether cardholder is placing an order with a future availability or release date. This field can contain one of these values: - MERCHANDISE_AVAILABLE: Merchandise available - FUTURE_AVAILABILITY: Future availability  | [optional] 
**preOrderDate** | **String** | Expected date that a pre-ordered purchase will be available. Format: YYYYMMDD  | [optional] 
**reordered** | **Boolean** | Indicates whether the cardholder is reordering previously purchased merchandise. This field can contain one of these values: - false: First time ordered - true: Reordered  | [optional] 
**shippingDetails** | [**Riskv1decisionsOrderInformationShippingDetails**](Riskv1decisionsOrderInformationShippingDetails.md) |  | [optional] 
**shipTo** | [**Riskv1decisionsOrderInformationShipTo**](Riskv1decisionsOrderInformationShipTo.md) |  | [optional] 
**returnsAccepted** | **Boolean** | Boolean that indicates whether returns are accepted for this order. This field can contain one of the following values: - true: Returns are accepted for this order. - false: Returns are not accepted for this order.  | [optional] 
**lineItems** | [**[Riskv1decisionsOrderInformationLineItems]**](Riskv1decisionsOrderInformationLineItems.md) | This array contains detailed information about individual products in the order. | [optional] 
**billTo** | [**Riskv1decisionsOrderInformationBillTo**](Riskv1decisionsOrderInformationBillTo.md) |  | [optional] 
**totalOffersCount** | **String** | Total number of articles/items in the order as a numeric decimal count. Possible values: 00 - 99  | [optional] 


