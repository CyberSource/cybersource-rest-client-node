# CyberSource.Ptsv2paymentsProcessingInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capture** | **Boolean** | Flag that specifies whether to also include capture service in the submitted request or not.  Possible values: - **true** - **false** (default).  | [optional] [default to false]
**processorId** | **String** | Value that identifies the processor/acquirer to use for the transaction. This value is supported only for **CyberSource through VisaNet**.  Contact CyberSource Customer Support to get the value for this field.  | [optional] 
**businessApplicationId** | **String** | The description for this field is not available. | [optional] 
**commerceIndicator** | **String** | Type of transaction. Some payment card companies use this information when determining discount rates. When you omit this field for **Ingenico ePayments**, the processor uses the default transaction type they have on file for you instead of the default value listed here.  | [optional] 
**paymentSolution** | **String** | Type of digital payment solution for the transaction. Possible Values:   - **visacheckout**: Visa Checkout. This value is required for Visa Checkout transactions. See Visa Checkout Using the SCMP API.  - **005**: Masterpass. This value is required for Masterpass transactions on OmniPay Direct. See \&quot;Masterpass,\&quot; page 153.  | [optional] 
**reconciliationId** | **String** | Please check with Cybersource customer support to see if your merchant account is configured correctly so you can include this field in your request. * For Payouts: max length for FDCCompass is String (22).  | [optional] 
**linkId** | **String** | Value that links the current authorization request to the original authorization request. Set this value to the ID that was returned in the reply message from the original authorization request.  This value is used for:   - Partial authorizations: See \&quot;Partial Authorizations,\&quot; page 88.  - Split shipments: See \&quot;Split Shipments,\&quot; page 210.  | [optional] 
**purchaseLevel** | **String** | Set this field to 3 to indicate that the request includes Level III data. | [optional] 
**reportGroup** | **String** | Attribute that lets you define custom grouping for your processor reports. This field is supported only for **Worldpay VAP**.  See \&quot;Report Groups,\&quot; page 234.  | [optional] 
**visaCheckoutId** | **String** | Identifier for the **Visa Checkout** order. Visa Checkout provides a unique order ID for every transaction in the Visa Checkout **callID** field.  For more details, see Visa Checkout Using the SCMP API.  | [optional] 
**authorizationOptions** | [**Ptsv2paymentsProcessingInformationAuthorizationOptions**](Ptsv2paymentsProcessingInformationAuthorizationOptions.md) |  | [optional] 
**captureOptions** | [**Ptsv2paymentsProcessingInformationCaptureOptions**](Ptsv2paymentsProcessingInformationCaptureOptions.md) |  | [optional] 
**recurringOptions** | [**Ptsv2paymentsProcessingInformationRecurringOptions**](Ptsv2paymentsProcessingInformationRecurringOptions.md) |  | [optional] 
**bankTransferOptions** | [**Ptsv2paymentsProcessingInformationBankTransferOptions**](Ptsv2paymentsProcessingInformationBankTransferOptions.md) |  | [optional] 


