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
    var assertMessage =[];
    var sync = false;

    var configObject = new configuration();
    api = new cybersourceRestApi.ReportSubscriptionsApi(configObject);    
    var allowedResponsecodes = ["201"];
               

    // Call Back Function 
    var callback = function (error, data, response) {      
        if (error) {
            resArr[count] = 'Fail:' + response.status ;
            assertMessage[count]=response.body.message;
            count++;
        } else {
            try { 
                var tobeAssertValue = allowedResponsecodes.includes(JSON.stringify(response.status));
                 assert.equal(true, tobeAssertValue);
                 resArr[count] = 'Pass:' + response.status;
                 assertMessage[count]=inputData['message'];
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
     var csvStream = csv.fromPath(path.join('QaScripts','CSV_Files','Reporting','CoreServices','CreateReportSubscriptionForReportNameByOrganization.csv'),
     { headers: true });
     
 // Fetch Data From Input File 
 
 csvStream.on("data", function (data) {      
    inputData = data;
    sync = true;
    testId[index] = data['testCaseId'];
    index++;
    var request = new cybersourceRestApi.RequestBody();

    request.reportDefinitionName = data['reportDefName'];
    request.reportFields = [
        'Request.RequestID',
        'Request.TransactionDate',
        'Request.MerchantID'
    ];
    request.reportMimeType = 'application/xml';
    request.reportFrequency = data['repFrequency'];
    request.timezone = 'GMT';
    request.startTime = '2300';
    request.startDay = 1;
    request.reportName = data['repName'];
    api.createSubscription(request, callback);
    while (sync) {           
        require('deasync').sleep(100);
    }

});
// Load Data to OutPut File
csvStream.on("end", function () {
      TestRun.WriteOutData(resArr, testId, 'CreateReportSubscriptionForReportNameByOrganization',assertMessage);
});

}