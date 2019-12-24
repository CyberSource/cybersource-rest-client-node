@echo off
cd %~dp0

REM Delete the previously generated SDK code

rd /s /q ..\docs
rd /s /q ..\src\api
rd /s /q ..\src\model
rd /s /q ..\test

REM Command to generate SDK

java -jar swagger-codegen-cli-2.3.0.jar generate -t cybersource-javascript-template -i cybersource-rest-spec.json -l javascript -o ../  -c cybersource-node-config.json

powershell -Command "(Get-Content ..\src\Api\SecureFileShareApi.js) | ForEach-Object { $_ -replace 'contentTypes = \[''application/json;charset=utf-8', 'contentTypes = [''*/*' } | Set-Content ..\src\Api\SecureFileShareApi.js"

git checkout ..\README.md

git checkout ..\package.json

pause