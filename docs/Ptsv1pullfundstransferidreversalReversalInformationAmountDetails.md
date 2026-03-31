# CyberSource.Ptsv1pullfundstransferidreversalReversalInformationAmountDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalAmount** | **String** | Length: <=12. Up to 3 decimal places.   Type: String, with a non-negative double format.  The total amount of the AFT reversal including all fees.   a. an amount that is <= the totalAmount of the original AFT   b. The amount of the transaction, inclusive of all fees assessed for the transaction, including currency conversion fees.       Minimum Value: Field must be greater than zero: minimum value is the smallest amount in any given currency.   c. Multiple successful reversals & refunds of the original AFT transaction are allowed but the sum of the transaction amounts must not total more than the original AFT totalAmount.  | 


