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
        stage('Matrix') {
            matrix {
                axes {
                    axis {
                        name 'TEST_TYPE'
                        values 'test', 'test:e2e'
                    }
                }
                stages {
                    stage('Testing') {
                        steps {
                            sh 'yarn ${TEST_TYPE}'
                        }
                    }
                }
            }
        }
        stage('deploy') {
            when {
                expression { return params.Deploy }
            }
            steps {
                cd './infrastructure'
                sh """yarn
                     |yarn build
                     |yarn cdk deploy --require-approval never --context instanceName=${GITHUB_REF_NAME}""".stripMargin()
            }
        }
    }
}