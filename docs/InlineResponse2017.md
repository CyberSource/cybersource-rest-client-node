# CyberSource.InlineResponse2017

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**submitTimeUtc** | **Date** | Time of request in UTC. `Format: YYYY-MM-DDThh:mm:ssZ`  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC.  | [optional] 
**status** | **String** | The status of Registration request Possible Values:   - 'INITIALIZED'   - 'RECEIVED'   - 'PROCESSING'   - 'SUCCESS'   - 'FAILURE'   - 'PARTIAL'  | [optional] 
**registrationInformation** | [**InlineResponse2017RegistrationInformation**](InlineResponse2017RegistrationInformation.md) |  | [optional] 
**integrationInformation** | [**InlineResponse2017IntegrationInformation**](InlineResponse2017IntegrationInformation.md) |  | [optional] 
**organizationInformation** | [**InlineResponse2017OrganizationInformation**](InlineResponse2017OrganizationInformation.md) |  | [optional] 
**productInformationSetups** | [**[InlineResponse2017ProductInformationSetups]**](InlineResponse2017ProductInformationSetups.md) |  | [optional] 
**message** | **String** |  | [optional] 
**details** | **{String: [Object]}** |  | [optional] 


