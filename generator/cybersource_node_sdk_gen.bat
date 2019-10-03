@echo off
cd %~dp0

REM Delete the previously generated SDK code

rd /s /q ..\docs
rd /s /q ..\src
rd /s /q ..\test

REM Command to generate SDK

java -jar swagger-codegen-cli-2.3.0.jar generate -t cybersource-javascript-template -i cybersource-rest-spec.json -l javascript -o ../  -c cybersource-node-config.json

git checkout ..\README.md

git checkout ..\package.json

pause