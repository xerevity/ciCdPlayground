pipeline {
    agent any

    tools {
        nodejs 'yarn'
    }

    parameters {
        string(name: 'Version', defaultValue: '1.0.0', description: 'Please provide version number.')
        booleanParam defaultValue: true, name: 'Deploy'
    }

    options {
        buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '12')
    }

    triggers {
        cron 'H/5 * * * *'
    }

    stages {
        stage('checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/cjhappTNG/ciCdPlayground'
                script {
                    currentBuild.displayName = 'displayName'
                    currentBuild.description = "${params.Version}"
                }
            }
        }
        stage('install') {
            steps {
                sh 'yarn'
            }
        }
        stage('test') {
            steps {
                sh 'yarn test'
            }
        }
        stage('build') {
            steps {
                sh 'yarn build'
            }
        }
        stage('deploy') {
            when {
                expression { return params.Deploy }
            }
            steps {
                s3Upload consoleLogLevel: 'INFO', 
                  dontSetBuildResultOnFailure: false, 
                  dontWaitForConcurrentBuildCompletion: false, 
                  entries: [[
                      bucket: "cicd-workshop-playground/${env.BRANCH_NAME}-${params.Version}", 
                      excludedFile: '', 
                      flatten: false, 
                      gzipFiles: false, 
                      keepForever: false, 
                      managedArtifacts: false, 
                      noUploadOnFailure: false, 
                      selectedRegion: 'eu-central-1', 
                      showDirectlyInBrowser: false, 
                      sourceFile: 'public/**/*.*', 
                      storageClass: 'STANDARD', 
                      uploadFromSlave: false, 
                      useServerSideEncryption: false
                    ]], 
                    pluginFailureResultConstraint: 'FAILURE', 
                    profileName: 'role-based-access', 
                    userMetadata: []
            }
        }
    }
}
