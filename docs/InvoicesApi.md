# CyberSource.InvoicesApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInvoice**](InvoicesApi.md#createInvoice) | **POST** /invoicing/v2/invoices | Create a New Invoice
[**getAllInvoices**](InvoicesApi.md#getAllInvoices) | **GET** /invoicing/v2/invoices | Get a List of Invoices
[**getInvoice**](InvoicesApi.md#getInvoice) | **GET** /invoicing/v2/invoices/{id} | Get Invoice Details
[**performCancelAction**](InvoicesApi.md#performCancelAction) | **POST** /invoicing/v2/invoices/{id}/cancelation | Cancel an Invoice
[**performSendAction**](InvoicesApi.md#performSendAction) | **POST** /invoicing/v2/invoices/{id}/delivery | Send an Invoice
[**updateInvoice**](InvoicesApi.md#updateInvoice) | **PUT** /invoicing/v2/invoices/{id} | Update an Invoice


<a name="createInvoice"></a>
# **createInvoice**
> InvoicingV2InvoicesPost201Response createInvoice(createInvoiceRequest)

Create a New Invoice

Create a new invoice.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InvoicesApi();

var createInvoiceRequest = new CyberSource.CreateInvoiceRequest(); // CreateInvoiceRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createInvoice(createInvoiceRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createInvoiceRequest** | [**CreateInvoiceRequest**](CreateInvoiceRequest.md)|  | 

### Return type

[**InvoicingV2InvoicesPost201Response**](InvoicingV2InvoicesPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getAllInvoices"></a>
# **getAllInvoices**
> InvoicingV2InvoicesAllGet200Response getAllInvoices(offset, limit, opts)

Get a List of Invoices

Get a list of invoices.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InvoicesApi();

var offset = 56; // Number | Page offset number.

var limit = 56; // Number | Maximum number of items you would like returned.

var opts = { 
  'status': "status_example" // String | The status of the invoice.  Possible values:   - DRAFT   - CREATED   - SENT   - PARTIAL   - PAID   - CANCELED 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllInvoices(offset, limit, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Page offset number. | 
 **limit** | **Number**| Maximum number of items you would like returned. | 
 **status** | **String**| The status of the invoice.  Possible values:   - DRAFT   - CREATED   - SENT   - PARTIAL   - PAID   - CANCELED  | [optional] 

### Return type

[**InvoicingV2InvoicesAllGet200Response**](InvoicingV2InvoicesAllGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getInvoice"></a>
# **getInvoice**
> InvoicingV2InvoicesGet200Response getInvoice(id)

Get Invoice Details

Get the details of a specific invoice.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InvoicesApi();

var id = "id_example"; // String | The invoice number.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInvoice(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The invoice number. | 

### Return type

[**InvoicingV2InvoicesGet200Response**](InvoicingV2InvoicesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="performCancelAction"></a>
# **performCancelAction**
> InvoicingV2InvoicesPost201Response performCancelAction(id)

Cancel an Invoice

Cancel an invoice.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InvoicesApi();

var id = "id_example"; // String | The invoice number.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.performCancelAction(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The invoice number. | 

### Return type

[**InvoicingV2InvoicesPost201Response**](InvoicingV2InvoicesPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="performSendAction"></a>
# **performSendAction**
> InvoicingV2InvoicesPost201Response performSendAction(id)

Send an Invoice

Send an invoice.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InvoicesApi();

var id = "id_example"; // String | The invoice number.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.performSendAction(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The invoice number. | 

### Return type

[**InvoicingV2InvoicesPost201Response**](InvoicingV2InvoicesPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="updateInvoice"></a>
# **updateInvoice**
> InvoicingV2InvoicesPost201Response updateInvoice(id, updateInvoiceRequest)

Update an Invoice

Update an invoice.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InvoicesApi();

var id = "id_example"; // String | The invoice number.

var updateInvoiceRequest = new CyberSource.UpdateInvoiceRequest(); // UpdateInvoiceRequest | Updating the invoice does not resend the invoice automatically. You must resend the invoice separately.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateInvoice(id, updateInvoiceRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The invoice number. | 
 **updateInvoiceRequest** | [**UpdateInvoiceRequest**](UpdateInvoiceRequest.md)| Updating the invoice does not resend the invoice automatically. You must resend the invoice separately. | 

### Return type

[**InvoicingV2InvoicesPost201Response**](InvoicingV2InvoicesPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

