# CyberSource.PblPaymentLinksAllGet404Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**submitTimeUtc** | **String** | Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` **Example** `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  Returned by Cybersource for all services.  | [optional] 
**status** | **String** | The status of the purchase or donation link.  Possible values:   - NOTFOUND    | [optional] 
**reason** | **String** | The reason of the status.  Possible values: - NOTFOUND  | [optional] 
**message** | **String** | The detail message related to the status and reason listed above. | [optional] 
**details** | [**[PtsV2PaymentsPost201ResponseErrorInformationDetails]**](PtsV2PaymentsPost201ResponseErrorInformationDetails.md) |  | [optional] 


