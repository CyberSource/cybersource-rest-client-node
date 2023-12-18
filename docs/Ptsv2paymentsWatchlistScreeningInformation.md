# CyberSource.Ptsv2paymentsWatchlistScreeningInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressOperator** | **String** | Parts of the customer&#39;s information that must match with an entry in the DPL (denied parties list) before a match occurs. This field can contain one of the following values: - AND: (default) The customer&#39;s name or company and the customer&#39;s address must appear in the database. - OR: The customer&#39;s name must appear in the database. - IGNORE: You want the service to detect a match only of the customer&#39;s name or company but not of the address.  | [optional] 
**weights** | [**Ptsv2paymentsWatchlistScreeningInformationWeights**](Ptsv2paymentsWatchlistScreeningInformationWeights.md) |  | [optional] 
**sanctionLists** | **[String]** | Use this field to specify which list(s) you want checked with the request. The reply will include the list name as well as the response data. To check against multiple lists, enter multiple list codes separated by a caret (^). For more information, see \&quot;Restricted and Denied Parties List,\&quot; page 68.  | [optional] 
**proceedOnMatch** | **Boolean** | Indicates whether the transaction should proceed if there is a match. Possible values: - &#x60;true&#x60;: Transaction proceeds even when match is found in the Denied Parties List. The match is noted in the response. - &#x60;false&#x60;: Normal watchlist screening behavior occurs. (Transaction stops if a match to DPL occurs. Transaction proceeds if no match.)  | [optional] 


