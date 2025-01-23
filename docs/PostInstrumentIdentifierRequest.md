# CyberSource.PostInstrumentIdentifierRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**TmsEmbeddedInstrumentIdentifierLinks**](TmsEmbeddedInstrumentIdentifierLinks.md) |  | [optional] 
**id** | **String** | The Id of the Instrument Identifier Token.  | [optional] 
**_object** | **String** | The type.  Possible Values: - instrumentIdentifier  | [optional] 
**state** | **String** | Issuers state for the card number. Possible Values: - ACTIVE - CLOSED : The account has been closed.  | [optional] 
**type** | **String** | The type of Instrument Identifier. Possible Values: - enrollable card - enrollable token  | [optional] 
**tokenProvisioningInformation** | [**Ptsv2paymentsTokenInformationTokenProvisioningInformation**](Ptsv2paymentsTokenInformationTokenProvisioningInformation.md) |  | [optional] 
**card** | [**TmsEmbeddedInstrumentIdentifierCard**](TmsEmbeddedInstrumentIdentifierCard.md) |  | [optional] 
**bankAccount** | [**TmsEmbeddedInstrumentIdentifierBankAccount**](TmsEmbeddedInstrumentIdentifierBankAccount.md) |  | [optional] 
**tokenizedCard** | [**Tmsv2TokenizedCard**](Tmsv2TokenizedCard.md) |  | [optional] 
**issuer** | [**TmsEmbeddedInstrumentIdentifierIssuer**](TmsEmbeddedInstrumentIdentifierIssuer.md) |  | [optional] 
**processingInformation** | [**TmsEmbeddedInstrumentIdentifierProcessingInformation**](TmsEmbeddedInstrumentIdentifierProcessingInformation.md) |  | [optional] 
**billTo** | [**TmsEmbeddedInstrumentIdentifierBillTo**](TmsEmbeddedInstrumentIdentifierBillTo.md) |  | [optional] 
**metadata** | [**TmsEmbeddedInstrumentIdentifierMetadata**](TmsEmbeddedInstrumentIdentifierMetadata.md) |  | [optional] 
**embedded** | [**TmsEmbeddedInstrumentIdentifierEmbedded**](TmsEmbeddedInstrumentIdentifierEmbedded.md) |  | [optional] 


