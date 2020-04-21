# CyberSource.Riskv1decisionsidmarkingRiskInformationMarkingDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notes** | **String** | Notes or details that explain the reasons for marking the transaction as suspect or otherwise. | [optional] 
**reason** | **String** | Reason for marking the transaction as suspect or otherwise. This field can contain one of the following values: - &#x60;fraud_chargeback:&#x60; You have received a fraud-related chargeback for the transaction. - &#x60;non_fraud_chargeback:&#x60; You have received a non-fraudulent chargeback for the transaction. - &#x60;suspected:&#x60; You believe that you will probably receive a chargeback for the transaction. - &#x60;creditback:&#x60; You issued a refund to the customer to avoid a chargeback for the transaction.  | [optional] 
**fieldsIncluded** | **[String]** | This field can contain one or more of the following values. When you specify more than one value, separate them with commas (,). - &#x60;account_key_hash&#x60; - &#x60;customer_account_id&#x60; - &#x60;customer_email&#x60; - &#x60;customer_ipaddress&#x60; - &#x60;customer_phone&#x60; - &#x60;device_fingerprint&#x60; - &#x60;ship_address&#x60; If no value is specified, &#x60;account_key_hash&#x60;, &#x60;customer_email&#x60;, and &#x60;ship_address&#x60; are used by default. Note &#x60;account_key_hash&#x60; adds the field that contains the card number (&#x60;customer_cc_number&#x60;).  | [optional] 
**action** | **String** | This field can contain one of the following values: - add: Mark as Suspect. - clear: Clear Mark as Suspect. - hide: Remove from history.  | [optional] 


