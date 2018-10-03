# CyberSource.InlineResponse2002

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**InlineResponse201Links**](InlineResponse201Links.md) |  | [optional] 
**embedded** | [**InlineResponse201Embedded**](InlineResponse201Embedded.md) |  | [optional] 
**id** | **String** | An unique identification number assigned by CyberSource to identify the submitted request. | [optional] 
**submitTimeUtc** | **String** | Time of request in UTC. &#x60;Format: YYYY-MM-DDThh:mm:ssZ&#x60;  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC.  | [optional] 
**status** | **String** | The status of the submitted transaction. | [optional] 
**reconciliationId** | **String** | The reconciliation id for the submitted transaction. This value is not returned for all processors.  | [optional] 
**errorInformation** | [**InlineResponse201ErrorInformation**](InlineResponse201ErrorInformation.md) |  | [optional] 
**clientReferenceInformation** | [**InlineResponse201ClientReferenceInformation**](InlineResponse201ClientReferenceInformation.md) |  | [optional] 
**processingInformation** | [**InlineResponse2002ProcessingInformation**](InlineResponse2002ProcessingInformation.md) |  | [optional] 
**processorInformation** | [**InlineResponse2002ProcessorInformation**](InlineResponse2002ProcessorInformation.md) |  | [optional] 
**paymentInformation** | [**InlineResponse2002PaymentInformation**](InlineResponse2002PaymentInformation.md) |  | [optional] 
**orderInformation** | [**InlineResponse2002OrderInformation**](InlineResponse2002OrderInformation.md) |  | [optional] 
**buyerInformation** | [**InlineResponse2002BuyerInformation**](InlineResponse2002BuyerInformation.md) |  | [optional] 
**merchantInformation** | [**InlineResponse2002MerchantInformation**](InlineResponse2002MerchantInformation.md) |  | [optional] 
**deviceInformation** | [**InlineResponse2002DeviceInformation**](InlineResponse2002DeviceInformation.md) |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `AUTHORIZED` (value: `"AUTHORIZED"`)

* `PARTIAL_AUTHORIZED` (value: `"PARTIAL_AUTHORIZED"`)

* `AUTHORIZED_PENDING_REVIEW` (value: `"AUTHORIZED_PENDING_REVIEW"`)

* `DECLINED` (value: `"DECLINED"`)




