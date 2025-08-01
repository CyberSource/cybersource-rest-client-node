# CyberSource.InlineResponse2014KeyInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider** | **String** | Provider name  | [optional] 
**tenant** | **String** | Tenant name  | [optional] 
**organizationId** | **String** | Organization Id  | [optional] 
**clientKeyId** | **String** | Client key Id  | [optional] 
**keyId** | **String** | Key Serial Number  | [optional] 
**key** | **String** | Value of the key  | [optional] 
**keyType** | **String** | Type of the key  | [optional] 
**status** | **String** | The status of the key  | [optional] 
**expirationDate** | **String** | The expiration time in UTC. `Format: YYYY-MM-DDThh:mm:ssZ` Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC.  | [optional] 
**message** | **String** | Message in case of failed key  | [optional] 
**errorInformation** | [**InlineResponse2014KeyInformationErrorInformation**](InlineResponse2014KeyInformationErrorInformation.md) |  | [optional] 


