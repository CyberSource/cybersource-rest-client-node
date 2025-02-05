# CyberSource.Ptsv2paymentsProcessingInformationCaptureOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**captureSequenceNumber** | **Number** | Capture number when requesting multiple partial captures for one authorization. Used along with `totalCaptureCount` to track which capture is being processed.  For example, the second of five captures would be passed to CyberSource as:   - `captureSequenceNumber_ = 2`, and   - `totalCaptureCount = 5`  | [optional] 
**totalCaptureCount** | **Number** | Total number of captures when requesting multiple partial captures for one payment. Used along with `captureSequenceNumber` field to track which capture is being processed.  For example, the second of five captures would be passed to CyberSource as:   - `captureSequenceNumber = 2`, and   - `totalCaptureCount = 5`  | [optional] 
**dateToCapture** | **String** | Date on which you want the capture to occur. This field is supported only for CyberSource through VisaNet. Format: `MMDD`  #### Used by **Authorization** Optional field.  | [optional] 
**isFinal** | **String** | Indicates whether to release the authorization hold on the remaining funds.   Possible Values: - `true` - `false`  | [optional] 
**notes** | **String** | An informational note about this settlement. Appears in both the payer's transaction history and the emails that the payer receives.  | [optional] 
**reconciliationId** | **String** | Used for authbill request when capture field equals true | [optional] 
**reconciliationIdAlternate** | **String** | Used by Nike merchant to send 12 digit order number | [optional] 


