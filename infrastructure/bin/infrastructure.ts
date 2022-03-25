#!/usr/bin/env node
import 'source-map-support/register';
import { App, Stack, StackProps, aws_s3 as s3, aws_iam as iam, CfnParameter } from 'aws-cdk-lib';
import { Construct } from 'constructs';

const app = new App();

// instance name should be the branch name, in order to deploy a seperate instance for each branch
const instanceName = app.node.tryGetContext('instanceName');     

class InfrastructureStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucketName = `cicd-workshop-playground-${instanceName}`;
    const bucket = new s3.Bucket(this, bucketName, {bucketName});
    const tngIpRange = '193.30.133.7/32'
    bucket.addToResourcePolicy(new iam.PolicyStatement({
      sid: 'SourceIP', 
      actions: ['s3:*'], 
      resources: [`arn:aws:s3:::${bucketName}`, `arn:aws:s3:::${bucketName}/*`],
      principals: [new iam.PrincipalWithConditions(new iam.AnyPrincipal, {
        IpAddress: {
            'aws:SourceIp': tngIpRange
        }
      })]
    }));
  }
}

new InfrastructureStack(app, `cicd-workshop-playground-infrastructure-stack-${instanceName}`, {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  // env: { account: '123456789012', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});