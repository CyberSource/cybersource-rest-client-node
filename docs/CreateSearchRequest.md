# CyberSource.CreateSearchRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**save** | **Boolean** | Indicates whether or not you want to save this search request for future use. The options are:  * `true` * `false` (default value)  If set to `true`, this field returns `searchID` in the response. You can use this value to retrieve the details of the saved search.  | [optional] 
**name** | **String** | Name of this search. When `save` is set to `true`, this search is saved with this name.  | [optional] 
**timezone** | **String** | Merchant's time zone in ISO standard, using the TZ database format. For example: `America/Chicago`  | [optional] 
**query** | **String** | String that contains the filters and variables for which you want to search. For information about supported field-filters and operators, see the [Query Filters]( https://developer.cybersource.com/api/developer-guides/dita-txn-search-details-rest-api-dev-guide-102718/txn-search-intro/txn-filtering.html) section of the Transaction Search Developer Guide.  | [optional] 
**offset** | **Number** | Controls the starting point within the collection of results, which defaults to 0. The first item in the collection is retrieved by setting a zero offset.  For example, if you have a collection of 15 items to be retrieved from a resource and you specify limit=5, you can retrieve the entire set of results in 3 successive requests by varying the offset value like this:  `offset=0` `offset=5` `offset=10`  **Note:** If an offset larger than the number of results is provided, this will result in no embedded object being returned.  | [optional] 
**limit** | **Number** | Controls the maximum number of items that may be returned for a single request. The default is 20, the maximum is 2500.  | [optional] 
**sort** | **String** | A comma separated list of the following form:  `submitTimeUtc:desc`  | [optional] 


