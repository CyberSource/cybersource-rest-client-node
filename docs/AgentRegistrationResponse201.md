# CyberSource.AgentRegistrationResponse201

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique agent identifier (64-char SHA-256 hash of domain + email + tokenRequestorId) | 
**name** | **String** | Display name for the agent | 
**domain** | **String** | Fully-qualified HTTPS URL of the agent's home domain | 
**description** | **String** | Description of the agent's purpose or capabilities | [optional] 
**contactEmail** | **String** | Contact email for the team or individual responsible for this agent | [optional] 
**tokenRequestorId** | **String** | Token Requestor ID (TRID) assigned by Visa, shared with the parent trusted agent for OSAs | 
**agentType** | **String** | Agent classification: 'trusted' (commercially onboarded via Visa) or 'known' (open-source/community agent, unverified)  Possible values: - trusted - known | 
**agentMetadata** | **Object** | Free-form metadata object for agent context (e.g., AI framework, language, runtime). Max 10KB. | [optional] 
**isActive** | **Boolean** | Whether the agent is currently active. Deactivated agents cannot add or activate keys. | 
**createdAt** | **Date** | ISO 8601 UTC timestamp when the agent was registered | 
**updatedAt** | **Date** | ISO 8601 UTC timestamp when the agent was last updated | 
**keys** | [**[AgentRegistrationResponse201Keys]**](AgentRegistrationResponse201Keys.md) | List of public keys associated with the agent (both active and deactivated) | [optional] 


