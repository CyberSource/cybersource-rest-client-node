# CyberSource.PtsV2PaymentsPost201ResponseProcessingInformationAuthorizationOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serviceType** | **String** | Field is used for back-to-back funding transaction and can be defined as a payment flow that automatically transfers funds through a real-time  funding or a live-load. This type of transaction can also be connected to a purchase.  In back-to-back funding of general purpose card that is used to make a purchase, two separate accounts are involved:  - account one is used to make the purchase - account two is used to automatically fund or reimburse account one  Possible values: - 0B = back to back funding transaction - 00 = normal transaction - 01 = originator hold - 02 = Visa deferred OCT hold, default interval - 03 = Visa deferred OCT hold, user-defined interval - 09 = Cancel pending deferred OCT request - 0I = Visa Direct custom program 1 - 0Q = uery the status of the deferred OCT - A0 = Alias Directory 2  | [optional] 


