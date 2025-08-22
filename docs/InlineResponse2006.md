# CyberSource.InlineResponse2006

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalCount** | **Number** | Total number of results. | [optional] 
**offset** | **Number** | Controls the starting point within the collection of results, which defaults to 0. The first item in the collection is retrieved by setting a zero offset.  For example, if you have a collection of 15 items to be retrieved from a resource and you specify limit=5, you can retrieve the entire set of results in 3 successive requests by varying the offset value like this:  `offset=0` `offset=5` `offset=10`  **Note:** If an offset larger than the number of results is provided, this will result in no embedded object being returned.  | [optional] 
**limit** | **Number** | Controls the maximum number of items that may be returned for a single request. The default is 20, the maximum is 2500.  | [optional] 
**sort** | **String** | A comma separated list of the following form:  `submitTimeUtc:desc`  | [optional] 
**count** | **Number** | Results for this page, this could be below the limit. | [optional] 
**devices** | [**[InlineResponse2006Devices]**](InlineResponse2006Devices.md) | A collection of devices | [optional] 


