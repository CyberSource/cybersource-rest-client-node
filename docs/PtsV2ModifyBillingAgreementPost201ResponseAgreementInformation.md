# CyberSource.PtsV2ModifyBillingAgreementPost201ResponseAgreementInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Identifier for the mandate.  | [optional] 
**dateSigned** | **String** | Date the mandate has been signed.  Format YYYYMMdd | [optional] 
**dateCreated** | **String** | Date the mandate has been created.  Format YYYYMMdd | [optional] 
**dateRevoked** | **String** | Date the mandate has been revoked.  Format YYYYMMdd | [optional] 
**type** | **String** | Identifies the type of schedule as either recurring, one-off, split or usage.  Possible values: - recurring - oneoff - split - usage | [optional] 
**frequency** | **String** | Regularity with which the event occurs.  Possible values: - annual - monthly - quarterly - semiannual - weekly - daily - adhoc - intraday - fortnightly | [optional] 
**encodedHtml** | **String** | Base64 encoded html string | [optional] 
**encodedHtmlPopup** | **String** | Base64 encoded popup html string | [optional] 
**url** | **String** | URL for redirecting the customer for creating the mandate.  | [optional] 
**transactionId** | **String** | The Billing Agreement ID returned by processor (PayPal).  | [optional] 


