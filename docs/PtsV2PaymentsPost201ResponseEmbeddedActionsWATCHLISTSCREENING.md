# CyberSource.PtsV2PaymentsPost201ResponseEmbeddedActionsWATCHLISTSCREENING

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The status for the call can be: - COMPLETED - INVALID_REQUEST - DECLINED  | [optional] 
**reason** | **String** | The reason of the status. Value can be   - `CUSTOMER_WATCHLIST_MATCH`   - `ADDRESS_COUNTRY_WATCHLIST_MATCH`   - `EMAIL_COUNTRY_WATCHLIST_MATCH`   - `IP_COUNTRY_WATCHLIST_MATCH`   - `INVALID_MERCHANT_CONFIGURATION`  | [optional] 
**message** | **String** | The message describing the reason of the status. Value can be   - The customer matched the Denied Parties List   - The Export bill_country/ship_country  match   - Export email_country match   - Export hostname_country/ip_country match  | [optional] 


