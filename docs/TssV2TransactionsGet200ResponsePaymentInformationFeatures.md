# CyberSource.TssV2TransactionsGet200ResponsePaymentInformationFeatures

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountFundingSource** | **String** | This field contains the account funding source. Possible values:   - `CREDIT`   - `DEBIT`   - `PREPAID`   - `DEFERRED DEBIT`   - `CHARGE`  | [optional] 
**accountFundingSourceSubType** | **String** | This field contains the type of prepaid card. Possible values:   - `Reloadable`   - `Non-reloadable`  | [optional] 
**cardProduct** | **String** | This field contains the type of issuer product. Example values:   - Visa Classic   - Visa Signature   - Visa Infinite  | [optional] 
**messageType** | **String** | This field contains the type of BIN based authentication. Possible values:   - `S`: Single Message   - `D`: Dual Message  | [optional] 
**acceptanceLevel** | **String** | This field contains the acceptance level of the PAN. Possible values:   - `0` : Normal   - `1` : Monitor   - `2` : Refuse   - `3` : Not Allowed   - `4` : Private   - `5` : Test  | [optional] 
**cardPlatform** | **String** | This field contains the type of card platform. Possible values:   - `BUSINESS`   - `CONSUMER`   - `COMMERCIAL`   - `GOVERNMENT`  | [optional] 
**comboCard** | **String** | This field indicates the type of combo card. Possible values:   - 0 (Not a combo card)   - 1 (Credit and Prepaid Combo card)   - 2 (Credit and Debit Combo card)  | [optional] 


