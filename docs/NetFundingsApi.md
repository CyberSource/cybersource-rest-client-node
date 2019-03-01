# CyberSource.NetFundingsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNetFundingInfo**](NetFundingsApi.md#getNetFundingInfo) | **GET** /reporting/v3/net-fundings | Get Netfunding information for an account or a merchant


<a name="getNetFundingInfo"></a>
# **getNetFundingInfo**
> ReportingV3NetFundingsGet200Response getNetFundingInfo(startTime, endTime, opts)

Get Netfunding information for an account or a merchant

Get Netfunding information for an account or a merchant.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.NetFundingsApi();

var startTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format. - https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14   **Example date format:**   - yyyy-MM-dd'T'HH:mm:ssXXX 

var endTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format. - https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14   **Example date format:**   - yyyy-MM-dd'T'HH:mm:ssXXX 

var opts = { 
  'organizationId': "organizationId_example", // String | Valid Cybersource Organization Id
  'groupName': "groupName_example" // String | Valid CyberSource Group Name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetFundingInfo(startTime, endTime, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startTime** | **Date**| Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format. - https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14   **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ssXXX  | 
 **endTime** | **Date**| Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format. - https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14   **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ssXXX  | 
 **organizationId** | **String**| Valid Cybersource Organization Id | [optional] 
 **groupName** | **String**| Valid CyberSource Group Name. | [optional] 

### Return type

[**ReportingV3NetFundingsGet200Response**](ReportingV3NetFundingsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json

