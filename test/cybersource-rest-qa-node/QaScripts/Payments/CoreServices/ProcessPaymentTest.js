'use strict';

var TestRun = require('../../TestRun');
const assert = require('assert');
var path = require('path');
var filePath = path.resolve((path.join('Data','Configuration.js')));
var Configuration = require(filePath);
var CybersourceRestApi = require('cybersource-rest-client');
var constUtility = require(path.resolve((path.join('Utility','ConstantUtility.js'))));

var instance = null;

var obj = new loadFileData();

function loadFileData() {
    var count = 0;
    var resArr = [];
    var assertMessage =[];
    var inputData = [];
    var sync = false;

    var configObject = new Configuration();
     instance = new CybersourceRestApi.PaymentsApi(configObject);
  

    // Call Back Function 
    var callback = function (error, data, response) {
        if (error) {
            resArr[count] = 'Fail:' + response.status ;
            assertMessage[count]=response.body.message;
            count++;
        } else {
            try {
                // Testing- Change Assertion 
                if (data.status != constUtility.statusAuthorized)
                {
                    resArr[count] = 'Assertion Failed:' + response.status;
                    assertMessage[count]=constUtility.messageAuthorize;;
                } 
                else if (data.id == null)
                {
                    resArr[count] = 'Assertion Failed:' + response.status;
                    assertMessage[count]=constUtility.messageNullId;
                }
               else
               {
                 assert.equal(inputData['amount'], data['orderInformation'].amountDetails.authorizedAmount);
                resArr[count] = 'Pass:' + response.status +"-" + data.id;
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
    var csvStream = csv.fromPath(path.join('QaScripts','CSV_Files','Payments','CoreServices','ProcessPayment.csv'),
        { headers: true });
    // Fetch Data From Input File 
    csvStream.on("data", function (data) {

        inputData = data;
        sync = true;
        testId[index] = data['testCaseId'];
        index++;

        var clientReferenceInformation = new CybersourceRestApi.Ptsv2paymentsClientReferenceInformation();
        clientReferenceInformation.code = "test_payment";

        var processingInformation = new CybersourceRestApi.Ptsv2paymentsProcessingInformation();
        processingInformation.commerceIndicator = "internet";

        var subMerchant = new CybersourceRestApi.Ptsv2paymentsAggregatorInformationSubMerchant();
        subMerchant.cardAcceptorId = '1234567890';
		subMerchant.country = 'US';
		subMerchant.phoneNumber = '4158880000';
		subMerchant.address1 = '1 Market St';
		subMerchant.postalCode = '94105';
		subMerchant.locality = 'San Francisco';
		subMerchant.name = 'Visa Inc';
		subMerchant.administrativeArea = 'CA';
		subMerchant.region = 'PEN';
		subMerchant.email = 'test@cybs.com';

		var aggregatorInformation = new CybersourceRestApi.Ptsv2paymentsAggregatorInformation();
		aggregatorInformation.subMerchant = subMerchant;
		aggregatorInformation.name = 'V-Internatio';
		aggregatorInformation.aggregatorId = '123456789';

        var amountDetails = new CybersourceRestApi.Ptsv2paymentsOrderInformationAmountDetails();
        amountDetails.totalAmount = data['amount'];
        amountDetails.currency = "USD";

        var billTo = new CybersourceRestApi.Ptsv2paymentsOrderInformationBillTo();
		billTo.country = 'US';
		billTo.firstName = 'John';
		billTo.lastName = 'Deo';
		billTo.phoneNumber = '4158880000';
		billTo.address1 = 'test';
		billTo.postalCode = '94105';
		billTo.locality = 'San Francisco';
		billTo.administrativeArea = 'MI';
		billTo.email = 'test@cybs.com';
		billTo.address2 = 'Address 2';
		billTo.district = 'MI';
		billTo.buildingNumber = '123';
		billTo.company = 'Visa';

        var orderInformation = new CybersourceRestApi.Ptsv2paymentsOrderInformation();
        orderInformation.amountDetails = amountDetails;
        orderInformation.billTo = billTo;

        var paymentInformation = new CybersourceRestApi.Ptsv2paymentsPaymentInformation();
        var card = new CybersourceRestApi.Ptsv2paymentsPaymentInformationCard();
        card.expirationYear = "2031";
        card.number = "4111111111111111";
        card.expirationMonth = "03";
        card.securityCode = "123";
        card.type = "001";
        paymentInformation.card = card;

        var request = new CybersourceRestApi.CreatePaymentRequest();
		request.clientReferenceInformation = clientReferenceInformation;
		request.processingInformation = processingInformation;
		request.aggregatorInformation = aggregatorInformation;
		request.orderInformation = orderInformation;
		request.paymentInformation = paymentInformation;
    

        instance.createPayment(request, callback);
        while(sync) {
        require('deasync').sleep(100);
        }

    });
    // Load Data to OutPut File
    csvStream.on("end", function () {
            TestRun.WriteOutData(resArr, testId, 'ProcessPayment',assertMessage);
    });

}