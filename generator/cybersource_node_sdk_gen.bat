@echo off
cd %~dp0

REM Delete the previously generated SDK code

rd /s /q ..\docs
rd /s /q ..\src\api
rd /s /q ..\src\model
rd /s /q ..\test

REM Command to generate SDK

java -jar swagger-codegen-cli-2.4.38.jar generate -t cybersource-javascript-template -i cybersource-rest-spec.json -l javascript -o ../  -c cybersource-node-config.json

powershell -Command "(Get-Content ..\src\Api\SecureFileShareApi.js) | ForEach-Object { $_ -replace 'contentTypes = \[''\*_\/_\*;charset=utf-8', 'contentTypes = [''*/*;charset=utf-8' } | Set-Content ..\src\Api\SecureFileShareApi.js"

powershell -Command "(Get-Content ..\docs\SecureFileShareApi.md) | ForEach-Object { $_ -replace '\*\*Content-Type\*\*: \*_\/_\*;charset=utf-8', '**Content-Type**: */*;charset=utf-8' } | Set-Content ..\docs\SecureFileShareApi.md"

git checkout ..\README.md

git checkout ..\package.json

git checkout ..\src\api\OAuthApi.js
git checkout ..\src\model\AccessTokenResponse.js
git checkout ..\src\model\CreateAccessTokenRequest.js
git checkout ..\src\model\BadRequestError.js
git checkout ..\src\model\ResourceNotFoundError.js
git checkout ..\src\model\UnauthorizedClientError.js

git checkout ..\docs\OAuthApi.md
git checkout ..\docs\AccessTokenResponse.md
git checkout ..\docs\CreateAccessTokenRequest.md
git checkout ..\docs\BadRequestError.md
git checkout ..\docs\ResourceNotFoundError.md
git checkout ..\docs\UnauthorizedClientError.md

git checkout ..\test\api\OAuthApi.spec.js
git checkout ..\test\model\AccessTokenResponse.spec.js
git checkout ..\test\model\CreateAccessTokenRequest.spec.js
git checkout ..\test\model\BadRequestError.spec.js
git checkout ..\test\model\ResourceNotFoundError.spec.js
git checkout ..\test\model\UnauthorizedClientError.spec.js

pause