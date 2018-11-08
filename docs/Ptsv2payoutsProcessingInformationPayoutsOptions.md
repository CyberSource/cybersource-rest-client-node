# CyberSource.Ptsv2payoutsProcessingInformationPayoutsOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquirerMerchantId** | **String** | This field identifies the card acceptor for defining the point of service terminal in both local and interchange environments. An acquirer-assigned code identifying the card acceptor for the transaction.  Depending on the acquirer and merchant billing and reporting requirements, the code can represent a merchant, a specific merchant location, or a specific merchant location terminal. Acquiring Institution Identification Code uniquely identifies the merchant. The value from the original is required in any subsequent messages, including reversals, chargebacks, and representments. * Applicable only for CTV for Payouts.  | [optional] 
**acquirerBin** | **String** | This code identifies the financial institution acting as the acquirer of this customer transaction. The acquirer is the member or system user that signed the merchant or ADM or dispensed cash.  This number is usually Visa-assigned. * Applicable only for CTV for Payouts.  | [optional] 
**retrievalReferenceNumber** | **String** | This field contains a number that is used with other data elements as a key to identify and track all messages related to a given cardholder transaction; that is, to a given transaction set. * Applicable only for CTV for Payouts.  | [optional] 
**accountFundingReferenceId** | **String** | Visa-generated transaction identifier (TID) that is unique for each original authorization and financial request. * Applicable only for CTV for Payouts.  | [optional] 


