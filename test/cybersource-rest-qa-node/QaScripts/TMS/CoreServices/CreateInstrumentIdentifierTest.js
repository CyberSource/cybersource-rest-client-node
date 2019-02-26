'use strict';

var TestRun = require('../../TestRun');
const assert = require('assert');
var cybersourceRestApi = require('cybersource-rest-client');
var path = require('path');
var filePath = path.resolve(path.join('Data', 'Configuration.js'));
var configuration = require(filePath);
var constUtility = require(path.resolve((path.join('Utility', 'ConstantUtility.js'))));

var api = null;

var obj = new loadFileData();

function loadFileData() {
    var count = 0;
    var resArr = [];
    var inputData = [];
    var sync = false;
    var assertMessage =[];
    

    // Call Back Function 
    var callback = function (error, data, response) {
        if (error) {
            resArr[count] = 'Fail:' + response.status;
            assertMessage[count] = response.body.errors[0].message;
            count++;
        } else {
            try {
               
                if (data.state != constUtility.statusActive) {
                    resArr[count] = 'Assertion Failed:' + response.status;
                    assertMessage[count] = constUtility.messageActive;
                }
                else if (data.id == null) {
                    resArr[count] = 'Assertion Failed:' + response.status;
                    assertMessage[count] = constUtility.messageNullTokenId;
                }
                else {
                    // Testing- Change Assertion 
                    assert.equal(inputData['prevTransactionId'], data['processingInformation'].authorizationOptions.initiator.merchantInitiatedTransaction.previousTransactionId);
                    resArr[count] = 'Pass:' + response.status +'-' + data.id;
                    assertMessage[count] = inputData['message'];
                }
                count++;
            } catch (ex) {
                if((ex.name).indexOf("AssertionError") > -1)
                {
                resArr[count] = 'Assertion Failed-' + response.status;
                assertMessage[count] = inputData['message'];
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
    var csvStream = csv.fromPath(path.join('QaScripts', 'CSV_Files', 'TMS', 'CoreServices', 'CreateInstrumentIdentifier.csv'),
        { headers: true });

    // Fetch Data From Input File 
    csvStream.on("data", function (data) {

        inputData = data;
        sync = true;
        testId[index] = data['testCaseId'];
        index++;

        var configObject = new configuration();
        api = new cybersourceRestApi.InstrumentIdentifiersApi(configObject);

        //     var merchantInitiatedTransaction = new cybersourceRestApi.Tmsv1instrumentidentifiersProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction();
        //     var previousTransactionId = data['prevTransactionId'];

        var card = new cybersourceRestApi.Tmsv1paymentinstrumentsCard();
        card.number = '1234567890117654';

        var merchantInitiatedTransaction = new cybersourceRestApi.Tmsv1instrumentidentifiersProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction();
        var previousTransactionId = data['prevTransactionId'];
        merchantInitiatedTransaction.previousTransactionId = previousTransactionId;


        var initiator = new cybersourceRestApi.Tmsv1instrumentidentifiersProcessingInformationAuthorizationOptionsInitiator();
        initiator.merchantInitiatedTransaction = merchantInitiatedTransaction;

        var authorizationOptions = new cybersourceRestApi.Tmsv1instrumentidentifiersProcessingInformationAuthorizationOptions();
        authorizationOptions.initiator = initiator;

        var processingInformation = new cybersourceRestApi.Tmsv1paymentinstrumentsProcessingInformation();
        processingInformation.authorizationOptions = authorizationOptions;

        var body = new cybersourceRestApi.Body();
        body.card = card;
        body.processingInformation = processingInformation;

        var profileId = data['profileId'];

        api.tmsV1InstrumentidentifiersPost(profileId, body, callback);
        while (sync) {
            require('deasync').sleep(100);
        }

    });
    // Load Data to OutPut File
    csvStream.on("end", function () {

        TestRun.WriteOutData(resArr, testId, 'CreateInstrumentIdentifier',assertMessage);
    });

}