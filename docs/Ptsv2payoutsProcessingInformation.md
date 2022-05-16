# CyberSource.Ptsv2payoutsProcessingInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessApplicationId** | **String** | Payouts transaction type.  Applicable Processors: FDC Compass, Paymentech, CtV  Possible values:  **Credit Card Bill Payment**   - **CP**: credit card bill payment  **Funds Disbursement**   - **FD**: funds disbursement  - **GD**: government disbursement  - **MD**: merchant disbursement  **Money Transfer**   - **AA**: account to account. Sender and receiver are same person.  - **PP**: person to person. Sender and receiver are different.  **Prepaid Load**   - **TU**: top up  | [optional] 
**networkRoutingOrder** | **String** | This field is optionally used by Push Payments Gateway participants (merchants and acquirers) to get the attributes for specified networks only. The networks specified in this field must be a subset of the information provided during program enrollment. Refer to Sharing Group Code/Network Routing Order. Note: Supported only in US for domestic transactions involving Push Payments Gateway Service.  VisaNet checks to determine if there are issuer routing preferences for any of the networks specified by the network routing order. If an issuer preference exists for one of the specified debit networks, VisaNet makes a routing selection based on the issuer’s preference.  If an issuer preference exists for more than one of the specified debit networks, or if no issuer preference exists, VisaNet makes a selection based on the acquirer’s routing priorities.   For details, see the &#x60;network_order&#x60; field description in [BIN Lookup Service Using the SCMP API.](http://apps.cybersource.com/library/documentation/BIN_Lookup/BIN_Lookup_SCMP_API/html/)  | [optional] 
**commerceIndicator** | **String** | Type of transaction.  Value for an OCT transaction: - &#x60;internet&#x60;  For details, see the &#x60;e_commerce_indicator&#x60; field description in [Payouts Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/payouts_SCMP/html/)  | [optional] 
**reconciliationId** | **String** | Please check with Cybersource customer support to see if your merchant account is configured correctly so you can include this field in your request. * For Payouts: max length for FDCCompass is String (22).  | [optional] 
**payoutsOptions** | [**Ptsv2payoutsProcessingInformationPayoutsOptions**](Ptsv2payoutsProcessingInformationPayoutsOptions.md) |  | [optional] 
**transactionReason** | **String** | Transaction reason code.  | [optional] 
**purposeOfPayment** | **String** | This will send purpose of funds code for original credit transactions (OCTs).  | [optional] 
**fundingOptions** | [**Ptsv2payoutsProcessingInformationFundingOptions**](Ptsv2payoutsProcessingInformationFundingOptions.md) |  | [optional] 


