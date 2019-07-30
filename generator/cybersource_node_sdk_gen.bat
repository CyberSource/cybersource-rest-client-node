@echo off
cd %~dp0

REM Delete the previously generated SDK code

rd /s /q ..\docs
rd /s /q ..\src
rd /s /q ..\test

REM Command to generate SDK

java -jar swagger-codegen-cli-2.3.0.jar generate -t cybersource-javascript-template -i cybersource-rest-spec.json -l javascript -o ../  -c cybersource-node-config.json

REM Batch script for changing accept type

powershell -Command "(Get-Content ..\src\Api\CaptureApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json', 'accepts = [''application/hal+json' } | Set-Content ..\src\Api\CaptureApi.js"

powershell -Command "(Get-Content ..\src\Api\CreditApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json', 'accepts = [''application/hal+json' } | Set-Content ..\src\Api\CreditApi.js"

powershell -Command "(Get-Content ..\src\Api\PaymentsApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json', 'accepts = [''application/hal+json' } | Set-Content ..\src\Api\PaymentsApi.js"

powershell -Command "(Get-Content ..\src\Api\PayoutsApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json', 'accepts = [''application/hal+json' } | Set-Content ..\src\Api\PayoutsApi.js"

powershell -Command "(Get-Content ..\src\Api\RefundApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json', 'accepts = [''application/hal+json' } | Set-Content ..\src\Api\RefundApi.js"

powershell -Command "(Get-Content ..\src\Api\ReversalApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json', 'accepts = [''application/hal+json' } | Set-Content ..\src\Api\ReversalApi.js"

powershell -Command "(Get-Content ..\src\Api\TransactionDetailsApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json', 'accepts = [''application/hal+json' } | Set-Content ..\src\Api\TransactionDetailsApi.js"

powershell -Command "(Get-Content ..\src\Api\UserManagementApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json', 'accepts = [''application/hal+json' } | Set-Content ..\src\Api\UserManagementApi.js"

powershell -Command "(Get-Content ..\src\Api\VoidApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json', 'accepts = [''application/hal+json' } | Set-Content ..\src\Api\VoidApi.js"

powershell -Command "(Get-Content ..\src\Api\SearchTransactionsApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json;charset=utf-8', 'accepts = [''*/*'} | Set-Content ..\src\Api\SearchTransactionsApi.js"

REM powershell -Command "(Get-Content ..\src\Api\PayerAuthenticationApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json;charset=utf-8', 'accepts = [''application/hal+json;charset=utf-8'} | Set-Content ..\src\Api\PayerAuthenticationApi.js"

REM Batch file to change the content type 

powershell -Command "(Get-Content ..\src\Api\SecureFileShareApi.js) | ForEach-Object { $_ -replace 'contentTypes = \[''application/json;charset=utf-8', 'contentTypes = [''*/*' } | Set-Content ..\src\Api\SecureFileShareApi.js"

powershell -Command "(Get-Content ..\src\index.js) | ForEach-Object { $_ -replace \"require\('./api/Download([DTXS]{3})Api'\), \", \"\" } | Set-Content ..\src\index.js"

powershell -Command "(Get-Content ..\src\index.js) | ForEach-Object { $_ -replace \"'api/Download([DTXS]{3})Api', \", \"\" } | Set-Content ..\src\index.js"

powershell -Command "(Get-Content ..\src\index.js) | ForEach-Object { $_ -replace \"Download([DTXS]{3})Api, \", \"\" } | Set-Content ..\src\index.js"


git checkout ..\README.md

git checkout ..\package.json

pause