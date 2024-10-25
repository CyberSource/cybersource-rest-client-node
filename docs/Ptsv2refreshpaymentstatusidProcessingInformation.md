# CyberSource.Ptsv2refreshpaymentstatusidProcessingInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actionList** | **[String]** | Array of actions (one or more) to be included in the payment to invoke bundled services along with payment status.  Possible values are one or more of follows:   - `AP_STATUS`: Use this when Alternative Payment check status service is requested.   - `AP_SESSION_STATUS`: Use this when Alternative Payment check status service for Paypal, Klarna is requested.   - `AP_INITIATE_STATUS`: Use this when Alternative Payment check status service for KCP is requested.   - `AP_ORDER_STATUS`: Use this when Alternative Payment check status service for order status request.   - `AP_AUTH_STATUS`: Use this when Alternative Payment check status service for auth status request.   - `AP_CAPTURE_STATUS`: Use this when Alternative Payment check status service for capture status request.   - `AP_REFUND_STATUS`: Use this when Alternative Payment check status service for refund status request.  | [optional] 


