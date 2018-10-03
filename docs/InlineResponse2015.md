# CyberSource.InlineResponse2015

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**InlineResponse201EmbeddedCaptureLinks**](InlineResponse201EmbeddedCaptureLinks.md) |  | [optional] 
**id** | **String** | An unique identification number assigned by CyberSource to identify the submitted request. | [optional] 
**submitTimeUtc** | **String** | Time of request in UTC. &#x60;Format: YYYY-MM-DDThh:mm:ssZ&#x60;  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC.  | [optional] 
**status** | **String** | The status of the submitted transaction. | [optional] 
**clientReferenceInformation** | [**InlineResponse201ClientReferenceInformation**](InlineResponse201ClientReferenceInformation.md) |  | [optional] 
**voidAmountDetails** | [**InlineResponse2015VoidAmountDetails**](InlineResponse2015VoidAmountDetails.md) |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `VOIDED` (value: `"VOIDED"`)




