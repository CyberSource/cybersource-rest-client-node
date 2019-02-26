'use strict';

var TestRun = require('../../TestRun');
const assert = require('assert');
var cybersourceRestApi = require('cybersource-rest-client');
var path = require('path');
var filePath = path.resolve(path.join('Data','Configuration.js'));
var configuration = require(filePath)
var constUtility = require(path.resolve((path.join('Utility','ConstantUtility.js'))));

var api = null;

var obj = new loadFileData();

function loadFileData() {
    var count = 0;
    var resArr = [];
    var inputData = [];
    var assertMessage =[];
    var sync = false;

    var configObject = new configuration();
	var api = new cybersourceRestApi.ProcessAPayoutApi(configObject);
    
    // Call Back Function 
    
    var callback = function (error, data, response) {    
        if (error) {
            resArr[count] = 'Fail:' + response.status ;
            assertMessage[count]=response.body.message;;
            count++;
        } else {
            try {                
                // Testing- Change Assertion 
                if (response.body.id == null)
                {
                    resArr[count] = 'Assertion Failed:' + response.status;
                    assertMessage[count]=constUtility.messageNullId;
                }
                else
                {
                let totalAmount=response.body.orderInformation.amountDetails.totalAmount;                
                assert.equal(inputData['amount'], totalAmount);
                resArr[count] = 'Pass:' + response.status +"-" + response.body.id;
                assertMessage[count]=inputData['message'];
                }
                count++;
            } catch (ex) {
                if((ex.name).indexOf("AssertionError") > -1)
                {
                    resArr[count] = 'Assertion Failed:' + response.status;
                    assertMessage[count]=inputData['message'];
                }
                else
                {
                resArr[count] = 'Assertion Failed:' + response.status;
                assertMessage[count]=ex.message;
                }
                count++;
            }

        }
        sync = false;
    };


    // File Reading 
    var csv = require("fast-csv");
    var i = 0;
    var index = 0;
    var testId = [];
    var requestData = [];
    // Testing- Change File heasers and File name
    var csvStream = csv.fromPath(path.join('QaScripts','CSV_Files','Payouts','CoreServices','ProcessPayout.csv'),
    { headers: true });
    // Fetch Data From Input File 
    csvStream.on("data", function (data) {       
        inputData = data;
        sync = true;
        testId[index] = data['testCaseId'];
        index++;
        
        var clientReferenceInformation = new cybersourceRestApi.Ptsv2paymentsClientReferenceInformation();
        clientReferenceInformation.code = data['cleintRefInfoCode'];
        var senderInformation = new cybersourceRestApi.Ptsv2payoutsSenderInformation();
		senderInformation.referenceNumber = '1234567890';
		senderInformation.address1 = '900 Metro Center Blvd.900';
		senderInformation.countryCode = 'US';
		senderInformation.locality = 'San Francisco';
		senderInformation.name = 'Company Name';
		senderInformation.administrativeArea = 'CA';
        
		var account = new cybersourceRestApi.Ptsv2payoutsSenderInformationAccount();
		account.fundsSource = '05';
		senderInformation.account = account;

        var processingInformation = new cybersourceRestApi.Ptsv2payoutsProcessingInformation();
		processingInformation.commerceIndicator = 'internet';
        processingInformation.businessApplicationId = data['businessAppId'];
        processingInformation.networkRoutingOrder = 'ECG';
		processingInformation.reconciliationId = '1087488702VIAQNSPQ';

        var payoutsOptions = new cybersourceRestApi.Ptsv2payoutsProcessingInformationPayoutsOptions();
		payoutsOptions.retrievalReferenceNumber = '123456789012';
		payoutsOptions.acquirerBin = '567890124';

        var orderInformation = new cybersourceRestApi.Ptsv2payoutsOrderInformation();
		var amountDetails = new cybersourceRestApi.Ptsv2payoutsOrderInformationAmountDetails();
        amountDetails.totalAmount = data['amount'];
        amountDetails.currency = 'USD';

        orderInformation.amountDetails = amountDetails;

        var merchantInformation = new cybersourceRestApi.Ptsv2payoutsMerchantInformation();
		var merchantDescriptor = new cybersourceRestApi.Ptsv2payoutsMerchantInformationMerchantDescriptor();

		merchantDescriptor.country = 'US';
		merchantDescriptor.postalCode = '94440';
		merchantDescriptor.locality = 'FC';
		merchantDescriptor.name = 'Sending Company Name';
		merchantDescriptor.administrativeArea = 'CA';

        merchantInformation.merchantDescriptor = merchantDescriptor;

		var paymentInformation = new cybersourceRestApi.Ptsv2paymentsPaymentInformation();
		var paymentInformationCard = new cybersourceRestApi.Ptsv2payoutsPaymentInformationCard();
		paymentInformationCard.expirationYear = '2025';
		paymentInformationCard.number = '4111111111111111';
		paymentInformationCard.expirationMonth = '12';
		paymentInformationCard.type = '001';
		paymentInformation.card = paymentInformationCard;

        var recipientInformation = new cybersourceRestApi.Ptsv2payoutsRecipientInformation();
		recipientInformation.firstName = 'John';
		recipientInformation.lastName = 'Doe';
		recipientInformation.address1 = 'Paseo Padre Boulevard';
		recipientInformation.locality = 'San Francisco';
		recipientInformation.administrativeArea = 'CA';
		recipientInformation.postalCode = '94400';
		recipientInformation.phoneNumber = '6504320556';
		recipientInformation.country = 'US';

		var request = new cybersourceRestApi.PtsV2PayoutsPostResponse();
		request.clientReferenceInformation = clientReferenceInformation;
		request.senderInformation = senderInformation;
		request.processingInformation = processingInformation;
		request.orderInformation = orderInformation;
		request.merchantInformation = merchantInformation;
		request.paymentInformation = paymentInformation;
		request.recipientInformation = recipientInformation;
		request.payoutsOptions = payoutsOptions;

        
        api.octCreatePayment(request, callback);
        while (sync) {           
            require('deasync').sleep(100);
        }

    });
    // Load Data to OutPut File
    csvStream.on("end", function () {
        TestRun.WriteOutData(resArr, testId, 'ProcessPayout',assertMessage);
    });

}