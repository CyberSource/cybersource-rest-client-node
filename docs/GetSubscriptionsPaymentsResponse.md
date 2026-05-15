# CyberSource.GetSubscriptionsPaymentsResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**GetSubscriptionsPaymentsResponseLinks**](GetSubscriptionsPaymentsResponseLinks.md) |  | [optional] 
**submitTimeUtc** | **String** | Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` **Example** `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  Returned by Cybersource for all services.  | [optional] 
**totalCount** | **Number** | Total number of payments returned for the subscription, including both past payments and those specified in scheduledPaymentsCount. | [optional] 
**cyclesCompletedCount** | [**GetSubscriptionsPaymentsResponseCyclesCompletedCount**](GetSubscriptionsPaymentsResponseCyclesCompletedCount.md) |  | [optional] 
**billingCyclesToSkip** | **[Number]** | A list of billing cycles that are marked to be skipped. | [optional] 
**subscriptionPayment** | [**[GetSubscriptionsPaymentsResponseSubscriptionPayment]**](GetSubscriptionsPaymentsResponseSubscriptionPayment.md) | The list of subscription payment details. | [optional] 


