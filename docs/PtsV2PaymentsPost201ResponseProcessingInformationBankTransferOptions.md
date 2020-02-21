# CyberSource.PtsV2PaymentsPost201ResponseProcessingInformationBankTransferOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settlementMethod** | **String** | Method used for settlement.  Possible values: - &#x60;A&#x60;: Automated Clearing House (default for credits and for transactions using Canadian dollars) - &#x60;F&#x60;: Facsimile draft (U.S. dollars only) - &#x60;B&#x60;: Best possible (U.S. dollars only) (default if the field has not already been configured for your merchant ID)  For details, see &#x60;ecp_settlement_method&#x60; field description for credit cars and &#x60;ecp_debit_settlement_method&#x60; for debit cards in the [Electronic Check Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/EChecks_SCMP_API/html/)  | [optional] 
**fraudScreeningLevel** | **String** | Level of fraud screening.  Possible values: - &#x60;1&#x60;: Validation — default if the field has not already been configured for your merchant ID - &#x60;2&#x60;: Verification  For a description of this feature and a list of supported processors, see \&quot;Verification and Validation\&quot; in the [Electronic Check Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/EChecks_SCMP_API/html/).  | [optional] 


