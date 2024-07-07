var csv = require("fast-csv");
var path = require('path');

var fs = require('fs');

var EventEmitter = require("events").EventEmitter;
EventEmitter.defaultMaxListeners = 1000;
csv.fromPath('QaScripts/CSV_Files/Driver/driver.csv', { headers: true })

    .on("data", function (data) {
        if (data['Flag'] === "1") {
            var dirName = data['dirName'];
            var fileName = data['fileName'];
            require(("./" + path.join(dirName, fileName)).toString());
        }
    })
    .on("end", function () {

    });


var json2csv = require('json2csv').parse;
var newLine = "\r\n";


module.exports = {
   
    WriteOutData: function (resArr, testId, apiName,assertMessage) {
        
        var fields = ['TestCaseId', 'APIName', 'Status', 'Message','TimeStamp'];
        var appendResult = [];
        var timeStamp = new Date();
        for (var i = 0; i < resArr.length; i++) {
            var appendObj = {};
            appendObj['TestCaseId'] = testId[i];
            appendObj['APIName'] = apiName;
            appendObj['Status'] = resArr[i];
            appendObj['Message'] = assertMessage[i];
            appendObj['TimeStamp'] = timeStamp;            
            appendResult[i] = appendObj;
        }

        var toCsv = {
            fields: fields,
            header: false
        };

      

        fs.stat('QaScripts/CSV_Files/TestReport/TestResults.csv', function (err, stat) {
            if (err) {
                toCsv.header = true;
                var csv = json2csv(appendResult, toCsv) + newLine;
                fs.writeFile('QaScripts/CSV_Files/TestReport/TestResults.csv', csv, function (err, stat) {
                    if (err) throw err;
                
                });

            }
            else {
                if (stat.size === 0) toCsv.header = true;
                var csv = json2csv(appendResult, toCsv) + newLine;
                fs.appendFile('QaScripts/CSV_Files/TestReport/TestResults.csv', csv, function (err) {
                    if (err) throw err;
                 
                });
            }
        });

    }
}