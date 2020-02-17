# CyberSource.TssV2TransactionsGet200ResponseFraudMarkingInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | Reason for adding the transaction to the negative list. This field can contain one of the following values: - fraud_chargeback: You have received a fraudrelated chargeback for the transaction. - non_fraud_chargeback: You have received a non-fraudulent chargeback for the transaction. - suspected: You believe that you will probably receive a chargeback for the transaction. - creditback: You issued a refund to the customer to avoid a chargeback for the transaction.  For details, see the &#x60;marking_reason&#x60; field description in _Decision Manager Using the SCMP API Developer Guide_ on the [CyberSource Business Center.](https://ebc2.cybersource.com/ebc2/) Click **Decision Manager** &gt; **Documentation** &gt; **Guides** &gt; _Decision Manager Using the SCMP API Developer Guide_ (PDF link).  | [optional] 


