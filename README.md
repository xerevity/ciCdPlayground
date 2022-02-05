# The playground
This is intended to be a minimal project for a CI/CD workshop.
It consists of a simple JavaScript project (basically the Svelte hello world), one trivial test, and configuration for some different CI/CD tools.

# The tools
## Github Actions
Running out of the box on, well, Github, see `.github`.
## TeamCity
Requires a TeamCity server, e.g. https://hub.docker.com/r/jetbrains/teamcity-server.
Due to issues with TeamCity's docker wrapper in some dockerised agents, it requires an agent with locally installed yarn. See `.teamcity`.
