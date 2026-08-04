# CyberSource.TransactionRiskLabelingApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitLabels**](TransactionRiskLabelingApi.md#submitLabels) | **POST** /unifiedrisk | Transaction Risk Labeling


<a name="submitLabels"></a>
# **submitLabels**
> InlineResponse2013 submitLabels(labelRequest)

Transaction Risk Labeling

The Labels endpoint enables clients to submit post-transaction feedback, including both the decision made on the transaction  (such as accept or reject) and the final outcome (such as confirmed fraud, valid, or suspected).  Consistent label submission is critical to achieving optimal model performance, as it directly drives model accuracy, tuning,  and the quality of client‑specific insights over time

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.TransactionRiskLabelingApi();

var labelRequest = new CyberSource.LabelRequest(); // LabelRequest | Label submission request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.submitLabels(labelRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **labelRequest** | [**LabelRequest**](LabelRequest.md)| Label submission request | 

### Return type

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

