# CyberSource.PtsV2PaymentsVoidsPost201ResponseVoidAmountDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**voidAmount** | **String** | Total amount of the void. | [optional] 
**originalTransactionAmount** | **String** | Amount of the original transaction. | [optional] 
**currency** | **String** | Currency used for the order. Use the three-character [ISO Standard Currency Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf)  #### Used by **Authorization** Required field.  **Authorization Reversal** For an authorization reversal (&#x60;reversalInformation&#x60;) or a capture (&#x60;processingOptions.capture&#x60; is set to &#x60;true&#x60;), you must use the same currency that you used in your payment authorization request.  #### GPX This field is optional for reversing an authorization or credit.  #### DCC for First Data Your local currency.  | [optional] 


