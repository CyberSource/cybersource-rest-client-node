# CyberSource.Ptsv2paymentsConsumerAuthenticationInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cavv** | **String** | Cardholder authentication verification value (CAVV). | [optional] 
**cavvAlgorithm** | **String** | Algorithm used to generate the CAVV for Visa Secure or the UCAF authentication data for Mastercard Identity Check.  | [optional] 
**eciRaw** | **String** | Raw electronic commerce indicator (ECI). For the description and requirements, see \&quot;Payer Authentication,\&quot; page 180. | [optional] 
**paresStatus** | **String** | Payer authentication response status. For the description and requirements, see \&quot;Payer Authentication,\&quot; page 180.  | [optional] 
**veresEnrolled** | **String** | Verification response enrollment status. For the description and requirements, see \&quot;Payer Authentication,\&quot; page 180. | [optional] 
**xid** | **String** | Transaction identifier. For the description and requirements, see \&quot;Payer Authentication,\&quot; page 180. | [optional] 
**ucafAuthenticationData** | **String** | Universal cardholder authentication field (UCAF) data.  For the description and requirements, see \&quot;Payer Authentication,\&quot; page 180.  | [optional] 
**ucafCollectionIndicator** | **String** | Universal cardholder authentication field (UCAF) collection indicator.  For the description and requirements, see \&quot;Payer Authentication,\&quot; page 180.  **CyberSource through VisaNet**\\ The value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP01 TCR7 - Position: 5 - Field: Mastercard Electronic Commerce Indicators—-UCAF Collection Indicator  | [optional] 


