'use strict';

var TestRun = require('../../TestRun');
const assert = require('assert');
var cybersourceRestApi = require('cybersource-rest-client');
var path = require('path');
 var filePath = path.resolve(path.join('Data','Configuration.js'));
var configuration = require(filePath);

var api = null;

var obj = new loadFileData();

function loadFileData() {
    var count = 0;
    var resArr = [];
    var inputData = [];
    var sync = false;
    var assertMessage =[];

    var configObject = new configuration();
	api = new cybersourceRestApi.TransactionBatchesApi(configObject);    

    // Call Back Function 
    var callback = function (error, data, response) {
           
        if (error) {
            
            resArr[count] = 'Fail:' + response.status;
            assertMessage[count] =  response.body.message;
            count++;
        } else {
            try {                
                // Testing- Change Assertion  
                var allowedResponsecodes = ["200", "201"];
                var tobeAssertValue = allowedResponsecodes.includes(JSON.stringify(response.status));
                assert.equal(true, tobeAssertValue);
                resArr[count] = 'Pass:' + response.status;
                assertMessage[count] = inputData['message']
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
     var csvStream = csv.fromPath(path.join('QaScripts','CSV_Files','TransactionBatches','CoreServices','GetListOfBatchFiles.csv'),
     { headers: true });
    
 // Fetch Data From Input File 
 csvStream.on("data", function (data) {      
    inputData = data;
    sync = true;
    testId[index] = data['testCaseId'];
    index++;
     var startTime = data['startTime'];
     var endTime =  data['endTime'];

    api.ptsV1TransactionBatchesGet(startTime, endTime, callback);
    while (sync) {           
        require('deasync').sleep(100);
    }

});
// Load Data to OutPut File
csvStream.on("end", function () {
   
    TestRun.WriteOutData(resArr, testId, 'GetListOfBatchFiles',assertMessage);
});

}