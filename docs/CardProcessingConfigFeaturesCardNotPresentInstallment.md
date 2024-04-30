# CyberSource.CardProcessingConfigFeaturesCardNotPresentInstallment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enableInstallment** | **Boolean** | This flag is to enable for installment plan programs. Applicable for Fiserv (fiserv), Vero (vero) and American Express Direct (amexdirect) processors.  Validation details (for selected processors)...  <table> <thead><tr><th>Processor</th><th>Acceptance Type</th><th>Required</th><th>Default Value</th></tr></thead> <tr><td>American Express Direct</td><td>cnp</td><td>No</td><td>No</td></tr> </table>  | [optional] 
**installmentPlan** | **String** | This indicates the type of funding for the installment plan associated with the payment.  Valid values: \"merchant\" - Merchant-funded installment plan \"issuer\" - Issuer-funded installment plan  Applicable for Fiserv (fiserv), American Express Direct (amexdirect) and Vero (vero) processors.  Validation details (for selected processors)...  <table> <thead><tr><th>Processor</th><th>Acceptance Type</th><th>Required</th></tr></thead> <tr><td>American Express Direct</td><td>cnp</td><td>No</td></tr> </table>  | [optional] 


