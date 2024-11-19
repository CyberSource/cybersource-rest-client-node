# CyberSource.Ptsv1pushfundstransferProcessingInformationPayoutsOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceCurrency** | **String** | Use a 3-character alpha currency code for source currency of the funds transfer.  Required if sending processingInformation.payoutsOptions.sourceAmount.  ISO standard currencies: http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf  | [optional] 
**destinationCurrency** | **String** | Use a 3-character alpha currency code for destination currency of the funds transfer.  Yellow Pepper  Supported for cross border funds transfers.  ISO standard currencies: http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf  | [optional] 
**sourceAmount** | **String** | Source Amount is required in certain markets to identify the transaction amount entered in the sender's currency code prior to FX conversion by the originating entity.  Format:  Minimum Value: 0  Maximum value: 999999999.99  Allowed fractional digits: 2  | [optional] 
**retrievalReferenceNumber** | **String** | Unique reference number returned by the processor that identifies the transaction at the network.  | [optional] 
**accountFundingReferenceId** | **String** | Visa-generated transaction identifier (TID) that is unique for each original authorization and financial request.  | [optional] 


