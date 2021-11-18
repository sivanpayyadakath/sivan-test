#!/bin/bash
# Purpose: Creates api docs for all microservices.

# bff-microservice
node_modules/.bin/ts-node ./api-docs/generate-swagger.ts --microservice_name=bff-microservice --title=Backend For Frontend Microservice 
# user-microservice
node_modules/.bin/ts-node ./api-docs/generate-swagger.ts --microservice_name=user-microservice --title=User Microservice
