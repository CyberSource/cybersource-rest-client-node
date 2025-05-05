# CyberSource.InvoicingV2InvoicesAllGet400Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**submitTimeUtc** | **String** | Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` **Example** `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC.  Returned by Cybersource for all services.  | [optional] 
**status** | **String** | The status of the invoice.  Possible values:   - BADREQUEST  | [optional] 
**reason** | **String** | The reason of the status.  Possible values: - DUPLICATE_RECORD - ACTION_NOT_ALLOWED - VALIDATION_ERRORS - INVALID_IMAGE - INVALID_TRANSIENT_TOKEN  | [optional] 
**message** | **String** | The detail message related to the status and reason listed above. | [optional] 
**details** | [**[PtsV2PaymentsPost201ResponseErrorInformationDetails]**](PtsV2PaymentsPost201ResponseErrorInformationDetails.md) |  | [optional] 


