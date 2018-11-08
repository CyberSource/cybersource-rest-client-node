# CyberSource.Ptsv2paymentsProcessingInformationAuthorizationOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authType** | **String** | Authorization type. Possible values:   - **AUTOCAPTURE**: automatic capture.  - **STANDARDCAPTURE**: standard capture.  - **VERBAL**: forced capture. Include it in the payment request for a forced capture. Include it in the capture  request for a verbal payment.  For processor-specific information, see the auth_type field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  | [optional] 
**verbalAuthCode** | **String** | Authorization code.  **Forced Capture**  Use this field to send the authorization code you received from a payment that you authorized outside the CyberSource system.  **Verbal Authorization**  Use this field in CAPTURE API to send the verbally received authorization code.  For processor-specific information, see the auth_code field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  | [optional] 
**verbalAuthTransactionId** | **String** | Transaction ID (TID). | [optional] 
**authIndicator** | **String** | Flag that specifies the purpose of the authorization.  Possible values:  - **0**: Preauthorization  - **1**: Final authorization  For processor-specific information, see the auth_indicator field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  | [optional] 
**partialAuthIndicator** | **Boolean** | Flag that indicates whether the transaction is enabled for partial authorization or not. When your request includes this field, this value overrides the information in your CyberSource account.  For processor-specific information, see the auth_partial_auth_indicator field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  | [optional] 
**balanceInquiry** | **Boolean** | Flag that indicates whether to return balance information. | [optional] 
**ignoreAvsResult** | **Boolean** | Flag that indicates whether to allow the capture service to run even when the payment receives an AVS decline.  | [optional] [default to false]
**declineAvsFlags** | **[String]** | An array of AVS flags that cause the reply flag to be returned.  &#x60;Important&#x60; To receive declines for the AVS code N, include the value N in the array.  | [optional] 
**ignoreCvResult** | **Boolean** | Flag that indicates whether to allow the capture service to run even when the payment receives a CVN decline.  | [optional] [default to false]
**initiator** | [**Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiator**](Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiator.md) |  | [optional] 


<a name="[DeclineAvsFlagsEnum]"></a>
## Enum: [DeclineAvsFlagsEnum]


* `D` (value: `"D"`)

* `A` (value: `"A"`)

* `V` (value: `"V"`)

* `S` (value: `"S"`)

* `N` (value: `"N"`)

* `O` (value: `"O"`)




