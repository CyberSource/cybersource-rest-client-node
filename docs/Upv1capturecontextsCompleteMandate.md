# CyberSource.Upv1capturecontextsCompleteMandate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | This field is used to indicate how a payment should be processed.  Possible values: - AUTH: Use this value when you want to authorize a payment without capturing it immediately.  Payment types that initiate an immediate transfer of funds are not allowed.  If a capture context request includes a payment type incompatible with this mode, a 400 error will be returned.<br><br>   - CAPTURE: Use this value when you want to capture the payment immediately during the transaction.  Note: Some payment types may return a PENDING status, requiring an additional status check call to determine the final outcome of the payment.<br><br> - PREFER_AUTH: Use this value to offer multiple alternative payment options during the Unified Checkout experience. This option authorizes the payment without immediate capture, where available. Payment types like account-to-account transfers that initiate an immediate transfer of funds are allowed and presented to the customer. If selected, an immediate transfer of funds occurs; otherwise, a final backend call is needed to capture the payment. Transactions can be AUTHORIZED, CAPTURED, or PENDING.  | [optional] 
**decisionManager** | **Boolean** | Configure Unified Checkout to determine whether Decision Manager is invoked during service orchestration.  Possible values:  - True  - False<br><br>  Setting this value to True indicates that device fingerprinting will be executed to add additional information for risk service Setting this value to False indicates that you do not wish to run device fingerprinting and skip decision manager services.  | [optional] 


