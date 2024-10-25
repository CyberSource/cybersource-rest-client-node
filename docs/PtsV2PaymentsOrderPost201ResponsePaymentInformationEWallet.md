# CyberSource.PtsV2PaymentsOrderPost201ResponsePaymentInformationEWallet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **String** | The ID of the customer, passed in the return_url field by PayPal after customer approval. | [optional] 
**fundingSource** | **String** | Payment mode for the authorization or order transaction.  INSTANT_TRANSFER  MANUAL_BANK_TRANSFER  DELAYED_TRANSFER  ECHECK  UNRESTRICTED (default)—this value is available only when configured by PayPal for the merchant. INSTANT | [optional] 
**fundingSourceSale** | **String** | Payment method for the unit purchase. Possible values: - `UNRESTRICTED (default)—this value is only available if configured by PayPal for the merchant.` - `INSTANT`  | [optional] 
**userName** | **String** | The Venmo user name chosen by the user, also know as a Venmo handle.  | [optional] 


