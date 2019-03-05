# CyberSource.PtsV2PayoutsPost400Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**submitTimeUtc** | **String** | Time of request in UTC. &#x60;Format: YYYY-MM-DDThh:mm:ssZ&#x60;  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC.  | [optional] 
**status** | **String** | The status of the submitted transaction. | [optional] 
**reason** | **String** | The reason of the status.  | [optional] 
**message** | **String** | The detail message related to the status and reason listed above. Possible value is:    - Your aggregator or acquirer is not accepting transactions from you at this time.   - Your aggregator or acquirer is not accepting this transaction.   - CyberSource declined the request because the credit card has expired. You might also receive this value if     the expiration date you provided does not match the date the issuing bank has on file.   - The bank declined the transaction.   - The merchant reference number for this authorization request matches the merchant reference number of     another authorization request that you sent within the past 15 minutes. Resend the request with a unique     merchant reference number.   - The credit card number did not pass CyberSource basic checks.   - Data provided is not consistent with the request. For example, you requested a product with negative cost.   - The request is missing a required field.  | [optional] 
**details** | [**[PtsV2PayoutsPost201ResponseErrorInformationDetails]**](PtsV2PayoutsPost201ResponseErrorInformationDetails.md) |  | [optional] 


<a name="ReasonEnum"></a>
## Enum: ReasonEnum


* `MISSING_FIELD` (value: `"MISSING_FIELD"`)

* `INVALID_DATA` (value: `"INVALID_DATA"`)

* `DUPLICATE_REQUEST` (value: `"DUPLICATE_REQUEST"`)

* `INVALID_MERCHANT_CONFIGURATION` (value: `"INVALID_MERCHANT_CONFIGURATION"`)

* `INVALID_AMOUNT` (value: `"INVALID_AMOUNT"`)

* `DEBIT_CARD_USEAGE_EXCEEDD_LIMIT` (value: `"DEBIT_CARD_USEAGE_EXCEEDD_LIMIT"`)




