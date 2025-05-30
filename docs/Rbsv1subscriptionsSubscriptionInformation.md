# CyberSource.Rbsv1subscriptionsSubscriptionInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Subscription code is an optional field, If not provided system generates and assign one  | [optional] 
**planId** | **String** | Plan Id. Use Plan Id from Create Plan Service.  | [optional] 
**name** | **String** | Subscription Name  | 
**startDate** | **String** | Start date of the Subscription  Start date must be in UTC. Format: YYYY-MM-DDThh:mm:ssZ The T separates the date and the time. The Z indicates UTC.  Note: Subscription starts on the day provided in UTC.  **Example** 2022-08-11T22:47:57Z equals August 11, 2022, at 22:47:57 (10:47:57 p.m.). Subscription will start on August 11,2022.  | 
**originalTransactionId** | **String** | Network transaction identifier that was returned in the payment response field _processorInformation.transactionId_ in the reply message for the original subscription-initializing payment.  | [optional] 
**originalTransactionAuthorizedAmount** | **String** | Amount of the original subscription-initializing payment.  *Required when using a Diners or Discover card*.  | [optional] 


