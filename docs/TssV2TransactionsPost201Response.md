# CyberSource.TssV2TransactionsPost201Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**searchId** | **String** | An unique identification number assigned by CyberSource to identify each Search request. | [optional] 
**save** | **Boolean** | save or not save. | [optional] 
**name** | **String** | The description for this field is not available.  | [optional] 
**timezone** | **String** | Time Zone in ISO format. | [optional] 
**query** | **String** | transaction search query string. | [optional] 
**offset** | **Number** | offset. | [optional] 
**limit** | **Number** | Limit on number of results. | [optional] 
**sort** | **String** | A comma separated list of the following form - fieldName1 asc or desc, fieldName2 asc or desc, etc. | [optional] 
**count** | **Number** | Results for this page, this could be below the limit. | [optional] 
**totalCount** | **Number** | Total number of results. | [optional] 
**status** | **String** | The status of the submitted transaction. | [optional] 
**submitTimeUtc** | **String** | Time of request in UTC. Format: &#x60;YYYY-MM-DDThh:mm:ssZ&#x60; Example &#x60;2016-08-11T22:47:57Z&#x60; equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The &#x60;T&#x60; separates the date and the time. The &#x60;Z&#x60; indicates UTC.  | [optional] 
**embedded** | [**TssV2TransactionsPost201ResponseEmbedded**](TssV2TransactionsPost201ResponseEmbedded.md) |  | [optional] 
**links** | [**PtsV2PaymentsReversalsPost201ResponseLinks**](PtsV2PaymentsReversalsPost201ResponseLinks.md) |  | [optional] 


