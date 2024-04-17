# CyberSource.SAConfigNotificationsMerchantNotifications

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backofficePostEnabled** | **Boolean** | Enables Webhook transaction confirmation messages sent to URL defined in backofficePostUrl. Usually enabled by web developers integrating to Secure Acceptance. | [optional] 
**backofficeEmailAddress** | **String** | Email address to receive transaction confirmation messages. | [optional] 
**backofficeEmailEnabled** | **Boolean** | Enables email transaction confirmation messages, sent to the address specified in backofficeEmailAddress. | [optional] 
**backofficePostUrl** | **String** | Webhook URL to which transaction confirmation is sent. Usually completed by the web developers integrating to Secure Acceptance. | [optional] 
**cardNumberFormat** | **String** | Format in which the card number should be masked in the notifications.   Valid values: `1` - Display first 6 digits only (e.g. \"444433**********\")  `2` - Display last four digits only (e.g. \"************1111\")  `3` - Display First six and last four digits (e.g. \"444433******1111\")  | [optional] 


