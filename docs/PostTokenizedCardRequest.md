# CyberSource.PostTokenizedCardRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountReferenceId** | **String** | An identifier provided by the issuer for the account. **Required when source is ISSUER.**  | [optional] 
**consumerId** | **String** | Identifier of the consumer within the wallet. Maximum 24 characters for VTS. | [optional] 
**createPanInstrumentIdentifier** | **Boolean** | Specifies whether the Instrument Identifier should be created (true) or not (false) with the PAN provided for the Network Token Provision request. Possible Values: - `true`: The InstrumentIdentifier should be created. - `false`: The InstrumentIdentifier should not be created.  | [optional] 
**source** | **String** | Source of the card details. Possible Values: - ONFILE - TOKEN - ISSUER  | 
**card** | [**Tmsv2tokenizedcardsCard**](Tmsv2tokenizedcardsCard.md) |  | [optional] 
**passcode** | [**Tmsv2tokenizedcardsPasscode**](Tmsv2tokenizedcardsPasscode.md) |  | [optional] 


