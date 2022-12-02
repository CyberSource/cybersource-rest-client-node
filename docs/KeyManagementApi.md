# CyberSource.KeyManagementApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchKeys**](KeyManagementApi.md#searchKeys) | **GET** /kms/v2/keys | Search Keys


<a name="searchKeys"></a>
# **searchKeys**
> InlineResponse200 searchKeys(opts)

Search Keys

Search one or more Keys

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.KeyManagementApi();

var opts = { 
  'offset': 56, // Number | This allows you to specify the page offset from the resulting list resultset you want the records to be returned
  'limit': 56, // Number | This allows you to specify the total number of records to be returned off the resulting list resultset
  'sort': "sort_example", // String | This allows you to specify a comma separated list of fields in the order which the resulting list resultset must be sorted.
  'organizationIds': ["organizationIds_example"], // [String] | List of Orgaization Ids to search. The maximum size of the organization Ids list is 1. The maximum length of Organization Id is 30.
  'keyIds': ["keyIds_example"], // [String] | List of Key Ids to search. The maximum size of the Key Ids list is 1
  'keyTypes': ["keyTypes_example"], // [String] | Key Type, Possible values -  certificate, password, pgp and scmp_api. When Key Type is provided atleast one more filter needs to be provided
  'expirationStartDate': new Date("2013-10-20T19:20:30+01:00"), // Date | Expiry Filter Start Date. When Expiration Date filter is provided, atleast one more filter needs to be provided
  'expirationEndDate': new Date("2013-10-20T19:20:30+01:00") // Date | Expiry Filter End Date. When Expiration Date filter is provided, atleast one more filter needs to be provided
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchKeys(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| This allows you to specify the page offset from the resulting list resultset you want the records to be returned | [optional] 
 **limit** | **Number**| This allows you to specify the total number of records to be returned off the resulting list resultset | [optional] 
 **sort** | **String**| This allows you to specify a comma separated list of fields in the order which the resulting list resultset must be sorted. | [optional] 
 **organizationIds** | [**[String]**](String.md)| List of Orgaization Ids to search. The maximum size of the organization Ids list is 1. The maximum length of Organization Id is 30. | [optional] 
 **keyIds** | [**[String]**](String.md)| List of Key Ids to search. The maximum size of the Key Ids list is 1 | [optional] 
 **keyTypes** | [**[String]**](String.md)| Key Type, Possible values -  certificate, password, pgp and scmp_api. When Key Type is provided atleast one more filter needs to be provided | [optional] 
 **expirationStartDate** | **Date**| Expiry Filter Start Date. When Expiration Date filter is provided, atleast one more filter needs to be provided | [optional] 
 **expirationEndDate** | **Date**| Expiry Filter End Date. When Expiration Date filter is provided, atleast one more filter needs to be provided | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

