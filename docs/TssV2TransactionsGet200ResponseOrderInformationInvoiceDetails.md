# CyberSource.TssV2TransactionsGet200ResponseOrderInformationInvoiceDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**salesSlipNumber** | **Number** | Transaction identifier that is generated. You have the option of printing the sales slip number on the receipt. This field is supported only on Cybersource through Visanet and JCN gateway.  Optional field.  #### Card Present processing message If you included this field in the request, the returned value is the value that you sent in the request. If you did not include this field in the request, the system generated this value for you.  The difference between this reply field and the &#x60;processorInformation.systemTraceAuditNumber&#x60; field is that the system generates the system trace audit number (STAN), and you must print the receipt number on the receipt; whereas you can generate the sales slip number, and you can choose to print the sales slip number on the receipt.  | [optional] 


