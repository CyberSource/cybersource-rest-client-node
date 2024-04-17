# CyberSource.Ptsv2creditsProcessingInformationBankTransferOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerMemo** | **String** | Payment related information.  This information is included on the customer's statement.  | [optional] 
**secCode** | **String** | Specifies the authorization method for the transaction.  #### TeleCheck Accepts only the following values: - `ARC`: account receivable conversion - `CCD`: corporate cash disbursement - `POP`: point of purchase conversion - `PPD`: prearranged payment and deposit entry - `TEL`: telephone-initiated entry - `WEB`: internet-initiated entry  For details, see `ecp_sec_code` field description in the [Electronic Check Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/EChecks_SCMP_API/html/)  | [optional] 
**terminalCity** | **String** | City in which the terminal is located. If more than four alphanumeric characters are submitted, the transaction will be declined.  You cannot include any special characters.  | [optional] 
**terminalState** | **String** | State in which the terminal is located. If more than two alphanumeric characters are submitted, the transaction will be declined.  You cannot include any special characters.  | [optional] 
**effectiveDate** | **String** | Effective date for the transaction. The effective date must be within 45 days of the current day. If you do not include this value, CyberSource sets the effective date to the next business day.  Format: `MMDDYYYY`  Supported only for the CyberSource ACH Service.  | [optional] 
**partialPaymentId** | **String** | Identifier for a partial payment or partial credit.  The value for each debit request or credit request must be unique within the scope of the order. For details, see `partial_payment_id` field description in the [Electronic Check Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/EChecks_SCMP_API/html/)  | [optional] 
**settlementMethod** | **String** | Method used for settlement.  Possible values: - `A`: Automated Clearing House (default for credits and for transactions using Canadian dollars) - `F`: Facsimile draft (U.S. dollars only) - `B`: Best possible (U.S. dollars only) (default if the field has not already been configured for your merchant ID)  For details, see `ecp_settlement_method` field description for credit cars and `ecp_debit_settlement_method` for debit cards in the [Electronic Check Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/EChecks_SCMP_API/html/)  | [optional] 


