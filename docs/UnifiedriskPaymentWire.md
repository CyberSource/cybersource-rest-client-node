# CyberSource.UnifiedriskPaymentWire

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addenda** | **String** | Additional payment information or remittance data appended to the wire transfer message for beneficiary reconciliation purposes | [optional] 
**agentToAgentMsg** | **String** | Free-text message transmitted between the originating and receiving financial agents for internal communication or compliance notes | [optional] 
**businessFunctionCode** | **String** | Fedwire Business Function Code indicating the specific type of wire transfer (e.g., BTR for bank transfer, FFR for fed funds returned) | [optional] 
**debtorToCreditorMsg** | **String** | Message from the payer to the payee providing remittance information, invoice references, or payment instructions | [optional] 
**imadInputCycleDate** | **Date** | Fedwire IMAD (Input Message Accountability Data) input cycle date in YYYYMMDD format, used to uniquely identify outgoing wire messages | [optional] 
**imadInputSequenceNumber** | **String** | Sequential number within the IMAD cycle identifying this specific wire message within the processing day | [optional] 
**imadInputSource** | **String** | Source identifier in the IMAD, typically the Federal Reserve district code and routing information of the originating institution | [optional] 
**ofacCheckCompletedFlag** | **String** | Indicates whether OFAC (Office of Foreign Assets Control) sanctions screening has been completed for this wire transfer. Required for regulatory compliance | [optional] 
**omadOutputCycleDate** | **Date** | Fedwire OMAD (Output Message Accountability Data) output cycle date, used to identify and track the received wire message at the destination institution | [optional] 
**omadOutputDate** | **Date** | Date component of the OMAD for the received wire, confirming the settlement date at the receiving institution | [optional] 
**omadOutputDestinationId** | **String** | Destination routing identifier in the OMAD, identifying the Federal Reserve office that delivered the wire message | [optional] 
**omadOutputSequencer** | **String** | Sequential output identifier in the OMAD, used for uniquely identifying wire messages at the receiving end | [optional] 
**omadOutputTime** | **Number** | Time component of the OMAD in HHMM format (24-hour), indicating when the wire was delivered to the receiving institution | [optional] 
**supervisorOverrideFlag** | **String** | Indicates whether a supervisor manually overrode a compliance hold or exception flag on this wire transfer. Overrides require audit logging | [optional] 


