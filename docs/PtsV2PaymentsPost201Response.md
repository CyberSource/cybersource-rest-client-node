# CyberSource.PtsV2PaymentsPost201Response

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PtsV2PaymentsPost201ResponseLinks**](PtsV2PaymentsPost201ResponseLinks.md) |  | [optional] 
**id** | **String** | An unique identification number to identify the submitted request. It is also appended to the endpoint of the resource.  On incremental authorizations, this value with be the same as the identification number returned in the original authorization response.  #### PIN debit Returned for all PIN debit services.  | [optional] 
**submitTimeUtc** | **String** | Time of request in UTC. Format: &#x60;YYYY-MM-DDThh:mm:ssZ&#x60; **Example** &#x60;2016-08-11T22:47:57Z&#x60; equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The &#x60;T&#x60; separates the date and the time. The &#x60;Z&#x60; indicates UTC.  Returned by authorization service.  #### PIN debit Time when the PIN debit credit, PIN debit purchase or PIN debit reversal was requested.  Returned by PIN debit credit, PIN debit purchase or PIN debit reversal.  | [optional] 
**status** | **String** | The status of the submitted transaction.  Possible values:  - AUTHORIZED  - PARTIAL_AUTHORIZED  - AUTHORIZED_PENDING_REVIEW  - AUTHORIZED_RISK_DECLINED  - PENDING_AUTHENTICATION  - PENDING_REVIEW  - DECLINED  - INVALID_REQUEST  | [optional] 
**reconciliationId** | **String** | Reference number for the transaction. This value is not returned for all processors.  Returned by authorization service.  ##### PIN debit Returned by PIN debit credit, PIN debit purchase, and PIN debit reversal.  #### Atos Positive string (6)  #### All other processors String (60)  | [optional] 
**errorInformation** | [**PtsV2PaymentsPost201ResponseErrorInformation**](PtsV2PaymentsPost201ResponseErrorInformation.md) |  | [optional] 
**clientReferenceInformation** | [**PtsV2PaymentsPost201ResponseClientReferenceInformation**](PtsV2PaymentsPost201ResponseClientReferenceInformation.md) |  | [optional] 
**processingInformation** | [**PtsV2PaymentsPost201ResponseProcessingInformation**](PtsV2PaymentsPost201ResponseProcessingInformation.md) |  | [optional] 
**processorInformation** | [**PtsV2PaymentsPost201ResponseProcessorInformation**](PtsV2PaymentsPost201ResponseProcessorInformation.md) |  | [optional] 
**issuerInformation** | [**PtsV2PaymentsPost201ResponseIssuerInformation**](PtsV2PaymentsPost201ResponseIssuerInformation.md) |  | [optional] 
**paymentAccountInformation** | [**PtsV2PaymentsPost201ResponsePaymentAccountInformation**](PtsV2PaymentsPost201ResponsePaymentAccountInformation.md) |  | [optional] 
**paymentInformation** | [**PtsV2PaymentsPost201ResponsePaymentInformation**](PtsV2PaymentsPost201ResponsePaymentInformation.md) |  | [optional] 
**orderInformation** | [**PtsV2PaymentsPost201ResponseOrderInformation**](PtsV2PaymentsPost201ResponseOrderInformation.md) |  | [optional] 
**pointOfSaleInformation** | [**PtsV2PaymentsPost201ResponsePointOfSaleInformation**](PtsV2PaymentsPost201ResponsePointOfSaleInformation.md) |  | [optional] 
**installmentInformation** | [**PtsV2PaymentsPost201ResponseInstallmentInformation**](PtsV2PaymentsPost201ResponseInstallmentInformation.md) |  | [optional] 
**tokenInformation** | [**PtsV2PaymentsPost201ResponseTokenInformation**](PtsV2PaymentsPost201ResponseTokenInformation.md) |  | [optional] 
**riskInformation** | [**PtsV2PaymentsPost201ResponseRiskInformation**](PtsV2PaymentsPost201ResponseRiskInformation.md) |  | [optional] 
**consumerAuthenticationInformation** | [**PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation**](PtsV2PaymentsPost201ResponseConsumerAuthenticationInformation.md) |  | [optional] 


