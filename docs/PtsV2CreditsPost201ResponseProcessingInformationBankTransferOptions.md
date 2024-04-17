# CyberSource.PtsV2CreditsPost201ResponseProcessingInformationBankTransferOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settlementMethod** | **String** | Method used for settlement.  Possible values: - `A`: Automated Clearing House (default for credits and for transactions using Canadian dollars) - `F`: Facsimile draft (U.S. dollars only) - `B`: Best possible (U.S. dollars only) (default if the field has not already been configured for your merchant ID)  For details, see `ecp_settlement_method` field description for credit cars and `ecp_debit_settlement_method` for debit cards in the [Electronic Check Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/EChecks_SCMP_API/html/)  | [optional] 


