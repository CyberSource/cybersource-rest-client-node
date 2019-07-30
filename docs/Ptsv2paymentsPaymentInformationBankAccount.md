# CyberSource.Ptsv2paymentsPaymentInformationBankAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Account type.  Possible values:  - **C**: Checking.  - **G**: General ledger. This value is supported only on Wells Fargo ACH.  - **S**: Savings (U.S. dollars only).  - **X**: Corporate checking (U.S. dollars only).  | [optional] 
**_number** | **String** | Account number.  When processing encoded account numbers, use this field for the encoded account number.  | [optional] 
**encoderId** | **String** | Identifier for the bank that provided the customer’s encoded account number.  To obtain the bank identifier, contact your processor.  For details, see &#x60;account_encoder_id&#x60; request-level field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm)  | [optional] 
**checkNumber** | **String** | Check number.  Chase Paymentech Solutions - Optional. CyberSource ACH Service - Not used. RBS WorldPay Atlanta - Optional on debits. Required on credits. TeleCheck - Strongly recommended on debit requests. Optional on credits.  | [optional] 
**checkImageReferenceNumber** | **String** | Image reference number associated with the check. You cannot include any special characters.  | [optional] 


