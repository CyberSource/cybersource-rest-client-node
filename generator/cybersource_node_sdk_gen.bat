@echo off
cd %~dp0

REM Delete the previously generated SDK code

rd /s /q ..\docs
rd /s /q ..\src
rd /s /q ..\test

REM Command to generate SDK

java -jar swagger-codegen-cli-2.3.0.jar generate -t cybersource-javascript-template -i cybersource-rest-spec.json -l javascript -o ../  -c cybersource-node-config.json

REM Batch script for changing accept type
powershell -Command "(Get-Content ..\src\Api\SearchTransactionsApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json;charset=utf-8', 'accepts = [''*/*'} | Set-Content ..\src\Api\SearchTransactionsApi.js"

REM powershell -Command "(Get-Content ..\src\index.js) | ForEach-Object { $_ -replace \"require\('./api/Download([DTXS]{3})Api'\), \", \"\" } | Set-Content ..\src\index.js"

REM powershell -Command "(Get-Content ..\src\index.js) | ForEach-Object { $_ -replace \"'api/Download([DTXS]{3})Api', \", \"\" } | Set-Content ..\src\index.js"

REM powershell -Command "(Get-Content ..\src\index.js) | ForEach-Object { $_ -replace \"Download([DTXS]{3})Api, \", \"\" } | Set-Content ..\src\index.js"


git checkout ..\README.md

git checkout ..\package.json

pause