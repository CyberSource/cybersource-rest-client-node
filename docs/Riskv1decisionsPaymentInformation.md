# CyberSource.Riskv1decisionsPaymentInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card** | [**Riskv1decisionsPaymentInformationCard**](Riskv1decisionsPaymentInformationCard.md) |  | [optional] 
**tokenizedCard** | [**Riskv1decisionsPaymentInformationTokenizedCard**](Riskv1decisionsPaymentInformationTokenizedCard.md) |  | [optional] 
**customer** | [**Ptsv2paymentsPaymentInformationCustomer**](Ptsv2paymentsPaymentInformationCustomer.md) |  | [optional] 
**bank** | [**Ptsv2paymentsPaymentInformationBank**](Ptsv2paymentsPaymentInformationBank.md) |  | [optional] 
**method** | **String** | Method of payment used for the order. This field can contain one of the following values:   - `consumer` (default): Customer credit card   - `corporate`: Corporate credit card   - `debit`: Debit card, such as a Maestro (UK Domestic) card   - `cod`: Collect on delivery   - `check`: Electronic check   - `p2p`: Person-to-person payment   - `private1`: Private label credit card   - `other`: Other payment method  | [optional] 


