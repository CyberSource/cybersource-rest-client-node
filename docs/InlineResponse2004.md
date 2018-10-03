# CyberSource.InlineResponse2004

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**InlineResponse2012Links**](InlineResponse2012Links.md) |  | [optional] 
**id** | **String** | An unique identification number assigned by CyberSource to identify the submitted request. | [optional] 
**submitTimeUtc** | **String** | Time of request in UTC. &#x60;Format: YYYY-MM-DDThh:mm:ssZ&#x60;  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC.  | [optional] 
**status** | **String** | The status of the submitted transaction. | [optional] 
**reconciliationId** | **String** | The reconciliation id for the submitted transaction. This value is not returned for all processors.  | [optional] 
**clientReferenceInformation** | [**InlineResponse201ClientReferenceInformation**](InlineResponse201ClientReferenceInformation.md) |  | [optional] 
**processingInformation** | [**InlineResponse2004ProcessingInformation**](InlineResponse2004ProcessingInformation.md) |  | [optional] 
**processorInformation** | [**InlineResponse2012ProcessorInformation**](InlineResponse2012ProcessorInformation.md) |  | [optional] 
**orderInformation** | [**InlineResponse2004OrderInformation**](InlineResponse2004OrderInformation.md) |  | [optional] 
**buyerInformation** | [**V2paymentsidcapturesBuyerInformation**](V2paymentsidcapturesBuyerInformation.md) |  | [optional] 
**merchantInformation** | [**InlineResponse2002MerchantInformation**](InlineResponse2002MerchantInformation.md) |  | [optional] 
**deviceInformation** | [**InlineResponse2004DeviceInformation**](InlineResponse2004DeviceInformation.md) |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `PENDING` (value: `"PENDING"`)

* `TRANSMITTED` (value: `"TRANSMITTED"`)

* `BATCH_ERROR` (value: `"BATCH_ERROR"`)

* `VOIDED` (value: `"VOIDED"`)




