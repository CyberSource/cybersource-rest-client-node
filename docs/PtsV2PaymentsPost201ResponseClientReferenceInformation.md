# CyberSource.PtsV2PaymentsPost201ResponseClientReferenceInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Client-generated order reference or tracking number. CyberSource recommends that you send a unique value for each transaction so that you can perform meaningful searches for the transaction.  For information about tracking orders, see [Getting Started with CyberSource Advanced for the SCMP API](http://apps.cybersource.com/library/documentation/dev_guides/Getting_Started_SCMP/html/wwhelp/wwhimpl/js/html/wwhelp.htm).  **FDC Nashville Global**\\ Certain circumstances can cause the processor to truncate this value to 15 or 17 characters for Level II and Level III processing, which can cause a discrepancy between the value you submit and the value included in some processor reports.  | [optional] 
**submitLocalDateTime** | **String** | Date and time at your physical location.  Format: &#x60;YYYYMMDDhhmmss&#x60;, where YYYY &#x3D; year, MM &#x3D; month, DD &#x3D; day, hh &#x3D; hour, mm &#x3D; minutes ss &#x3D; seconds  | [optional] 
**ownerMerchantId** | **String** | Merchant ID that was used to create the subscription or customer profile for which the service was requested.  If your CyberSource account is enabled for Recurring Billing, this field is returned only if you are using subscription sharing and if your merchant ID is in the same merchant ID pool as the owner merchant ID.  See the subscription sharing information in Recurring Billing Using the Simple Order API.  If your CyberSource account is enabled for Payment Tokenization, this field is returned only if you are using profile sharing and if your merchant ID is in the same merchant ID pool as the owner merchant ID.  See the profile sharing information in Payment Tokenization Using the Simple Order API.  | [optional] 


