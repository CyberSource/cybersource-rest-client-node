# CyberSource.Ptsv2paymentsPaymentInformationSepaDirectDebit

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference** | **String** | Mandate reference as returned on the first transaction in the sequence  | [optional] 
**signatureDate** | **String** | Date of the initial transaction, format is YYYY-MM-DD. Date can be taken from the finaltimestamp of the SUCCEEDED notification for the first transaction in the sequence.  | [optional] 
**url** | **String** | Valid URL pointing to the SEPA mandate, needs to be accessible by our risk and compliance department.  | [optional] 
**type** | **String** | Sequence type of the direct debit, defaults to \"oneOff\". Valid values: oneOff The direct debit is executed once. first First direct debit in a series of recurring ones.  | [optional] 


