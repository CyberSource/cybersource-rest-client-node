# CyberSource.Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | Reason for the merchant-initiated transaction or incremental authorization. Possible values: - `1`: Resubmission - `2`: Delayed charge - `3`: Reauthorization for split shipment - `4`: No show - `5`: Account top up This field is required only for the five kinds of transactions in the preceding list. This field is supported only for merchant-initiated transactions and incremental authorizations.  #### CyberSource through VisaNet The value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP01 TCR0 - Position: 160-163 - Field: Message Reason Code  | [optional] 
**previousTransactionId** | **String** | Network transaction identifier that was returned in the payment response field _processorInformation.transactionID_ in the reply message for either the original merchant-initiated payment in the series or the previous merchant-initiated payment in the series.  If the current payment request includes a token instead of an account number, the following time limits apply for the value of this field: - For a **resubmission**, the transaction ID must be less than 14 days old. - For a **delayed charge** or **reauthorization**, the transaction ID must be less than 30 days old.  **NOTE**: The value for this field does not correspond to any data in the TC 33 capture file5. This field is supported only for Visa transactions on CyberSource through VisaNet.  | [optional] 
**originalAuthorizedAmount** | **String** | Amount of the original authorization.  This field is supported only for Apple Pay, Google Pay, and Samsung Pay transactions with Discover on FDC Nashville Global and Chase Paymentech.  | [optional] 


