# CyberSource.PtsV2PaymentsReversalsPost201ResponseReversalAmountDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reversedAmount** | **String** | Total reversed amount.  For details, see &#x60;auth_reversal_amount&#x60; field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  | [optional] 
**originalTransactionAmount** | **String** | Amount of the original transaction.  For details, see &#x60;original_transaction_amount&#x60; field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  | [optional] 
**currency** | **String** | Currency used for the order. Use the three-character [ISO Standard Currency Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf)  #### Used by **Authorization** Required field.  **Authorization Reversal** For an authorization reversal (&#x60;reversalInformation&#x60;) or a capture (&#x60;processingOptions.capture&#x60; is set to &#x60;true&#x60;), you must use the same currency that you used in your payment authorization request.  #### GPX This field is optional for reversing an authorization or credit.  #### DCC for First Data Your local currency.  | [optional] 


