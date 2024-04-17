# CyberSource.CardProcessingConfigFeaturesCardPresentProcessors

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultPointOfSaleTerminalId** | **String** | Default Terminal ID used for Card Present and Virtual Terminal transactions. Applicable for VPC, GPX (gpx), American Express Direct (amexdirect) and Chase Paymentech Salem (chasepaymentechsalem) processors.  Validation details (for selected processors)...  <table> <thead><tr><th>Processor</th><th>Acceptance Type</th><th>Required</th><th>Min. Length</th><th>Max. Length</th><th>Regex</th><th>Default Value</th></tr></thead> <tr><td>American Express Direct</td><td>cp</td><td>Yes</td><td>4</td><td>8</td><td>^[0-9a-zA-Z]+$</td><td>1111</td></tr> </table>  | [optional] 
**pointOfSaleTerminalIds** | **[String]** | For retail transactions, if merchant chooses to send the terminal id in the API, then that value has to be validated before being used. Holds a comma separated list of all possible terminal ids that the merchant is likely to send. Applicable for VPC processors. | [optional] 
**disablePointOfSaleTerminalIdValidation** | **Boolean** | Disables terminal ID validation. Applicable for VPC processors. | [optional] 
**pinDebitNetworkOrder** | **String** | Order of the networks in which Visa should make routing decisions. Applicable for GPX (gpx) and VPC processors. | [optional] 
**pinDebitReimbursementCode** | **String** | This attribute requests VIP to qualify a given PIN Debit transaction for a certain type of interchange program. Y = SMS supermarket, Z = SMS general merchant. Applicable for GPX (gpx) and VPC processors. | [optional] 
**financialInstitutionId** | **String** | Acquirer Institution ID for the PIN Debit Transactions. Applicable for GPX (gpx) and VPC processors. | [optional] 
**enablePinTranslation** | **Boolean** | Enables CyberSource PIN Translation for Online PIN Transactions. Please ensure you have exchanged PIN keys with CyberSource to use this feature. Applicable for VPC processors. | [optional] 


