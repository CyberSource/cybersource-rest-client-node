# CyberSource.TssV2TransactionsPost201Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | An unique identification number assigned by CyberSource to identify the submitted request. | [optional] 
**save** | **Boolean** | save or not save. | [optional] 
**name** | **String** | The description for this field is not available.  | [optional] 
**timezone** | **String** | Time Zone. | [optional] 
**query** | **String** | transaction search query string. | [optional] 
**offset** | **Number** | offset. | [optional] 
**limit** | **Number** | limit on number of results. | [optional] 
**sort** | **String** | A comma separated list of the following form - fieldName1 asc or desc, fieldName2 asc or desc, etc. | [optional] 
**count** | **Number** | Results for this page, this could be below the limit. | [optional] 
**totalCount** | **Number** | total number of results. | [optional] 
**submitTimeUtc** | **String** | Time of request in UTC. &#x60;Format: YYYY-MM-DDThh:mm:ssZ&#x60;  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC.  | [optional] 
**embedded** | [**TssV2TransactionsPost201ResponseEmbedded**](TssV2TransactionsPost201ResponseEmbedded.md) |  | [optional] 
**links** | [**PtsV2PaymentsReversalsPost201ResponseLinks**](PtsV2PaymentsReversalsPost201ResponseLinks.md) |  | [optional] 


