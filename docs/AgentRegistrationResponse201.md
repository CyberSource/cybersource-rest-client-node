# CyberSource.AgentRegistrationResponse201

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique agent identifier (64-char SHA-256 hash of domain + email + tokenRequestorId) | 
**name** | **String** | Agent name | 
**domain** | **String** | Agent domain URL | 
**description** | **String** | Agent description | [optional] 
**contactEmail** | **String** | Contact email | [optional] 
**tokenRequestorId** | **String** | Unique token requestor identifier | 
**agentType** | **String** | Agent classification: 'trusted' (commercially onboarded) or 'known' (open-source/unverified)  Possible values: - trusted - known | 
**agentMetadata** | **{String: String}** | Additional agent metadata | [optional] 
**isActive** | **Boolean** | Whether the agent is active | 
**createdAt** | **Date** | Creation timestamp | 
**updatedAt** | **Date** | Last update timestamp | 
**keys** | [**[AgentRegistrationResponse201Keys]**](AgentRegistrationResponse201Keys.md) | List of keys associated with the agent | [optional] 


