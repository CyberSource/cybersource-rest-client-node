# CyberSource.PtsV2PaymentsPost201ResponseProcessingInformationBankTransferOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settlementMethod** | **String** | Method used for settlement.  Possible values: - `A`: Automated Clearing House (default for credits and for transactions using Canadian dollars) - `F`: Facsimile draft (U.S. dollars only) - `B`: Best possible (U.S. dollars only) (default if the field has not already been configured for your merchant ID)  | [optional] 
**fraudScreeningLevel** | **String** | Level of fraud screening.  Possible values: - `1`: Validation — default if the field has not already been configured for your merchant ID - `2`: Verification  | [optional] 


