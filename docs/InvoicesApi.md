# CyberSource.InvoicesApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInvoice**](InvoicesApi.md#createInvoice) | **POST** /invoicing/v2/invoices | Create a New Invoice
[**getAllInvoices**](InvoicesApi.md#getAllInvoices) | **GET** /invoicing/v2/invoices | Get a List of Invoices
[**getInvoice**](InvoicesApi.md#getInvoice) | **GET** /invoicing/v2/invoices/{id} | Get Invoice Details
[**performCancelAction**](InvoicesApi.md#performCancelAction) | **POST** /invoicing/v2/invoices/{id}/cancelation | Cancel an Invoice
[**performPublishAction**](InvoicesApi.md#performPublishAction) | **POST** /invoicing/v2/invoices/{id}/publication | Publish an Invoice
[**performSendAction**](InvoicesApi.md#performSendAction) | **POST** /invoicing/v2/invoices/{id}/delivery | Send an Invoice
[**updateInvoice**](InvoicesApi.md#updateInvoice) | **PUT** /invoicing/v2/invoices/{id} | Update an Invoice


<a name="createInvoice"></a>
# **createInvoice**
> InvoicingV2InvoicesPost201Response createInvoice(createInvoiceRequest)

Create a New Invoice

The invoicing product enables you to bill any customer with an email address and accept digital payments securely from any connected device. You can either use the system generated email or use the invoice payment link in your own communication. You can add discounts and taxes for the entire invoice or for each line item. To customize the invoice to match your brand see [Invoice Settings](https://developer.cybersource.com/api-reference-assets/index.html#invoicing_invoice-settings_update-invoice-settings). The invoice payment page uses Unified Checkout to process the payments. The availability of API features for a merchant can depend on the portfolio configuration and may need to be enabled at the portfolio level before they can be added to merchant accounts.

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
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="getAllInvoices"></a>
# **getAllInvoices**
> InvoicingV2InvoicesAllGet200Response getAllInvoices(offset, limit, opts)

Get a List of Invoices

Provides a (filtered) list of invoices that have been created in your account. You can filter the list based on Invoice Status by setting the status query parameter to one of DRAFT, CREATED, SENT, PARTIAL, PAID or CANCELED.

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
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="getInvoice"></a>
# **getInvoice**
> InvoicingV2InvoicesGet200Response getInvoice(id)

Get Invoice Details

You can retrieve details of a specific invoice. This can be used to check the Invoice status and get a list of invoice payments in the invoice history section of the response. For each payment transaction you can use the Transaction Details API to get more details on the payment transaction.

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
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="performCancelAction"></a>
# **performCancelAction**
> InvoicingV2InvoicesCancel200Response performCancelAction(id)

Cancel an Invoice

You can cancel an invoice if no payment is made to it. You cannot cancel partially or fully paid invoices.

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

[**InvoicingV2InvoicesCancel200Response**](InvoicingV2InvoicesCancel200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="performPublishAction"></a>
# **performPublishAction**
> InvoicingV2InvoicesPublish200Response performPublishAction(id)

Publish an Invoice

You can publish an invoice in DRAFT status. After invoking this method, the invoice status is changed to CREATED.

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
apiInstance.performPublishAction(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The invoice number. | 

### Return type

[**InvoicingV2InvoicesPublish200Response**](InvoicingV2InvoicesPublish200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="performSendAction"></a>
# **performSendAction**
> InvoicingV2InvoicesSend200Response performSendAction(id)

Send an Invoice

You can send an invoice in draft or created state or resend a sent or partially paid invoice. Fully paid or canceled invoices cannot be resent.

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

[**InvoicingV2InvoicesSend200Response**](InvoicingV2InvoicesSend200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

<a name="updateInvoice"></a>
# **updateInvoice**
> InvoicingV2InvoicesPut200Response updateInvoice(id, updateInvoiceRequest)

Update an Invoice

You can update all information except the invoice number till any payment is received for an invoice. Invoices that are partially or fully paid or cancelled cannot be updated.

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

[**InvoicingV2InvoicesPut200Response**](InvoicingV2InvoicesPut200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json, application/hal+json, application/json;charset=utf-8, application/hal+json;charset=utf-8

