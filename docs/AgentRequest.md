# CyberSource.AgentRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Display name for the agent | 
**domain** | **String** | Fully-qualified HTTPS URL of the agent's home domain. Must be unique — registration raises 409 if it already exists. | 
**description** | **String** | Description of the agent's purpose or capabilities | 
**contactEmail** | **String** | Contact email for the team or individual responsible for this agent | 
**tokenRequestorId** | **String** | Token Requestor ID (TRID) assigned by Visa | 
**agentMetadata** | **Object** | Free-form metadata object for agent context (e.g., AI framework, language, runtime). Max 10KB. | [optional] 
**keys** | [**[Iccv1agentsKeys]**](Iccv1agentsKeys.md) | Optional array of public keys to register alongside the agent. Keys are created in ***deactivated*** state and must be activated separately via POST /agents/{agentId}/keys/{keyId}/activate.  | [optional] 


