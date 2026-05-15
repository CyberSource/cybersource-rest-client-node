# CyberSource.Ptsv2paymentsidcapturesProcessorInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | [**Ptsv2paymentsProcessorInformationReversalNetwork**](Ptsv2paymentsProcessorInformationReversalNetwork.md) |  | [optional] 
**responseSourceCode** | **String** | Field contains the response source code that identifies the source.  | [optional] 
**supplementaryTransactionData** | **String** | Supplementary transaction data for Klarna Advantage Plus. Fields to capture Interoperability Data from Merchant and transfer to Klarna for Authorization/Sale/Re-Auth/Capture APIs.  | [optional] 
**cedpVerifiedIndicator** | **String** | Merchant Commercial Enhanced Data Program (CEDP) verified indicator for capture/bill requests.  This field is used when the client is doing authorization with a different gateway and capture/settlement with CyberSource.  This field flows in ISO field 34, DSID 02 tag DA, in AN, EBCDIC format.  Possible values: - `Y`: Merchant CEDP verified  #### Used by **Capture Request** Request field for force capture/bill support when auth is done with a different gateway.  | [optional] 


