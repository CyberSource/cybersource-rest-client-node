# CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationRouting

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **String** | Indicates whether the transaction was routed on a credit network, a debit network, or the STAR signature debit network.  Possible values: - C: Credit network - D: Debit network (without signature) - S: STAR signature debit network  This field is supported only on FDC Nashville Global.  | [optional] 
**networkName** | **String** | Name of the network on which the transaction was routed.  This field is supported only on FDC Nashville Global.  | [optional] 
**customerSignatureRequired** | **String** | Indicates whether you need to obtain the cardholder&#39;s signature.  Possible values: - Y: You need to obtain the cardholder&#39;s signature. - N: You do not need to obtain the cardholder&#39;s signature.  This field is supported only on FDC Nashville Global.  | [optional] 


