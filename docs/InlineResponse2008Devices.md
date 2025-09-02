# CyberSource.InlineResponse2008Devices

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**readerId** | **String** |  | [optional] 
**serialNumber** | **String** |  | [optional] 
**model** | **String** |  | [optional] 
**make** | **String** |  | [optional] 
**hardwareRevision** | **String** |  | [optional] 
**status** | **String** | Status of the device. Possible Values:   - 'ACTIVE'   - 'INACTIVE'  | [optional] 
**statusChangeReason** | **String** | Reason for change in status. | [optional] 
**merchantId** | **String** | ID of the merchant to whom this device is assigned. | [optional] 
**accountId** | **String** | ID of the account to whom the device assigned. | [optional] 
**terminalCreationDate** | **Date** | Timestamp in which the device was created. | [optional] 
**terminalUpdationDate** | **Date** | Timestamp in which the device was updated/modified. | [optional] 
**paymentProcessorToTerminalMap** | [**InlineResponse2008PaymentProcessorToTerminalMap**](InlineResponse2008PaymentProcessorToTerminalMap.md) |  | [optional] 


