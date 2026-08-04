# CyberSource.InlineResponse20019

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | Overall ingestion result: - `success` — all products were validated and saved - `partial_success` — some products failed validation; `errors` lists the failures - `failed` — no products were saved; check `errors` for details   Possible values: - success - partial_success - failed | [optional] 
**feedId** | **String** | Unique identifier for this feed ingestion job. Use this with the Syndication Status endpoint to monitor the asynchronous protocol sync progress (e.g. to Google Merchant Center).  | [optional] 
**totalSubmitted** | **Number** | Total number of product records in the submitted feed. | [optional] 
**successCount** | **Number** | Number of products that passed validation and were saved to the catalog. | [optional] 
**failedCount** | **Number** | Number of products that failed validation and were not saved. | [optional] 
**errors** | [**[InlineResponse20019Errors]**](InlineResponse20019Errors.md) | Per-product validation errors for products that failed ingestion. Each entry identifies the product, the specific field that failed, and the reason. `null` when `failed_count` is zero.  | [optional] 
**ingestedAt** | **Date** | ISO 8601 timestamp when the ingestion completed. | [optional] 
**forwardedToAgent** | **Boolean** | Indicates whether the ingested products were scheduled for syndication to the configured AI agent endpoint. Set to `true` when at least one product was successfully saved. Note: syndication is asynchronous — this field confirms the dispatch was initiated, not that the agent received the data.  | [optional] 
**agentEndpoint** | **String** | The AI agent endpoint URL that the products were forwarded to. Present when `forwarded_to_agent` is `true`.  | [optional] 
**forwardedToUcpAgent** | **Boolean** | Indicates whether the ingested products were scheduled for syndication to the UCP (Unified Commerce Platform) agent. Set to `true` when UCP syndication is enabled and at least one product was successfully saved.  | [optional] 
**googleMerchant** | [**InlineResponse20019GoogleMerchant**](InlineResponse20019GoogleMerchant.md) |  | [optional] 


