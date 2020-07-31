# CyberSource.PtsV2IncrementalAuthorizationPatch201ResponsePaymentInformationAccountFeatures

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **String** | #### GPX Mastercard product ID associated with the primary account number (PAN). Returned by authorization service.  #### CyberSource through VisaNet Visa or Mastercard product ID that is associated with the primary account number (PAN). For descriptions of the Visa product IDs, see the Product ID table on the [Visa Request &amp; Response Codes web page.](https://developer.visa.com/guides/request_response_codes)  Data Length: String (3)  #### GPN Visa or Mastercard product ID that is associated with the primary account number (PAN). For descriptions of the Visa product IDs, see the Product ID table on the [Visa Request &amp; Response Codes web page.](https://developer.visa.com/guides/request_response_codes)  Data Length: String (3)  #### Worldpay VAP **Important** Before using this field on Worldpay VAP, you must contact CyberSource Customer Support to have your account configured for this feature.  Type of card used in the transaction. The only possible value is: - &#x60;PREPAID&#x60;: Prepaid Card  Data Length: String (7)  #### RBS WorldPay Atlanta Type of card used in the transaction. Possible values: - &#x60;B&#x60;: Business Card - &#x60;O&#x60;: Noncommercial Card - &#x60;R&#x60;: Corporate Card - &#x60;S&#x60;: Purchase Card - &#x60;Blank&#x60;: Purchase card not supported  Data Length: String (1)  | [optional] 


