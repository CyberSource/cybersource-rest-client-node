# CyberSource.Ptsv2paymentsProcessingInformationCaptureOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**captureSequenceNumber** | **Number** | Capture number when requesting multiple partial captures for one authorization. Used along with &#x60;totalCaptureCount&#x60; to track which capture is being processed.  For example, the second of five captures would be passed to CyberSource as:   - &#x60;captureSequenceNumber_ &#x3D; 2&#x60;, and   - &#x60;totalCaptureCount &#x3D; 5&#x60;  | [optional] 
**totalCaptureCount** | **Number** | Total number of captures when requesting multiple partial captures for one payment. Used along with &#x60;captureSequenceNumber&#x60; field to track which capture is being processed.  For example, the second of five captures would be passed to CyberSource as:   - &#x60;captureSequenceNumber &#x3D; 2&#x60;, and   - &#x60;totalCaptureCount &#x3D; 5&#x60;  | [optional] 
**dateToCapture** | **String** | Date on which you want the capture to occur. This field is supported only for CyberSource through VisaNet. Format: &#x60;MMDD&#x60;  #### Used by **Authorization** Optional field.  | [optional] 


