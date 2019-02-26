'use strict';

var TestRun = require('../../TestRun');
const assert = require('assert');
var cybersourceRestApi = require('cybersource-rest-client');
var path = require('path');
 var filePath = path.resolve(path.join('Data','Configuration.js'));
var configuration = require(filePath);
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
	api = new cybersourceRestApi.ReportSubscriptionsApi(configObject);    

    // Call Back Function 
    
    var callback = function (error, data, response) { 
       // console.log(error);
       if (error && response.status != 200) 
       {
        resArr[count] = 'Fail:' + response.status ;
        assertMessage[count]=response.body.message;
        count++;
        } 
        else {
            try {          
                // Testing-  Assertion 
                assert.equal(inputData['repName'], response.body.reportName);
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
        var csvStream = csv.fromPath(path.join('QaScripts','CSV_Files','Reporting','CoreServices','GetSubscriptionForReportName.csv'),
        { headers: true });
        
    // Fetch Data From Input File 
csvStream.on("data", function (data) {      
    inputData = data;
    sync = true;
    testId[index] = data['testCaseId'];
    index++;
    		
    var reportName  = data['repName'];
    api.getSubscription(reportName, callback);
    while (sync) {           
        require('deasync').sleep(100);
    }

});
// Load Data to OutPut File
csvStream.on("end", function () {
    TestRun.WriteOutData(resArr, testId, 'GetSubscriptionForReportName',assertMessage);
});

}