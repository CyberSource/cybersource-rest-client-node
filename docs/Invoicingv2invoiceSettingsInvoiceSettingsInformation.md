# CyberSource.Invoicingv2invoiceSettingsInvoiceSettingsInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantLogo** | **String** | The image file, which must be encoded in Base64 format. Supported file formats are `png`, `jpg`, and `gif`. The image file size restriction is 1 MB. | [optional] 
**merchantDisplayName** | **String** | The merchant's display name shown on the invoice. | [optional] 
**customEmailMessage** | **String** | The content of the email message that we send to your customers. | [optional] 
**enableReminders** | **Boolean** | Whether you would like us to send an auto-generated reminder email to your invoice recipients. Currently, this reminder email is sent five days before the invoice is due and one day after it is past due. | [optional] 
**headerStyle** | [**InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformationHeaderStyle**](InvoicingV2InvoiceSettingsGet200ResponseInvoiceSettingsInformationHeaderStyle.md) |  | [optional] 
**deliveryLanguage** | **String** | The language of the email that we send to your customers. Possible values are `zh-CN`, `zh-TW`, `en-US`, `fr-FR`, `de-DE`, `ja-JP`, `pt-BR`, `ru-RU` and `es-419`. | [optional] 
**defaultCurrencyCode** | **String** | Currency used for the order. Use the three-character [ISO Standard Currency Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf)  #### Used by **Authorization** Required field.  **Authorization Reversal** For an authorization reversal (`reversalInformation`) or a capture (`processingOptions.capture` is set to `true`), you must use the same currency that you used in your payment authorization request.  #### PIN Debit Currency for the amount you requested for the PIN debit purchase. This value is returned for partial authorizations. The issuing bank can approve a partial amount if the balance on the debit card is less than the requested transaction amount. For the possible values, see the [ISO Standard Currency Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/currencies.pdf). Returned by PIN debit purchase.  For PIN debit reversal requests, you must use the same currency that was used for the PIN debit purchase or PIN debit credit that you are reversing. For the possible values, see the [ISO Standard Currency Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/currencies.pdf).  Required field for PIN Debit purchase and PIN Debit credit requests. Optional field for PIN Debit reversal requests.  #### GPX This field is optional for reversing an authorization or credit.  #### DCC for First Data Your local currency.  #### Tax Calculation Required for international tax and value added tax only. Optional for U.S. and Canadian taxes. Your local currency.  | [optional] 
**payerAuthenticationInInvoicing** | **String** | For a merchant's invoice payments, enable 3D Secure payer authentication version 1, update to 3D Secure version 2, or disable 3D Secure. Possible values are:  - `enable` - `update` - `disable`   | [optional] 
**showVatNumber** | **Boolean** | Display VAT number on Invoice. | [optional] [default to false]
**vatRegistrationNumber** | **String** | Your government-assigned tax identification number.  #### Tax Calculation Required field for value added tax only. Not applicable to U.S. and Canadian taxes.  | [optional] 
**shipTo** | **Boolean** | Collect the payers shipping address. | [optional] [default to false]
**phoneNumber** | **Boolean** | Collect the payers phone number. | [optional] [default to false]
**email** | **Boolean** | Collect the payers email address when the email address is not known or confirm it if it is known at the time of invoice creation. | [optional] [default to false]
**enableMerchantEmailNotifications** | **Boolean** | Whether you would like to receive payment notification for successful transaction | [optional] [default to false]
**customLabels** | [**[InvoicingV2InvoicesPost201ResponseInvoiceInformationCustomLabels]**](InvoicingV2InvoicesPost201ResponseInvoiceInformationCustomLabels.md) | A list of custom labels that allows you to override (rename) default field names and control the visibility of specific fields on invoices and items. If the list is empty, the labels will not be overwritten.  | [optional] 


