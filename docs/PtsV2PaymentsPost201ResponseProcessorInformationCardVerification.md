# CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationCardVerification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resultCode** | **String** | Result of card verification. Returned by the authorization service in the &#x60;processorInformation.cardVerification.resultCode&#x60; reply field. If ics_auth and ics_score are requested at the same time, the value is automatically passed from ics_auth to ics_score. For more information on using this field, see \&quot;\&quot;Sending the Results of Address and Card Verification Tests,\&quot;\&quot; page 16. The field contains one of the following values:   - &#x60;I&#x60;: Card verification number failed processor&#39;s data   validation check.   - &#x60;M&#x60;: Card verification number matched.   - &#x60;N&#x60;: Card verification number not matched.   - &#x60;P&#x60;: Card verification number not processed.   - &#x60;S&#x60;: Card verification number is on the card but was not included in the request.   - &#x60;U&#x60;: Card verification is not supported by the issuing bank.   - &#x60;X&#x60;: Card verification is not supported by the payment card company.   - Space Character: Deprecated. Ignore this value.   - &#x60;1&#x60;: CyberSource does not support card verification for this processor or card type.   - &#x60;2&#x60;: Processor returned value unrecognized for card verification response.   - &#x60;3&#x60;: Processor did not return card verification result code.  | [optional] 
**resultCodeRaw** | **String** | CVN result code sent directly from the processor. Returned only when the processor returns this value.  &#x60;Important&#x60; Do not use this field to evaluate the result of card verification. Use for debugging purposes only.  | [optional] 


