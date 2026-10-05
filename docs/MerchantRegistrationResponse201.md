# CyberSource.MerchantRegistrationResponse201

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique merchant identifier (UUID) | 
**merchantName** | **String** | Doing business as (DBA) name | 
**merchantUrl** | **String** | Fully-qualified HTTPS URL of the merchant's domain | 
**vmid** | **String** | Visa Merchant ID (VMID) — unique identifier assigned by Visa | [optional] 
**cryptogramType** | **String** | Authentication cryptogram type used for payment credential generation: 'TAVV' (Token Authentication Verification Value) or 'DAVV' (Device Authentication Verification Value)  Possible values: - TAVV - DAVV | [optional] 
**paymentPayloadType** | **String** | Credential delivery format: 'ENCRYPTED' (JWE-wrapped, requires an active encryption key) or 'UNENCRYPTED'  Possible values: - ENCRYPTED - UNENCRYPTED | [optional] 
**indicator** | **String** | Transaction processing indicator: 'TAP' (Trusted Agent Protocol), 'ACG' (Agentic Checkout Gateway), or 'BOTH'  Possible values: - TAP - ACG - BOTH | 
**merchantMetadata** | **Object** | Free-form metadata object for additional merchant context | [optional] 
**acceptanceRelationships** | **[String]** | List of payment network acceptance relationships (e.g., \"Visa\") | [optional] 
**protocolInteractions** | [**[Iccv1merchantsProtocolInteractions]**](Iccv1merchantsProtocolInteractions.md) | List of protocol endpoint configurations defining how agents interact with this merchant (ucp, acp, x402) | [optional] 
**webIntegrations** | [**MerchantRegistrationResponse201WebIntegrations**](MerchantRegistrationResponse201WebIntegrations.md) |  | [optional] 
**apiIntegrations** | [**MerchantRegistrationResponse201ApiIntegrations**](MerchantRegistrationResponse201ApiIntegrations.md) |  | [optional] 
**isActive** | **Boolean** | Whether the merchant is active | 
**createdAt** | **Date** | Creation timestamp | 
**updatedAt** | **Date** | Last update timestamp | 
**keys** | [**[MerchantRegistrationResponse201Keys]**](MerchantRegistrationResponse201Keys.md) | List of encryption keys associated with the merchant | [optional] 


