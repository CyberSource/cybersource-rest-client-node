# CyberSource.RiskV1AuthenticationExemptionsPost201ResponseConsumerAuthenticationInformationStrongAuthentication

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquirerReferenceFraudRateThresholdExceeded** | **Boolean** | Indicates if the Acquirer has exceeded the RFR for 180 consecutive days. (E.g. “true” if has exceeded, “false” otherwise).  | [optional] 
**issuerReferenceFraudRateThresholdExceeded** | **Boolean** | Indicates if the Issuer has exceeded the RFR for 180 consecutive days. (E.g. “True” if has exceeded, “False” otherwise).  | [optional] 
**issuerReferenceFraudRateExceeded** | **Boolean** | Indicates if the Issuer’s RFR exceeds the allowable level based on the amount in the request (E.g. “true” if has exceeded, “false” otherwise).  | [optional] 
**totalAmountValueExceeded** | **Boolean** | Indicates if the request amount has exceeded the maximum ETV rate. (E.g. “true” if exceeded, “false” otherwise).  | [optional] 
**eeaDomesticInd** | **Boolean** | Indicates if the input qualifies as an EEA domestic transaction where both the Acquirer Country and Issuer Country are located in the EEA. (E.g. “1” if transaction qualifies, “0” otherwise).  | [optional] 
**acquirerReferenceFraudRateExceeded** | **Boolean** | Indicates if the Acquirer’s Reference Fraud Rate (RFR) exceeds the allowable level based on the amount in the request (E.g. “True” if has exceeded, “False” otherwise).  | [optional] 
**riskAttributesPresent** | **Boolean** | Risk Attribute Indicator based on required elements from Articles 2 &amp; 18 of the European Banking Authority (EBA) Guidelines (E.g. “True” if risk attributes present, “False” otherwise).  | [optional] 
**authenticationExemptionsId** | **String** | CYBS generated UUID used to identify the transaction. Note: 36 with hashes.  | [optional] 


