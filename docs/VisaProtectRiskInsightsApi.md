# CyberSource.VisaProtectRiskInsightsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitVpri**](VisaProtectRiskInsightsApi.md#submitVpri) | **POST** /unifiedrisk | Visa Protect Risk Insights


<a name="submitVpri"></a>
# **submitVpri**
> UnifiedRiskPost201Response submitVpri(vpriRequest)

Visa Protect Risk Insights

VPRI delivers real-time, AI-driven risk scores and insights via a data-only API to enrich existing fraud strategies and improve decisioning. It integrates easily into existing workflows and provides immediate value by identifying legitimate behavior across Visa's global network—helping reduce false declines and increase acceptance.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.VisaProtectRiskInsightsApi();

var vpriRequest = new CyberSource.VpriRequest(); // VpriRequest | VPRI request for Transaction Risk Scoring or Transaction Risk Labeling


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.submitVpri(vpriRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vpriRequest** | [**VpriRequest**](VpriRequest.md)| VPRI request for Transaction Risk Scoring or Transaction Risk Labeling | 

### Return type

[**UnifiedRiskPost201Response**](UnifiedRiskPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

