# CyberSource.ListAgentKeysResponse200

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agentId** | **String** | Agent identifier (64-char SHA-256 hash) | 
**agentName** | **String** | Display name of the agent | 
**keys** | [**[AgentRegistrationResponse201Keys]**](AgentRegistrationResponse201Keys.md) | Paginated list of public keys belonging to this agent (agentId/agentName/agentType omitted — available at the parent level) | 
**pagination** | [**ListAgentKeysResponse200Pagination**](ListAgentKeysResponse200Pagination.md) |  | 


