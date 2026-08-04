# CyberSource.ListAgentKeysResponse200

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agentId** | **String** | Agent identifier (64-char SHA-256 hash) | 
**agentName** | **String** | Agent name | 
**keys** | [**[AgentRegistrationResponse201Keys]**](AgentRegistrationResponse201Keys.md) | List of keys (without agentId/agentName/agentType since they are at parent level) | 
**pagination** | [**ListAgentKeysResponse200Pagination**](ListAgentKeysResponse200Pagination.md) |  | 


