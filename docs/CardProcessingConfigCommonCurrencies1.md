# CyberSource.CardProcessingConfigCommonCurrencies1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** |  | [optional] 
**enabledCardPresent** | **Boolean** | Indicates whether the card-present transaction is activated for the selected currency. If both enabledCardPresent and enabledCardNotPresent are set to null, then enabledCardPresent will have the value of enabled.  | [optional] 
**enabledCardNotPresent** | **Boolean** | Indicates whether the card-present transaction is activated for the selected currency. If both enabledCardPresent and enabledCardNotPresent are set to null, then enabledCardNotPresent will have the value of enabled.  | [optional] 
**merchantId** | **Object** | Merchant ID assigned by an acquirer or a processor. Should not be overriden by any other party.  Validation details (for selected processors)...  <table> <thead><tr><th>Processor</th><th>Acceptance Type</th><th>Required</th><th>Min. Length</th><th>Max. Length</th><th>Regex</th></tr></thead> <tr><td>Barclays</td><td>cp, cnp, hybrid</td><td>Yes</td><td>1</td><td>11</td><td>^[0-9a-zA-Z]+$</td></tr> </table>  | [optional] 
**terminalId** | **Object** | The 'Terminal Id' aka TID, is an identifier used for with your payments processor. Depending on the processor and payment acceptance type this may also be the default Terminal ID used for Card Present and Virtual Terminal transactions.  Validation details (for selected processors)...  <table> <thead><tr><th>Processor</th><th>Acceptance Type</th><th>Required</th><th>Min. Length</th><th>Max. Length</th><th>Regex</th></tr></thead> <tr><td>Barclays</td><td>cp, cnp, hybrid</td><td>Yes</td><td>8</td><td>8</td><td>^[0-9]+$</td></tr> </table>  | [optional] 
**terminalIds** | **[String]** | Applicable for Prisma (prisma) processor. | [optional] 
**serviceEnablementNumber** | **Object** | Service Establishment Number (a.k.a. SE Number) is a unique ten-digit number assigned by American Express to a merchant that accepts American Express cards. 10 digit number provided by acquirer currency. This may be unique for each currency, however it depends on the way the processor is set up for the merchant.  Validation details (for selected processors)...  <table> <thead><tr><th>Processor</th><th>Acceptance Type</th><th>Required</th><th>Min. Length</th><th>Max. Length</th><th>Regex</th></tr></thead> <tr><td>American Express Direct</td><td>cp, cnp, hybrid</td><td>Yes</td><td>10</td><td>10</td><td>^[0-9]+$</td></tr> </table>  | [optional] 


