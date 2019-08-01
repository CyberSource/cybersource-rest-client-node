# CyberSource.TssV2TransactionsPost201ResponseEmbeddedTransactionSummaries

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | An unique identification number assigned by CyberSource to identify the submitted request. It is also appended to the endpoint of the resource. | [optional] 
**submitTimeUtc** | **String** | Time of request in UTC. Format: &#x60;YYYY-MM-DDThh:mm:ssZ&#x60; Example &#x60;2016-08-11T22:47:57Z&#x60; equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The &#x60;T&#x60; separates the date and the time. The &#x60;Z&#x60; indicates UTC.  | [optional] 
**merchantId** | **String** | Your CyberSource merchant ID. | [optional] 
**applicationInformation** | [**TssV2TransactionsGet200ResponseApplicationInformation**](TssV2TransactionsGet200ResponseApplicationInformation.md) |  | [optional] 
**buyerInformation** | [**TssV2TransactionsPost201ResponseEmbeddedBuyerInformation**](TssV2TransactionsPost201ResponseEmbeddedBuyerInformation.md) |  | [optional] 
**clientReferenceInformation** | [**TssV2TransactionsPost201ResponseEmbeddedClientReferenceInformation**](TssV2TransactionsPost201ResponseEmbeddedClientReferenceInformation.md) |  | [optional] 
**consumerAuthenticationInformation** | [**TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation**](TssV2TransactionsPost201ResponseEmbeddedConsumerAuthenticationInformation.md) |  | [optional] 
**deviceInformation** | [**TssV2TransactionsPost201ResponseEmbeddedDeviceInformation**](TssV2TransactionsPost201ResponseEmbeddedDeviceInformation.md) |  | [optional] 
**fraudMarkingInformation** | [**TssV2TransactionsGet200ResponseFraudMarkingInformation**](TssV2TransactionsGet200ResponseFraudMarkingInformation.md) |  | [optional] 
**merchantDefinedInformation** | [**[Ptsv2paymentsMerchantDefinedInformation]**](Ptsv2paymentsMerchantDefinedInformation.md) | The object containing the custom data that the merchant defines.  | [optional] 
**merchantInformation** | [**TssV2TransactionsPost201ResponseEmbeddedMerchantInformation**](TssV2TransactionsPost201ResponseEmbeddedMerchantInformation.md) |  | [optional] 
**orderInformation** | [**TssV2TransactionsPost201ResponseEmbeddedOrderInformation**](TssV2TransactionsPost201ResponseEmbeddedOrderInformation.md) |  | [optional] 
**paymentInformation** | [**TssV2TransactionsPost201ResponseEmbeddedPaymentInformation**](TssV2TransactionsPost201ResponseEmbeddedPaymentInformation.md) |  | [optional] 
**processingInformation** | [**TssV2TransactionsPost201ResponseEmbeddedProcessingInformation**](TssV2TransactionsPost201ResponseEmbeddedProcessingInformation.md) |  | [optional] 
**processorInformation** | [**TssV2TransactionsPost201ResponseEmbeddedProcessorInformation**](TssV2TransactionsPost201ResponseEmbeddedProcessorInformation.md) |  | [optional] 
**pointOfSaleInformation** | [**TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation**](TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation.md) |  | [optional] 
**riskInformation** | [**TssV2TransactionsPost201ResponseEmbeddedRiskInformation**](TssV2TransactionsPost201ResponseEmbeddedRiskInformation.md) |  | [optional] 
**links** | [**TssV2TransactionsPost201ResponseEmbeddedLinks**](TssV2TransactionsPost201ResponseEmbeddedLinks.md) |  | [optional] 


