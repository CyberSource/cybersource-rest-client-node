'use strict';

var TestRun = require('../../TestRun');
const assert = require('assert');
var path = require('path');
var filePath = path.resolve(path.join('Data','Configuration.js'));
var Configuration = require(filePath);
var CybersourceRestApi = require('cybersource-rest-client');
var constUtility = require(path.resolve((path.join('Utility','ConstantUtility.js'))));

var instance = null;

var obj = new loadFileData();

function loadFileData() {
    var count = 0;
    var resArr = [];
    var inputData = [];
    var assertMessage =[];
    var sync = false;

    var configObject = new Configuration();
     instance = new CybersourceRestApi.ReversalApi(configObject);

    // Call Back Function 
    var callback = function (error, data, response) {
        if (error) {
            resArr[count] = 'Fail:' + error.status ;
            assertMessage[count]=response.body.message;
            count++;
        } else {
            try {
                // Testing- Change Assertion 
                if (data.status != constUtility.statusReversed)
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
                assert.equal(inputData['amount'], data['reversalAmountDetails'].reversedAmount);
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

    
   var csvStream = csv.fromPath(path.join('QaScripts','CSV_Files','Payments','CoreServices','CreateReversal.csv'),
        { headers: true });
    // Fetch Data From Input File 
    csvStream.on("data", function (data) {

        inputData = data;
        sync = true;
        testId[index] = data['testCaseId'];
        index++;
        var id = data['paymentId'];
        var clientReferenceInformation = new CybersourceRestApi.Ptsv2paymentsClientReferenceInformation();
		clientReferenceInformation.code = 'test_reversal';

		var reversalInformation = new CybersourceRestApi.Ptsv2paymentsidreversalsReversalInformation();
		var reversalInformationAmountDetails = new CybersourceRestApi.Ptsv2paymentsidreversalsReversalInformationAmountDetails();
		 reversalInformationAmountDetails.totalAmount = data['amount'];
        reversalInformation.reason = "testing";
        reversalInformation.amountDetails = reversalInformationAmountDetails;

        var request = new CybersourceRestApi.AuthReversalRequest();
		request.clientReferenceInformation = clientReferenceInformation;
		request.reversalInformation = reversalInformation;

        instance.authReversal(id, request, callback);
        while(sync) {
        require('deasync').sleep(100);
        }

    });
    // Load Data to OutPut File
    csvStream.on("end", function () {
            TestRun.WriteOutData(resArr, testId, 'ProcessAuthorizationReversal',assertMessage);
    });

}