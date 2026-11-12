@echo off
setlocal
cd /d "%~dp0"

REM Delete the previously generated SDK code
echo Starting CyberSource Node.js SDK generation...
echo Cleaning up previously generated code...

if exist "..\docs" (
	rd /s /q "..\docs"
	echo Removed ..\docs
)
if exist "..\src\api" (
	rd /s /q "..\src\api"
	echo Removed ..\src\api
)
if exist "..\src\model" (
	rd /s /q "..\src\model"
	echo Removed ..\src\model
)
if exist "..\test" (
	rd /s /q "..\test"
	echo Removed ..\test
)
echo Cleanup completed.

REM Command to generate SDK
echo Generating SDK using Swagger Codegen...
java -jar swagger-codegen-cli-2.4.38.jar generate -t cybersource-javascript-template -i cybersource-rest-spec.json -l javascript -o ../ -c cybersource-node-config.json
if errorlevel 1 goto :error
echo SDK generation completed.

REM Fix content-type issues in the generated API source and documentation
echo Applying post-generation fixes...
if exist "..\src\api\SecureFileShareApi.js" (
	powershell -NoProfile -Command "(Get-Content '..\src\api\SecureFileShareApi.js') | ForEach-Object { $_ -replace 'contentTypes = \[''\*_\/_\*;charset=utf-8', 'contentTypes = [''*/*;charset=utf-8' } | Set-Content '..\src\api\SecureFileShareApi.js'"
	if errorlevel 1 goto :error
	echo Fixed SecureFileShareApi.js
)

if exist "..\docs\SecureFileShareApi.md" (
	powershell -NoProfile -Command "(Get-Content '..\docs\SecureFileShareApi.md') | ForEach-Object { $_ -replace '\*\*Content-Type\*\*: \*_/_\*;charset=utf-8', '**Content-Type**: */*;charset=utf-8' } | Set-Content '..\docs\SecureFileShareApi.md'"
	if errorlevel 1 goto :error
	echo Fixed SecureFileShareApi.md
)
echo Post-generation fixes completed.

REM Restore specific files from git to preserve OAuth and other important components
echo Restoring preserved files from git...
git checkout ..\README.md 2>nul || echo Warning: Could not restore README.md
git checkout ..\package.json 2>nul || echo Warning: Could not restore package.json

git checkout ..\src\api\OAuthApi.js 2>nul || echo Warning: Could not restore OAuthApi.js
git checkout ..\src\model\AccessTokenResponse.js 2>nul || echo Warning: Could not restore AccessTokenResponse.js
git checkout ..\src\model\CreateAccessTokenRequest.js 2>nul || echo Warning: Could not restore CreateAccessTokenRequest.js
git checkout ..\src\model\BadRequestError.js 2>nul || echo Warning: Could not restore BadRequestError.js
git checkout ..\src\model\ResourceNotFoundError.js 2>nul || echo Warning: Could not restore ResourceNotFoundError.js
git checkout ..\src\model\UnauthorizedClientError.js 2>nul || echo Warning: Could not restore UnauthorizedClientError.js

git checkout ..\docs\OAuthApi.md 2>nul || echo Warning: Could not restore OAuthApi.md
git checkout ..\docs\AccessTokenResponse.md 2>nul || echo Warning: Could not restore AccessTokenResponse.md
git checkout ..\docs\CreateAccessTokenRequest.md 2>nul || echo Warning: Could not restore CreateAccessTokenRequest.md
git checkout ..\docs\BadRequestError.md 2>nul || echo Warning: Could not restore BadRequestError.md
git checkout ..\docs\ResourceNotFoundError.md 2>nul || echo Warning: Could not restore ResourceNotFoundError.md
git checkout ..\docs\UnauthorizedClientError.md 2>nul || echo Warning: Could not restore UnauthorizedClientError.md

git checkout ..\test\api\OAuthApi.spec.js 2>nul || echo Warning: Could not restore OAuthApi.spec.js
git checkout ..\test\model\AccessTokenResponse.spec.js 2>nul || echo Warning: Could not restore AccessTokenResponse.spec.js
git checkout ..\test\model\CreateAccessTokenRequest.spec.js 2>nul || echo Warning: Could not restore CreateAccessTokenRequest.spec.js
git checkout ..\test\model\BadRequestError.spec.js 2>nul || echo Warning: Could not restore BadRequestError.spec.js
git checkout ..\test\model\ResourceNotFoundError.spec.js 2>nul || echo Warning: Could not restore ResourceNotFoundError.spec.js
git checkout ..\test\model\UnauthorizedClientError.spec.js 2>nul || echo Warning: Could not restore UnauthorizedClientError.spec.js

git checkout ..\test\authentication\LoggingUtilities.spec.js 2>nul || echo Warning: Could not restore LoggingUtilities.spec.js
git checkout ..\test\authentication\JWTResponseMleAlg.spec.js 2>nul || echo Warning: Could not restore JWTResponseMleAlg.spec.js
git checkout ..\test\authentication\MLERequestEncryption.spec.js 2>nul || echo Warning: Could not restore MLERequestEncryption.spec.js

pause
exit /b 0

:error
echo SDK generation or post-processing failed.
pause
exit /b 1