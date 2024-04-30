# CyberSource.PtsV2PaymentsPost201ResponseWatchlistScreeningInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ipCountryConfidence** | **Number** | Likelihood that the country associated with the customer's IP address was identified correctly. Returns a value from 1–100, where 100 indicates the highest likelihood. If the country cannot be determined, the value is –1.  | [optional] 
**infoCodes** | **[String]** | Returned when the Denied Parties List check (first two codes) or the export service (all others) would have declined the transaction. This field can contain one or more of these values: - `MATCH-DPC`: Denied Parties List match. - `UNV-DPC`: Denied Parties List unavailable. - `MATCH-BCO`: Billing country restricted. - `MATCH-EMCO`: Email country restricted. - `MATCH-HCO`: Host name country restricted. - `MATCH-IPCO`: IP country restricted. - `MATCH-SCO`: Shipping country restricted.  | [optional] 
**watchList** | [**PtsV2PaymentsPost201ResponseWatchlistScreeningInformationWatchList**](PtsV2PaymentsPost201ResponseWatchlistScreeningInformationWatchList.md) |  | [optional] 


