# CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsFeaturesCardPresentProcessors

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultPointOfSaleTerminalId** | **String** | Default Terminal ID used for Card Present and Virtual Terminal transactions. Applicable for VPC, GPX (gpx), American Express Direct (amexdirect) and Chase Paymentech Salem (chasepaymentechsalem) processors.  Validation details (for selected processors)...  &lt;table&gt; &lt;thead&gt;&lt;tr&gt;&lt;th&gt;Processor&lt;/th&gt;&lt;th&gt;Acceptance Type&lt;/th&gt;&lt;th&gt;Required&lt;/th&gt;&lt;th&gt;Min. Length&lt;/th&gt;&lt;th&gt;Max. Length&lt;/th&gt;&lt;th&gt;Regex&lt;/th&gt;&lt;th&gt;Default Value&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt; &lt;tr&gt;&lt;td&gt;American Express Direct&lt;/td&gt;&lt;td&gt;cp&lt;/td&gt;&lt;td&gt;Yes&lt;/td&gt;&lt;td&gt;4&lt;/td&gt;&lt;td&gt;8&lt;/td&gt;&lt;td&gt;^[0-9a-zA-Z]+$&lt;/td&gt;&lt;td&gt;1111&lt;/td&gt;&lt;/tr&gt; &lt;/table&gt;  | [optional] 
**pointOfSaleTerminalIds** | **[String]** | For retail transactions, if merchant chooses to send the terminal id in the API, then that value has to be validated before being used. Holds a comma separated list of all possible terminal ids that the merchant is likely to send. Applicable for VPC processors. | [optional] 
**disablePointOfSaleTerminalIdValidation** | **Boolean** | Disables terminal ID validation. Applicable for VPC processors. | [optional] 
**pinDebitNetworkOrder** | **String** | Order of the networks in which Visa should make routing decisions. Applicable for GPX (gpx) and VPC processors. | [optional] 
**pinDebitReimbursementCode** | **String** | This attribute requests VIP to qualify a given PIN Debit transaction for a certain type of interchange program. Y &#x3D; SMS supermarket, Z &#x3D; SMS general merchant. Applicable for GPX (gpx) and VPC processors. | [optional] 
**financialInstitutionId** | **String** | Acquirer Institution ID for the PIN Debit Transactions. Applicable for GPX (gpx) and VPC processors. | [optional] 
**enablePinTranslation** | **Boolean** | Enables CyberSource PIN Translation for Online PIN Transactions. Please ensure you have exchanged PIN keys with CyberSource to use this feature. Applicable for VPC processors. | [optional] 


