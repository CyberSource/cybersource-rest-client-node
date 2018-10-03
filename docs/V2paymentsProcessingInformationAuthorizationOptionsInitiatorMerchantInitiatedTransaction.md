# CyberSource.V2paymentsProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **String** | Reason for the merchant-initiated transaction. Possible values:   - **1**: Resubmission  - **2**: Delayed charge  - **3**: Reauthorization for split shipment  - **4**: No show  - **5**: Account top up  This field is not required for installment payments or recurring payments or when _reAuth.first_ is true. It is required for all other merchant-initiated transactions. This field is supported only for Visa transactions on CyberSource through VisaNet.  | [optional] 
**previousTransactionId** | **String** | Transaction identifier that was returned in the payment response field _processorInformation.transactionID_ in the reply message for either the original merchant initiated payment in the series or the previous merchant-initiated payment in the series. &lt;p/&gt; If the current payment request includes a token instead of an account number, the following time limits apply for the value of this field:  For a **resubmission**, the transaction ID must be less than 14 days old.  For a **delayed charge** or **reauthorization**, the transaction ID must be less than 30 days old.  The value for this field does not correspond to any data in the TC 33 capture file. This field is supported only for Visa transactions on CyberSource through VisaNet.  | [optional] 


