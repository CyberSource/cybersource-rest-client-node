# CyberSource.SAConfigNotificationsCustomerNotifications

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customReceiptPageEnabled** | **Boolean** | Toggles the custom receipt page, where merchants can receive the results of the transaction and display appropriate messaging. Usually set by web developers integrating to Secure Acceptance. | [optional] 
**receiptEmailAddress** | **String** | Email address where a copy of the payer's receipt email is sent, when notificationReceiptEmailEnabled is true. | [optional] 
**customerReceiptEmailEnabled** | **Boolean** | Toggles an email receipt sent to the payer's email address on payment success. | [optional] 
**customCancelPage** | **String** | URL to which transaction results are POSTed when the payer clicks 'Cancel' on the Hosted Checkout. Triggered when customCancelPageEnabled is true. Usually set by web developers integrating to Secure Acceptance. | [optional] 
**customReceiptPage** | **String** | URL to which transaction results are POSTed when the payer requests a payment on the Hosted Checkout. Triggered when customCancelPageEnabled is true. Usually set by web developers integrating to Secure Acceptance. | [optional] 
**customCancelPageEnabled** | **Boolean** | Toggles the custom cancel page, where merchants can receive notice that the payer has canceled, and display appropriate messaging and direction. Usually set by web developers integrating to Secure Acceptance. | [optional] 
**notificationReceiptEmailEnabled** | **Boolean** | Toggles whether merchant receives a copy of the payer's receipt email. | [optional] 


