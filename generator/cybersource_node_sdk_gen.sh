#!/bin/bash

# Exit on any error
set -e

# Change to the directory where this script is located
cd "$(dirname "$0")"

echo "Starting CyberSource Node.js SDK generation..."

# Delete the previously generated SDK code
echo "Cleaning up previously generated code..."

if [ -d "../docs" ]; then
    rm -rf ../docs
    echo "Removed ../docs"
fi

if [ -d "../src/api" ]; then
    rm -rf ../src/api
    echo "Removed ../src/api"
fi

if [ -d "../src/model" ]; then
    rm -rf ../src/model
    echo "Removed ../src/model"
fi

if [ -d "../test" ]; then
    rm -rf ../test
    echo "Removed ../test"
fi

echo "Cleanup completed."

# Command to generate SDK
echo "Generating SDK using Swagger Codegen..."
java -jar swagger-codegen-cli-2.4.38.jar generate -t cybersource-javascript-template -i cybersource-rest-spec.json -l javascript -o ../ -c cybersource-node-config.json

echo "SDK generation completed."

# Fix content-type issues in SecureFileShareApi.js
echo "Applying post-generation fixes..."
if [ -f "../src/api/SecureFileShareApi.js" ]; then
    perl -i.bak -pe "s/'\\*_\\/_\\*;charset=utf-8'/'*\\/\\*;charset=utf-8'/g" ../src/api/SecureFileShareApi.js
    rm -f ../src/api/SecureFileShareApi.js.bak
    echo "Fixed SecureFileShareApi.js"
fi

# Fix content-type issues in SecureFileShareApi.md
if [ -f "../docs/SecureFileShareApi.md" ]; then
    perl -i.bak -pe 's/\*\*Content-Type\*\*: \*_\/_\*;charset=utf-8/**Content-Type**: *\/*;charset=utf-8/g' ../docs/SecureFileShareApi.md
    rm -f ../docs/SecureFileShareApi.md.bak
    echo "Fixed SecureFileShareApi.md"
fi

echo "Post-generation fixes completed."

# Restore specific files from git to preserve OAuth and other important components
echo "Restoring preserved files from git..."

# Restore main files
git checkout ../README.md 2>/dev/null || echo "Warning: Could not restore README.md"
git checkout ../package.json 2>/dev/null || echo "Warning: Could not restore package.json"

# Restore OAuth API files
git checkout ../src/api/OAuthApi.js 2>/dev/null || echo "Warning: Could not restore OAuthApi.js"
git checkout ../src/model/AccessTokenResponse.js 2>/dev/null || echo "Warning: Could not restore AccessTokenResponse.js"
git checkout ../src/model/CreateAccessTokenRequest.js 2>/dev/null || echo "Warning: Could not restore CreateAccessTokenRequest.js"
git checkout ../src/model/BadRequestError.js 2>/dev/null || echo "Warning: Could not restore BadRequestError.js"
git checkout ../src/model/ResourceNotFoundError.js 2>/dev/null || echo "Warning: Could not restore ResourceNotFoundError.js"
git checkout ../src/model/UnauthorizedClientError.js 2>/dev/null || echo "Warning: Could not restore UnauthorizedClientError.js"

# Restore OAuth documentation files
git checkout ../docs/OAuthApi.md 2>/dev/null || echo "Warning: Could not restore OAuthApi.md"
git checkout ../docs/AccessTokenResponse.md 2>/dev/null || echo "Warning: Could not restore AccessTokenResponse.md"
git checkout ../docs/CreateAccessTokenRequest.md 2>/dev/null || echo "Warning: Could not restore CreateAccessTokenRequest.md"
git checkout ../docs/BadRequestError.md 2>/dev/null || echo "Warning: Could not restore BadRequestError.md"
git checkout ../docs/ResourceNotFoundError.md 2>/dev/null || echo "Warning: Could not restore ResourceNotFoundError.md"
git checkout ../docs/UnauthorizedClientError.md 2>/dev/null || echo "Warning: Could not restore UnauthorizedClientError.md"

# Restore OAuth test files
git checkout ../test/api/OAuthApi.spec.js 2>/dev/null || echo "Warning: Could not restore OAuthApi.spec.js"
git checkout ../test/model/AccessTokenResponse.spec.js 2>/dev/null || echo "Warning: Could not restore AccessTokenResponse.spec.js"
git checkout ../test/model/CreateAccessTokenRequest.spec.js 2>/dev/null || echo "Warning: Could not restore CreateAccessTokenRequest.spec.js"
git checkout ../test/model/BadRequestError.spec.js 2>/dev/null || echo "Warning: Could not restore BadRequestError.spec.js"
git checkout ../test/model/ResourceNotFoundError.spec.js 2>/dev/null || echo "Warning: Could not restore ResourceNotFoundError.spec.js"
git checkout ../test/model/UnauthorizedClientError.spec.js 2>/dev/null || echo "Warning: Could not restore UnauthorizedClientError.spec.js"
