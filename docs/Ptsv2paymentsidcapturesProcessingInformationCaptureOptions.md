# CyberSource.Ptsv2paymentsidcapturesProcessingInformationCaptureOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**captureSequenceNumber** | **Number** | Capture number when requesting multiple partial captures for one authorization. Used along with `totalCaptureCount` to track which capture is being processed.  For example, the second of five captures would be passed to CyberSource as:   - `captureSequenceNumber_ = 2`, and   - `totalCaptureCount = 5`  | [optional] 
**totalCaptureCount** | **Number** | Total number of captures when requesting multiple partial captures for one payment. Used along with `captureSequenceNumber` field to track which capture is being processed.  For example, the second of five captures would be passed to CyberSource as:   - `captureSequenceNumber = 2`, and   - `totalCaptureCount = 5`  | [optional] 
**isFinal** | **String** | Indicates whether to release the authorization hold on the remaining funds.   Possible Values: - `true` - `false`  | [optional] 


