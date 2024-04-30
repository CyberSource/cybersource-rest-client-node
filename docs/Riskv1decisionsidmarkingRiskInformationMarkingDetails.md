# CyberSource.Riskv1decisionsidmarkingRiskInformationMarkingDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notes** | **String** | Notes or details that explain the reasons for marking the transaction as suspect or otherwise. | [optional] 
**reason** | **String** | Reason for marking the transaction as suspect or otherwise. This field can contain one of the following values: - `fraud_chargeback:` You have received a fraud-related chargeback for the transaction. - `non_fraud_chargeback:` You have received a non-fraudulent chargeback for the transaction. - `suspected:` You believe that you will probably receive a chargeback for the transaction. - `creditback:` You issued a refund to the customer to avoid a chargeback for the transaction.  | [optional] 
**fieldsIncluded** | **[String]** | This field can contain one or more of the following values. When you specify more than one value, separate them with commas (,). - `account_key_hash` - `customer_account_id` - `customer_email` - `customer_ipaddress` - `customer_phone` - `device_fingerprint` - `ship_address` If no value is specified, `account_key_hash`, `customer_email`, and `ship_address` are used by default. Note `account_key_hash` adds the field that contains the card number (`customer_cc_number`).  | [optional] 
**action** | **String** | This field can contain one of the following values: - add: Mark as Suspect. - clear: Clear Mark as Suspect. - hide: Remove from history.  | [optional] 


