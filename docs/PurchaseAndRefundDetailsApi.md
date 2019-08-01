# CyberSource.PurchaseAndRefundDetailsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPurchaseAndRefundDetails**](PurchaseAndRefundDetailsApi.md#getPurchaseAndRefundDetails) | **GET** /reporting/v3/purchase-refund-details | Get Purchase and Refund details


<a name="getPurchaseAndRefundDetails"></a>
# **getPurchaseAndRefundDetails**
> ReportingV3PurchaseRefundDetailsGet200Response getPurchaseAndRefundDetails(startTime, endTime, opts)

Get Purchase and Refund details

Download the Purchase and Refund Details report. This report report includes all purchases and refund transactions, as well as all activities related to transactions resulting in an adjustment to the net proceeds. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PurchaseAndRefundDetailsApi();

var startTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd'T'HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 

var endTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd'T'HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 

var opts = { 
  'organizationId': "organizationId_example", // String | Valid Cybersource Organization Id
  'paymentSubtype': "ALL", // String | Payment Subtypes.   - **ALL**:  All Payment Subtypes   - **VI** :  Visa   - **MC** :  Master Card   - **AX** :  American Express   - **DI** :  Discover   - **DP** :  Pinless Debit 
  'viewBy': "requestDate", // String | View results by Request Date or Submission Date.   - **requestDate** : Request Date   - **submissionDate**: Submission Date 
  'groupName': "groupName_example", // String | Valid CyberSource Group Name.User can define groups using CBAPI and Group Management Module in EBC2. Groups are collection of organizationIds
  'offset': 56, // Number | Offset of the Purchase and Refund Results.
  'limit': 2000 // Number | Results count per page. Range(1-2000)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPurchaseAndRefundDetails(startTime, endTime, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startTime** | **Date**| Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)  | 
 **endTime** | **Date**| Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)  | 
 **organizationId** | **String**| Valid Cybersource Organization Id | [optional] 
 **paymentSubtype** | **String**| Payment Subtypes.   - **ALL**:  All Payment Subtypes   - **VI** :  Visa   - **MC** :  Master Card   - **AX** :  American Express   - **DI** :  Discover   - **DP** :  Pinless Debit  | [optional] [default to ALL]
 **viewBy** | **String**| View results by Request Date or Submission Date.   - **requestDate** : Request Date   - **submissionDate**: Submission Date  | [optional] [default to requestDate]
 **groupName** | **String**| Valid CyberSource Group Name.User can define groups using CBAPI and Group Management Module in EBC2. Groups are collection of organizationIds | [optional] 
 **offset** | **Number**| Offset of the Purchase and Refund Results. | [optional] 
 **limit** | **Number**| Results count per page. Range(1-2000) | [optional] [default to 2000]

### Return type

[**ReportingV3PurchaseRefundDetailsGet200Response**](ReportingV3PurchaseRefundDetailsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json

