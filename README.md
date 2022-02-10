# The playground
This is intended to be a minimal project for a CI/CD workshop.
It consists of a simple JavaScript project, one trivial test, and configuration for some CI/CD tools.

## Setup
Yarn is recommended, but corresponding npm commands should work, too.
To install dependencies run
`yarn`
Serve at localhost:8080 with
`yarn dev`
Run tests with
`yarn test`
and
`yarn test:e2e`

# The tools
## Github Actions
Running out of the box on, well, Github, see `.github`.
## TeamCity
Requires a TeamCity server, e.g. https://hub.docker.com/r/jetbrains/teamcity-server.
Due to issues with TeamCity's docker wrapper in some dockerised agents, an agent with locally installed yarn is required. See `.teamcity`.
