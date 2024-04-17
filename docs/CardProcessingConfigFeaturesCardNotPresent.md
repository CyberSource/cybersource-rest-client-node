# CyberSource.CardProcessingConfigFeaturesCardNotPresent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**processors** | [**{String: CardProcessingConfigFeaturesCardNotPresentProcessors}**](CardProcessingConfigFeaturesCardNotPresentProcessors.md) | e.g. * amexdirect * barclays2 * CUP * EFTPOS * fdiglobal * gpx * smartfdc * tsys * vero * VPC  For VPC, CUP and EFTPOS processors, replace the processor name from VPC or CUP or EFTPOS to the actual processor name in the sample request. e.g. replace VPC with &lt;your vpc processor&gt;  | [optional] 
**ignoreAddressVerificationSystem** | **Boolean** | Flag for a sale request that indicates whether to allow the capture service to run even when the authorization receives an AVS decline. Applicable for VPC, FDI Global (fdiglobal), GPX (gpx) and GPN (gpn) processors. | [optional] 
**visaStraightThroughProcessingOnly** | **Boolean** | Indicates if a merchant is enabled for Straight Through Processing - B2B invoice payments. Applicable for FDI Global (fdiglobal), TSYS (tsys), VPC and GPX (gpx) processors. | [optional] 
**amexTransactionAdviceAddendum1** | **String** | Advice addendum field. It is used to display descriptive information about a transaction on customer's American Express card statement. Applicable for TSYS (tsys), FDI Global (fdiglobal) and American Express Direct (amexdirect) processors. | [optional] 
**installment** | [**CardProcessingConfigFeaturesCardNotPresentInstallment**](CardProcessingConfigFeaturesCardNotPresentInstallment.md) |  | [optional] 


