# CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationRouting

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **String** | PIN Debit Services: Contains the ID of the debit network to which the transaction was routed.  | Code | Network | | --- | --- | | 0000 | Priority Routing or Generic File Update | | 0002 | Visa programs, Private Label and non-Visa Authorization Gateway Services | | 0003 | Interlink | | 0004 | Plus | | 0008 | Star | | 0009 | Pulse| | 0010 | Star | | 0011 | Star | | 0012 | Star (primary network ID) | | 0013 | AFFN | | 0015 | Star | | 0016 | Maestro | | 0017 | Pulse (primary network ID) | | 0018 | NYCE (primary network ID) | | 0019 | Pulse | | 0020 | Accel | | 0023 | NETS | | 0024 | CU24 | | 0025 | Alaska Option | | 0027 | NYCE | | 0028 | Shazam | | 0029 | EBT POS |  FDC Nashville Global authorization service:  Indicates whether the transaction was routed to a credit network, a debit network, or the STAR signature debit network. - &#x60;C&#x60;: Credit network - &#x60;D&#x60;: Debit network (without signature) - &#x60;S&#x60;: STAR signature debit network  | [optional] 
**networkName** | **String** | Name of the network to which the transaction was routed.  | [optional] 
**customerSignatureRequired** | **String** | Indicates whether you need to obtain the cardholder&#39;s signature.  Possible values: - &#x60;Y&#x60;: You need to obtain the cardholder&#39;s signature. - &#x60;N&#x60;: You do not need to obtain the cardholder&#39;s signature.  | [optional] 


