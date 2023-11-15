# CyberSource.Notificationsubscriptionsv1webhooksRetryPolicy

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **String** | This is used to calculate the Retry Sequence.  Sample calculations using firstRetry&#x3D;10, interval&#x3D;30, maxNumberOfRetries&#x3D;3 Arithmetic &#x3D; a+r(n-1) Retry 1 - 10 minutes Retry 2 - 10+30x1 &#x3D; 40 minutes Retry 3 - 10+30x2 &#x3D; 70 minutes  Geometric &#x3D; ar^(n-1) Retry 1 - 10 minutes Retry 2 - 10x30^1 &#x3D; 300 minutes Retry 3 - 10x30^2 &#x3D; 9,000 minutes  | [optional] 
**firstRetry** | **Number** | When to initiate first retry, after the initial call failed. (in mins). | [optional] 
**interval** | **Number** | The interval between retries (in mins). | [optional] 
**numberOfRetries** | **Number** | The number of retries per sequence. | [optional] 
**deactivateFlag** | **String** | Deactivate the subscription if your retries fail to deliver.  If this is set to &#x60;true&#x60;, the automatic suspend and resume feature will occur. This would prevent new webhooks from attempting to deliver and to queue up until your healthCheckUrl returns 200 again, then all messages will be sent.  If this is set to &#x60;false&#x60;, new individual messages will continue to retry and exhaust all failures, but the subscription will stay active.  | [optional] 
**repeatSequenceCount** | **Number** | The number of times to repeat the complete retry sequence. 0 &#x3D;&gt; don&#39;t repeat the retry sequence 1 &#x3D;&gt; repeat the retry sequence once (R1, R2, R3)+ (R1, R2, R3) 2 &#x3D;&gt; repeat the retry sequence twice (R1, R2, R3) + (R1, R2, R3) + (R1, R2, R3)  | [optional] 
**repeatSequenceWaitTime** | **Number** | The time to wait to before repeating the complete retry sequence. Amount of time to wait between each sequence. Sample calculation using repeatSequenceWaitTime&#x3D;10 (R1, R2, R3) + (10) + (R1, R2, R3) + (10) + (R1, R2, R3)  | [optional] 
**additionalAttributes** | **[{String: String}]** | Additional data, if any. | [optional] 


