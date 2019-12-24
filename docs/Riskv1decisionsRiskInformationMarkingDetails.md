# CyberSource.Riskv1decisionsRiskInformationMarkingDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notes** | **String** | Notes or details that explain the reasons for adding the transaction to either the positive or negative list. | [optional] 
**reason** | **String** | Reason for adding the transaction to the negative list. This field can contain one of the following values: - fraud_chargeback: You have received a fraud-related chargeback for the transaction. - non_fraud_chargeback: You have received a non-fraudulent chargeback for the transaction. - suspected: You believe that you will probably receive a chargeback for the transaction. - creditback: You issued a refund to the customer to avoid a chargeback for the transaction.  | [optional] 
**fieldsIncluded** | **String** | Adds specified transaction information to the negative list. This field can contain one or more of the following values. When you specify more than one value, separate them with commas (,). - account_key_hash - customer_account_id - customer_email - customer_ipaddress - customer_phone - device_fingerprint - ship_address If no value is specified, account_key_hash, customer_email, and ship_address are used by default. Note account_key_hash adds the field that contains the card number (customer_cc_number).  | [optional] 
**reportCode** | **String** | Indicates whether to add, clear, or remove order data from the fraud history. This field can contain one of the following values: - ST: Marking reason for suspected fraud transaction; same action as Mark as Suspect link in the Business Center - CB: Marking reason for chargeback; same action as Mark as Suspect link - CM: Clear suspected fraud marking reason; same action as Clear Mark as Suspect link - VT: Remove from history  | [optional] 


