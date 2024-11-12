# CyberSource.Ptsv1pushfundstransferAggregatorInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregatorId** | **String** | Value that identifies you as a payment aggregator. Get this value from the processor.  | [optional] 
**name** | **String** | Your payment aggregator business name. This field is conditionally required when aggregator id is present.  | [optional] 
**independentSalesOrganizationID** | **String** | Independent sales organization ID. This field is only used for Mastercard transactions submitted through PPGS.  | [optional] 
**subMerchant** | [**Ptsv1pushfundstransferAggregatorInformationSubMerchant**](Ptsv1pushfundstransferAggregatorInformationSubMerchant.md) |  | [optional] 


