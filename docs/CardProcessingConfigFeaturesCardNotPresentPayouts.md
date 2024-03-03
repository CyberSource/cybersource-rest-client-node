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
**merchantId** | **String** | Merchant ID assigned by an acquirer or a processor. Should not be overridden by any other party.  Validation details (for selected processors)...  &lt;table&gt; &lt;thead&gt;&lt;tr&gt;&lt;th&gt;Processor&lt;/th&gt;&lt;th&gt;Acceptance Type&lt;/th&gt;&lt;th&gt;Required&lt;/th&gt;&lt;th&gt;Min. Length&lt;/th&gt;&lt;th&gt;Max. Length&lt;/th&gt;&lt;th&gt;Regex&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt; &lt;tr&gt;&lt;td&gt;Barclays&lt;/td&gt;&lt;td&gt;cnp, hybrid&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;11&lt;/td&gt;&lt;td&gt;^[0-9]+$&lt;/td&gt;&lt;/tr&gt; &lt;/table&gt;  | [optional] 
**terminalId** | **String** | The &#39;Terminal Id&#39; aka TID, is an identifier used for with your payments processor. Depending on the processor and payment acceptance type this may also be the default Terminal ID used for Card Present and Virtual Terminal transactions.  Validation details (for selected processors)...  &lt;table&gt; &lt;thead&gt;&lt;tr&gt;&lt;th&gt;Processor&lt;/th&gt;&lt;th&gt;Acceptance Type&lt;/th&gt;&lt;th&gt;Required&lt;/th&gt;&lt;th&gt;Min. Length&lt;/th&gt;&lt;th&gt;Max. Length&lt;/th&gt;&lt;th&gt;Regex&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt; &lt;tr&gt;&lt;td&gt;Barclays&lt;/td&gt;&lt;td&gt;cnp, hybrid&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;255&lt;/td&gt;&lt;td&gt;^[0-9:&amp;#92;-]+$&lt;/td&gt;&lt;/tr&gt; &lt;/table&gt;  | [optional] 


