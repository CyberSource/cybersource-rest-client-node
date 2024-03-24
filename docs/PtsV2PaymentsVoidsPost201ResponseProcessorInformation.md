# CyberSource.PtsV2PaymentsVoidsPost201ResponseProcessorInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responseCode** | **String** | For most processors, this is the error message sent directly from the bank. Returned only when the processor returns this value.  **Important** Do not use this field to evaluate the result of the authorization.  #### PIN debit Response value that is returned by the processor or bank. **Important** Do not use this field to evaluate the results of the transaction request.  Returned by PIN debit credit, PIN debit purchase, and PIN debit reversal.  #### AIBMS If this value is &#x60;08&#x60;, you can accept the transaction if the customer provides you with identification.  #### Atos This value is the response code sent from Atos and it might also include the response code from the bank. Format: &#x60;aa,bb&#x60; with the two values separated by a comma and where: - &#x60;aa&#x60; is the two-digit error message from Atos. - &#x60;bb&#x60; is the optional two-digit error message from the bank.  #### Comercio Latino This value is the status code and the error or response code received from the processor separated by a colon. Format: [status code]:E[error code] or [status code]:R[response code] Example &#x60;2:R06&#x60;  #### JCN Gateway Processor-defined detail error code. The associated response category code is in the &#x60;processorInformation.responseCategoryCode&#x60; field. String (3)  | [optional] 
**responseDetails** | **String** | The reason for when the transaction status is Pending or Reversed. Possible values: - &#x60;PAYER_SHIPPING_UNCONFIRMED&#x60; - &#x60;MULTI_CURRENCY&#x60; - &#x60;RISK_REVIEW&#x60; - &#x60;REGULATORY_REVIEW&#x60; - &#x60;VERIFICATION_REQUIRED&#x60; - &#x60;ORDER&#x60; - &#x60;OTHER&#x60;  | [optional] 
**transactionId** | **String** | Identifier of the order transaction.  | [optional] 


