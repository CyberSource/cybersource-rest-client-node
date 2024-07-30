# CyberSource.Ptsv2paymentsidreversalsProcessingInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentSolution** | **String** | Type of digital payment solution for the transaction. Possible Values:   - `visacheckout`: Visa Checkout. This value is required for Visa Checkout transactions. For details, see `payment_solution` field description in [Visa Checkout Using the REST API.](https://developer.cybersource.com/content/dam/docs/cybs/en-us/apifields/reference/all/rest/api-fields.pdf)  - `001`: Apple Pay.  - `004`: Cybersource In-App Solution.  - `005`: Masterpass. This value is required for Masterpass transactions on OmniPay Direct.   - `006`: Android Pay.  - `007`: Chase Pay.  - `008`: Samsung Pay.  - `012`: Google Pay.  - `013`: Cybersource P2PE Decryption  - `014`: Mastercard credential on file (COF) payment network token. Returned in authorizations that use a payment network token associated with a TMS token.  - `015`: Visa credential on file (COF) payment network token. Returned in authorizations that use a payment network token associated with a TMS token.  - `027`: Click to Pay.  | [optional] 
**reconciliationId** | **String** | Please check with Cybersource customer support to see if your merchant account is configured correctly so you can include this field in your request. * For Payouts: max length for FDCCompass is String (22).  | [optional] 
**linkId** | **String** | Value that links the current authorization request to the original authorization request. Set this value to the ID that was returned in the reply message from the original authorization request.  This value is used for:  - Partial authorizations - Split shipments  | [optional] 
**reportGroup** | **String** | Attribute that lets you define custom grouping for your processor reports. This field is supported only for **Worldpay VAP**.  | [optional] 
**visaCheckoutId** | **String** | Identifier for the **Visa Checkout** order. Visa Checkout provides a unique order ID for every transaction in the Visa Checkout **callID** field.  | [optional] 
**issuer** | [**Ptsv2paymentsIssuerInformation**](Ptsv2paymentsIssuerInformation.md) |  | [optional] 
**actionList** | **[String]** | Array of actions (one or more) to be included in the reversal Possible value: - `AP_AUTH_REVERSAL`: Use this when you want to reverse an Alternative Payment Authorization.  | [optional] 


