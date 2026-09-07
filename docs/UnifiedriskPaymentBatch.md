# CyberSource.UnifiedriskPaymentBatch

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batchNumber** | **String** | Unique sequential identifier for this batch within the batch file, used for tracking and reconciliation of ACH or BACS batch submissions | [optional] 
**categoryPurposeDescription** | **String** | Human-readable description of the business purpose for the batch (e.g., \"Payroll\", \"Vendor Payments\"). Corresponds to the ISO 20022 CategoryPurpose code | [optional] 
**endOfBatchIndicator** | **Boolean** | Indicates this entry is the last record in the current batch. Used to signal batch boundary during file processing | [optional] 
**endOfFileIndicator** | **Boolean** | Indicates this entry is the last record in the entire batch file. Used to trigger final file validation and processing | [optional] 
**entryDetailRecNum** | **Number** | Sequential record number of the entry detail record within the batch, used for file integrity checks and record-level reconciliation | [optional] 
**fileIdModifier** | **String** | Single character modifier (A-Z) used to distinguish multiple batch files submitted on the same day for the same originator | [optional] 
**numberOfAddendaRecords** | **Number** | Count of addenda records associated with this batch entry, used for validating batch completeness during file processing | [optional] 
**serviceClassCode** | **String** | ACH service class code indicating the type of entries in the batch. Values - \"200\" (mixed), \"220\" (credits only), \"225\" (debits only), \"280\" (automated accounting) | [optional] 
**totalBatchCountInFile** | **Number** | Total number of batches contained in this file, used for file-level control validation and balancing | [optional] 
**totalBatchEntries** | **Number** | Total count of entry detail records within this batch, used for batch-level balancing and reconciliation | [optional] 
**totalEntryCountInFile** | **Number** | Total count of all entry detail records across all batches in the file, used for file-level reconciliation | [optional] 
**totalEntryHash** | **Number** | Arithmetic sum of all routing transit numbers within the batch/file, used as a checksum for routing number validation | [optional] 
**totalTransitCountInFile** | **Number** | Total count of distinct routing transit numbers in the file, used for clearing house validation and routing verification | [optional] 


