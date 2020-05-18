# CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationRouting

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **String** | Indicates whether the transaction was routed on a credit network, a debit network, or the STAR signature debit network.  Possible values: - &#x60;C&#x60;: Credit network - &#x60;D&#x60;: Debit network (without signature) - &#x60;S&#x60;: STAR signature debit network  This field is supported only on FDC Nashville Global.  | [optional] 
**networkName** | **String** | Name of the network on which the transaction was routed.  This reply field is supported only on FDC Nashville Global.  | [optional] 
**customerSignatureRequired** | **String** | Indicates whether you need to obtain the cardholder&#39;s signature.  Possible values: - &#x60;Y&#x60;: You need to obtain the cardholder&#39;s signature. - &#x60;N&#x60;: You do not need to obtain the cardholder&#39;s signature.  This field is supported only on FDC Nashville Global.  | [optional] 


