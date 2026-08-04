# CyberSource.MerchantUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantName** | **String** | Doing business as (DBA) name | [optional] 
**merchantUrl** | **String** | Base merchant URL (must use HTTPS) | [optional] 
**cryptogramType** | **String** | Authentication cryptogram type  Possible values: - TAVV - DAVV | [optional] 
**paymentPayloadType** | **String** | Credential delivery format  Possible values: - ENCRYPTED - UNENCRYPTED | [optional] 
**acceptanceRelationships** | **[String]** | List of acceptance network relationships | [optional] 
**protocolInteractions** | [**[Iccv1merchantsProtocolInteractions]**](Iccv1merchantsProtocolInteractions.md) | List of protocol configurations | [optional] 
**webIntegrations** | [**Iccv1merchantsWebIntegrations**](Iccv1merchantsWebIntegrations.md) |  | [optional] 
**apiIntegrations** | [**Iccv1merchantsApiIntegrations**](Iccv1merchantsApiIntegrations.md) |  | [optional] 


