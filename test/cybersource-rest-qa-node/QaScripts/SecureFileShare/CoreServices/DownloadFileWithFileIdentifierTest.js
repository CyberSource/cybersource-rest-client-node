'use strict';

var TestRun = require('../../TestRun');
const assert = require('assert');
var path = require('path');
var cybersourceRestApi = require('cybersource-rest-client');
var fs = require('fs');
var filePath = path.resolve(path.join('Data', 'Configuration.js'));;
var configuration = require(filePath);
var fs = require('fs');
var api = null;
var constUtility = require(path.resolve((path.join('Utility','ConstantUtility.js'))));


var obj = new loadFileData();

function loadFileData() {
    var count = 0;
    var resArr = [];
    var inputData = [];
    var assertMessage =[];
    var sync = false;

    var configObject = new configuration();
    var apiClient = new cybersourceRestApi.ApiClient();
    api = new cybersourceRestApi.SecureFileShareApi(configObject, apiClient);

    // Call Back Function 

    var callback = function (error, data, response) {        
        if (error) {
            resArr[count] = 'Fail:' + error.status ;
            if (JSON.stringify(response['status']) === '400') {
                assertMessage[count]=constUtility.messageFieldValidation;
            }
            else if (JSON.stringify(response['status']) === '404') {
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
                const stream = fs.createWriteStream(path.resolve(path.join('Resource', 'DownloadFileWithFileIdentifier'+'.csv')));
                response.pipe(stream);
                 try {
                    var stats;
                    var counttimeout = count;
                    var msg= inputData['message'];
                    setTimeout(() => {
                     stats = fs.statSync(path.resolve(path.join('Resource', 'DownloadFileWithFileIdentifier'+'.csv')));
                     var isDownloaded = (stats["size"] > 0) ? true : false;
                    assert.equal(true, isDownloaded);                  
                    resArr[counttimeout] = 'Pass:' + response.status;
                    assertMessage[counttimeout]=msg; 
                    }, 250);                                       
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
    var csvStream = csv.fromPath(path.join('QaScripts', 'CSV_Files', 'SecureFileShare', 'CoreServices', 'DownloadFileWithFileIdentifier.csv'),
        { headers: true });
    // Fetch Data From Input File 
    csvStream.on('data', function (data) {
        inputData = data;
        sync = true;
        testId[index] = data['testCaseId'];
        index++;

        var fileId = data['fileId'];
        var opts = [];
        opts['organizationId'] = data['organizationId'];

        api.getFile(fileId, opts, callback);
        while (sync) {
            require('deasync').sleep(100);
        }

    });
    // Load Data to OutPut File
    csvStream.on("end", function () {
        TestRun.WriteOutData(resArr, testId, 'DownloadFileWithFileIdentifier',assertMessage);
    });

}


