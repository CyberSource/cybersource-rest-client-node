# CyberSource.Ptsv2payoutsOrderInformationAmountDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalAmount** | **String** | Grand total for the order. You can include a decimal point (.), but no other special characters. CyberSource truncates the amount to the correct number of decimal places.  * CTV, FDCCompass, Paymentech (&lt;&#x3D; 12)  For processor-specific information, see the grand_total_amount field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  | [optional] 
**currency** | **String** | Currency used for the order. Use the three-character ISO Standard Currency Codes.  For an authorization reversal or a capture, you must use the same currency that you used in your request for Payment API.  | [optional] 
**surcharge** | [**Ptsv2payoutsOrderInformationAmountDetailsSurcharge**](Ptsv2payoutsOrderInformationAmountDetailsSurcharge.md) |  | [optional] 


