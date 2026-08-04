# CyberSource.Iplv2paymentlinksidPurchaseInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purchaseNumber** | **String** | The purchase number | [optional] 
**transactionReferenceNumber** | **String** | The transaction reference number (TRN) is a identifier assigned to each payment transaction that allows merchants, customers, and payment processors to track and reference specific transactions throughout their lifecycle.  When provided, this value is passed to the payment processor as the reconciliation ID for the payment. For invoices this is typically the invoice number, and for purchase or donation links it is typically the link identifier.  Only letters and numbers are allowed; spaces and other special characters are not permitted.  | [optional] 
**expirationDate** | **Date** | Define an expiration date for the link.  The date must be today or in the future.  Format: `YYYY-MM-DD`, where `YYYY` = year, `MM` = month, and `DD` = day.  The invoice link automatically expires 12 months after the due date.  | [optional] 
**expirationAmount** | **String** | Define an expiry amount for the link.  Must be null or greater than 0.  If the total price of all transactions for this link exceeds the expiry amount, the link will expire.  | [optional] 
**expirationQuantity** | **String** | Define an expiration quantity for the link.  Must be null or greater than 0.  If the total quantity of items sold exceeds the expiration quantity, the link is expired.  | [optional] 


