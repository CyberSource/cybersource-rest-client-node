# CyberSource.Rbsv1subscriptionsProcessingInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commerceIndicator** | **String** | > This field is ignored when you provide the `subscriptionInformation.originalTransactionId` or update the subscription.  Commerce Indicator is a way to identify the type of transaction. Some payment card companies use this information when determining discount rates.  Valid values: - `MOTO` - `RECURRING` - `INTERNET`  Please add the ecommerce indicator based on the rules defined by your gateway/processor. Some gateways may not accept the Commerce Indicator `RECURRING` with a Zero Dollar Authorization, that is done for subscriptions starting at a future date.  | [optional] 
**authorizationOptions** | [**Rbsv1subscriptionsProcessingInformationAuthorizationOptions**](Rbsv1subscriptionsProcessingInformationAuthorizationOptions.md) |  | [optional] 


