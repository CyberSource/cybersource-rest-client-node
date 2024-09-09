'use strict';

var TestRun = require('../../TestRun');
const assert = require('assert');
var path = require('path');
var filePath = path.resolve(path.join('Data','Configuration.js'));
var Configuration = require(filePath);
var cybersourceRestApi = require('cybersource-rest-client');
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
    instance = new cybersourceRestApi.CreditApi(configObject);

    // Call Back Function 
    var callback = function (error, data, response) {
        if (error) {
            resArr[count] = 'Fail:' + error.status ;
            assertMessage[count]=response.body.message;
            count++;
        } else {
            try {
                // Testing- Change Assertion 
                if (data.status != constUtility.statusPending)
                {
                    resArr[count] = 'Assertion Failed:' + response.status;
                    assertMessage[count]=constUtility.messagePending;;
                } 
                else if (data.id == null)
                {
                    resArr[count] = 'Assertion Failed:' + response.status;
                    assertMessage[count]=constUtility.messageNullId;
                }
                else
               {
                assert.equal(inputData['amount'], data['creditAmountDetails'].creditAmount);
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

    var csvStream = csv.fromPath(path.join('QaScripts','CSV_Files','Payments','CoreServices','ProcessCredit.csv'),
        { headers: true });
    // Fetch Data From Input File 
    csvStream.on("data", function (data) {

        inputData = data;
        sync = true;
        testId[index] = data['testCaseId'];
        index++;

        var clientReferenceInformation = new cybersourceRestApi.Ptsv2paymentsClientReferenceInformation();
		clientReferenceInformation.code = 'test_credits';

		var orderInformation = new cybersourceRestApi.Ptsv2paymentsOrderInformation();
		var billtoInformation = new cybersourceRestApi.Ptsv2paymentsOrderInformationBillTo();
		billtoInformation.country = 'US';
		billtoInformation.lastName = 'Deo';
		billtoInformation.address1 = '201 S. Division St.';
		billtoInformation.postalCode = '94105';
		billtoInformation.locality = 'San Francisco';
		billtoInformation.administrativeArea = 'MI';
		billtoInformation.firstName = 'John';
		billtoInformation.phoneNumber = '4158880000';
		billtoInformation.email = 'test@cybs.com';
        orderInformation.billTo = billtoInformation;
        
        var amountInformation = new cybersourceRestApi.Ptsv2paymentsOrderInformationAmountDetails();
        amountInformation.totalAmount = data['amount']
        amountInformation.currency = 'USD';
		orderInformation.amountDetails = amountInformation;

		var paymentInformation = new cybersourceRestApi.Ptsv2paymentsPaymentInformation();
		var cardInformation = new cybersourceRestApi.Ptsv2paymentsPaymentInformationCard();
		cardInformation.expirationYear = '2031';
		cardInformation.number = '5555555555554444';
		cardInformation.expirationMonth = '12';
		cardInformation.type = '002';
		paymentInformation.card = cardInformation;

		var request = new cybersourceRestApi.CreateCreditRequest();
		request.clientReferenceInformation = clientReferenceInformation;
		request.orderInformation = orderInformation;
		request.paymentInformation = paymentInformation;
    
        instance.createCredit(request, callback);
        while(sync) {
        require('deasync').sleep(100);
        }

    });
    // Load Data to OutPut File
    csvStream.on("end", function () {
            TestRun.WriteOutData(resArr, testId, 'ProcessCredit',assertMessage);
    });

}