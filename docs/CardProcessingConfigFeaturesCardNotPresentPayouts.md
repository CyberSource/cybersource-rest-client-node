# CyberSource.CardProcessingConfigFeaturesCardNotPresentPayouts

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reimbursementCode** | **String** | Applicable for VPC processors. | [optional] 
**acquiringInstitutionId** | **String** | This code identifies the financial institution acting as the acquirer of this customer transaction. The acquirer is the member or system user that signed the merchant. This number is usually a Visa-assigned. Applicable for VPC processors. | [optional] 
**businessApplicationId** | **String** | Transaction type. List of supported identifiers documented in the Developer Guide. Applicable for GPX (gpx) and VPC processors. | [optional] 
**financialInstitutionId** | **String** | Applicable for GPX (gpx) and VPC processors. | [optional] 
**merchantAbaNumber** | **String** | Routing Number to identify banks within the United States. Applicable for VPC processors. | [optional] 
**networkOrder** | **String** | Order of the networks in which Visa should make routing decisions. Applicable for VPC processors. | [optional] 
**currencies** | [**{String: CardProcessingConfigFeaturesCardNotPresentPayoutsCurrencies}**](CardProcessingConfigFeaturesCardNotPresentPayoutsCurrencies.md) | Three-character [ISO 4217 ALPHA-3 Standard Currency Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf) | [optional] 
**merchantId** | **String** | Merchant ID assigned by an acquirer or a processor. Should not be overridden by any other party.  Validation details (for selected processors)...  <table> <thead><tr><th>Processor</th><th>Acceptance Type</th><th>Required</th><th>Min. Length</th><th>Max. Length</th><th>Regex</th></tr></thead> <tr><td>Barclays</td><td>cnp, hybrid</td><td>No</td><td>1</td><td>11</td><td>^[0-9]+$</td></tr> </table>  | [optional] 
**terminalId** | **String** | The 'Terminal Id' aka TID, is an identifier used for with your payments processor. Depending on the processor and payment acceptance type this may also be the default Terminal ID used for Card Present and Virtual Terminal transactions.  Validation details (for selected processors)...  <table> <thead><tr><th>Processor</th><th>Acceptance Type</th><th>Required</th><th>Min. Length</th><th>Max. Length</th><th>Regex</th></tr></thead> <tr><td>Barclays</td><td>cnp, hybrid</td><td>No</td><td>1</td><td>255</td><td>^[0-9:&#92;-]+$</td></tr> </table>  | [optional] 


