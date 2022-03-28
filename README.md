# The playground
This is intended to be a minimal project for a CI/CD workshop.
It consists of a simple JavaScript project, one trivial test, and configuration for some CI/CD tools.

## Setup
Yarn is recommended, but corresponding npm commands should work, too.

To install dependencies run `yarn`

Serve at localhost:8080 with `yarn dev`

Run tests with `yarn test` and `yarn test:e2e`

## Provisioning
The `infrastructure` directory contains a CDK app that can provision a S3 bucket from which the playground can be served. Typically a deployment job would first provision a bucket via CDK and afterwards deploy to that bucket via AWS CLI.
Requirements:
 * IAM role with approprate permission, see `policy-for-deployment-role.json`
 * credentials for this role provided as secrets in the CI/CD pipeline

# The tools
## Github Actions
Running out of the box on, well, Github, see `.github`.
## TeamCity WIP
Requires a TeamCity server, e.g. https://hub.docker.com/r/jetbrains/teamcity-server.
Due to issues with TeamCity's docker wrapper in some dockerised agents, an agent with locally installed yarn is required. See `.teamcity`.
