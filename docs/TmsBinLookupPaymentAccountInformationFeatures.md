# CyberSource.TmsBinLookupPaymentAccountInformationFeatures

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountFundingSource** | **String** | This field contains the account funding source. Possible values:   - `CREDIT`   - `DEBIT`   - `PREPAID`   - `DEFERRED DEBIT`   - `CHARGE`  | [optional] 
**accountFundingSourceSubType** | **String** | This field contains the type of prepaid card. Possible values:   - `Reloadable`   - `Non-reloadable`  | [optional] 
**cardProduct** | **String** | This field contains the type of issuer product. Example values:   - Visa Classic   - Visa Signature   - Visa Infinite  | [optional] 
**messageType** | **String** | This field contains the type of BIN based authentication. Possible values:   - `S`: Single Message   - `D`: Dual Message  | [optional] 
**acceptanceLevel** | **String** | This field contains the acceptance level of the PAN. Possible values:   - `0` : Normal   - `1` : Monitor   - `2` : Refuse   - `3` : Not Allowed   - `4` : Private   - `5` : Test  | [optional] 
**cardPlatform** | **String** | This field contains the type of card platform. Possible values:   - `BUSINESS`   - `CONSUMER`   - `CORPORATE`   - `COMMERCIAL`   - `GOVERNMENT`  | [optional] 
**comboCard** | **String** | This field indicates the type of combo card. Possible values:   - 0 (Not a combo card)   - 1 (Credit and Prepaid Combo card)   - 2 (Credit and Debit Combo card)   - 3 (Prepaid Credit and Prepaid Debit combo card)  | [optional] 
**corporatePurchase** | **Boolean** | This field indicates if the instrument can be used for corporate purchasing. This field is only applicable for American Express cards. Possible values:   - `true`   - `false`  | [optional] 
**healthCard** | **Boolean** | This field indicates if the BIN is for healthcare (HSA/FSA). Currently, this field is only supported for Visa BINs. Possible values:     - `true`     - `false`  | [optional] 
**sharedBIN** | **Boolean** | This field indicates if the BIN is shared by multiple issuers Possible values:     - `true`     - `false`  | [optional] 
**posDomesticOnly** | **Boolean** | This field indicates if the BIN is valid only for POS domestic usage. Possible values:     - `true`     - `false`  | [optional] 
**gamblingAllowed** | **Boolean** | This field indicates if gambling transactions are allowed on the BIN. Possible values:     - `true`     - `false`  | [optional] 
**commercialCardLevel2** | **Boolean** | This field indicates if a transaction on the instrument qualifies for level 2 interchange rates. Possible values:     - `true`     - `false`  | [optional] 
**commercialCardLevel3** | **Boolean** | This field indicates if a transaction on the instrument qualifies for level 3 interchange rates. Possible values:     - `true`     - `false`  | [optional] 
**exemptBIN** | **Boolean** | This field indicates if a transaction on the instrument qualifies for government exempt interchange fee. Possible values:     - `true`     - `false`  | [optional] 
**accountLevelManagement** | **Boolean** | This field indicates if the BIN participates in Account Level Management (ALM). Possible values:     - `true`     - `false`  | [optional] 
**onlineGamblingBlock** | **Boolean** | This field indicates if online gambling is blocked on the BIN. Possible values:     - `true`     - `false`  | [optional] 
**autoSubstantiation** | **Boolean** | This field indicates if auto-substantiation is enabled on the BIN. Possible values:     - `true`     - `false`  | [optional] 
**flexCredential** | **Boolean** | This field indicates if the instrument is a flex credential. Possible values:     - `true`     - `false`  | [optional] 


