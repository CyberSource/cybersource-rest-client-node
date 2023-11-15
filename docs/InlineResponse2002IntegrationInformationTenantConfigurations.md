# CyberSource.InlineResponse2002IntegrationInformationTenantConfigurations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**solutionId** | **String** | The solutionId is the unique identifier for this system resource. Partner can use it to reference the specific solution through out the system.  | [optional] 
**tenantConfigurationId** | **String** | The tenantConfigurationId is the unique identifier for this system resource. You will see various places where it must be referenced in the URI path, or when querying the hierarchy for ancestors or descendants.  | [optional] 
**status** | **String** |  | [optional] 
**submitTimeUtc** | **Date** | Time of request in UTC. | [optional] 
**tenantInformation** | [**Boardingv1registrationsIntegrationInformationTenantInformation**](Boardingv1registrationsIntegrationInformationTenantInformation.md) |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `LIVE` (value: `"LIVE"`)

* `INACTIVE` (value: `"INACTIVE"`)

* `TEST` (value: `"TEST"`)




