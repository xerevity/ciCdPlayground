# The playground
This is intended to be a minimal project for a CI/CD workshop.
It consists of a simple JavaScript project, some unit and integration tests, and a Jenkinsfile for initial deployment.

## Setup
Yarn is recommended, but corresponding npm commands should work, too.

To install dependencies run `yarn`

Serve at localhost:8081 with `yarn dev`

Run tests with `yarn test` and `yarn test:e2e`

## Provisioning
In the workshop infrastructure we provision a S3 bucket 'cicd-workshop-playground' 
and give the Jenkins instance write access to it. 
Thus, the s3Upload plugin for Jenkins can deploy to the bucket.
After running Jenkinsfile_deploy the app is accessible at 
https://cicd-workshop-playground.s3.amazonaws.com/$GITHUB_USERNAME/index.html

