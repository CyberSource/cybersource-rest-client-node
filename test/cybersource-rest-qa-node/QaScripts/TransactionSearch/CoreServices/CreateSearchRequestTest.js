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
    var assertMessage = [];

    var configObject = new configuration();
    api = new cybersourceRestApi.SearchTransactionsApi(configObject);

    // Call Back Function 

    var callback = function (error, data, response) {

        if (error) {
            
            resArr[count] = 'Fail:' + response.status;
            assertMessage[count] = response.body.message;
            count++;
        } else {
            try {
                if (data.name == null) {
                    resArr[count] = 'Assertion Failed:' + response.status;
                    assertMessage[count] = constUtility.messageNullName;
                } else {
                    // Testing- Change Assertion
                    assert.equal(inputData['name'], data["name"]);
                    resArr[count] = 'Pass:' + response.status + '-' + response.body.searchId;
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

    var csvStream = csv.fromPath(path.join('QaScripts', 'CSV_Files', 'TransactionSearch', 'CoreServices', 'CreateSearchRequest.csv'),
        { headers: true });

    // Fetch Data From Input File 
    csvStream.on("data", function (data) {
        inputData = data;
        sync = true;
        testId[index] = data['testCaseId'];
        index++;

        var createSearchRequest = new cybersourceRestApi.TssV2TransactionsPostResponse();
        createSearchRequest.save = 'false';
        createSearchRequest.name = data['name'];
        createSearchRequest.timezone = 'America/Chicago';
        createSearchRequest.query = data['query'];
        createSearchRequest.offset = 0;
        createSearchRequest.limit = 100;
        createSearchRequest.sort = 'id:asc, submitTimeUtc:asc';


        api.createSearch(createSearchRequest, callback);
        while (sync) {
            require('deasync').sleep(100);
        }

    });
  
    // Load Data to OutPut File
    csvStream.on("end", function () {

        TestRun.WriteOutData(resArr, testId, 'CreateSearchRequest', assertMessage);
    });

}