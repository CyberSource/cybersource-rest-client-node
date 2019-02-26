'use strict';

var TestRun = require('../../TestRun');
const assert = require('assert');
var path = require('path');
var cybersourceRestApi = require('cybersource-rest-client');
var filePath = path.resolve(path.join('Data', 'Configuration.js'));
var configuration = require(filePath);
var fs = require('fs');
var constUtility = require(path.resolve((path.join('Utility','ConstantUtility.js'))));


var api = null;

var obj = new loadFileData();

function loadFileData() {
    var count = 0;
    var countmsg = 0;
    var resArr = [];
    var inputData = [];
    var assertMessage =[];
    var sync = false;
    var allowedResponsecodes = ["200", "201"];

    var configObject = new configuration();
    var apiClient = new cybersourceRestApi.ApiClient();

    api = new cybersourceRestApi.ReportDownloadsApi(configObject, apiClient);
    // Call Back Function 
    var callback = function (error, data, response) {
        if (error) {
            resArr[count] = 'Fail:' + response.status ;
            if (JSON.stringify(response['status']) === '404') {
                assertMessage[count]=constUtility.messageNotFound;
            }
            else
            {
                assertMessage[count]=inputData['message'];
            }
            
            count++;        
        }
        if (response) {
             if (JSON.stringify(response['status']) === '200') {
                const stream = fs.createWriteStream(path.resolve(path.join('Resource', inputData['repName'] + '.xml')));
                response.pipe(stream);
                 try {
                    // Testing- Change Assertion
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

    var csvStream = csv.fromPath(path.join('QaScripts', 'CSV_Files', 'Reporting', 'CoreServices', 'DownloadReport.csv'),
        { headers: true });
    
    // Fetch Data From Input File 

    csvStream.on("data", function (data) {
        inputData = data;
        sync = true;
        testId[index] = data['testCaseId'];
        index++;

        var reportDate = data['repDate'];
        var reportName = data['repName'];
        var opts = [];
        opts['organizationId'] = data['orgId'];
      
        api.downloadReport(reportDate, reportName, opts, callback) ;
        while (sync) {
            require('deasync').sleep(100);
        }

    });
    // Load Data to OutPut File
    csvStream.on("end", function () {
         TestRun.WriteOutData(resArr, testId, 'DownloadReport',assertMessage);
    });

}