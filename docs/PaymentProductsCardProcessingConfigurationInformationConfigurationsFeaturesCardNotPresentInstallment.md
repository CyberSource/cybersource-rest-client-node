# CyberSource.PaymentProductsCardProcessingConfigurationInformationConfigurationsFeaturesCardNotPresentInstallment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enableInstallment** | **Boolean** | This flag is to enable for installment plan programs. Applicable for Fiserv (fiserv), Vero (vero) and American Express Direct (amexdirect) processors.  Validation details (for selected processors)...  &lt;table&gt; &lt;thead&gt;&lt;tr&gt;&lt;th&gt;Processor&lt;/th&gt;&lt;th&gt;Acceptance Type&lt;/th&gt;&lt;th&gt;Required&lt;/th&gt;&lt;th&gt;Default Value&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt; &lt;tr&gt;&lt;td&gt;American Express Direct&lt;/td&gt;&lt;td&gt;cnp&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;/tr&gt; &lt;/table&gt;  | [optional] 
**installmentPlan** | **String** | This indicates the type of funding for the installment plan associated with the payment.  Valid values: \&quot;merchant\&quot; - Merchant-funded installment plan \&quot;issuer\&quot; - Issuer-funded installment plan  Applicable for Fiserv (fiserv), American Express Direct (amexdirect) and Vero (vero) processors.  Validation details (for selected processors)...  &lt;table&gt; &lt;thead&gt;&lt;tr&gt;&lt;th&gt;Processor&lt;/th&gt;&lt;th&gt;Acceptance Type&lt;/th&gt;&lt;th&gt;Required&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt; &lt;tr&gt;&lt;td&gt;American Express Direct&lt;/td&gt;&lt;td&gt;cnp&lt;/td&gt;&lt;td&gt;No&lt;/td&gt;&lt;/tr&gt; &lt;/table&gt;  | [optional] 


