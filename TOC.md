# Table of contents

* [Preface](./docs/README.md)
* [Contributing](./docs/contributing.md)

## App Mesh Overview

* [App Mesh at a glance](./docs/app-mesh-at-a-glance/README.md)
  * [Traffic Management](./docs/app-mesh-at-a-glance/traffic-management/)
    * [Service Discovery](./docs/app-mesh-at-a-glance/traffic-management/service-discovery.md)
    * [Routing](./docs/app-mesh-at-a-glance/traffic-management/routing.md)
  * [Observability](./docs/app-mesh-at-a-glance/observability/)
    * [Logs](./docs/app-mesh-at-a-glance/observability/logs.md)
    * [Metrics](./docs/app-mesh-at-a-glance/observability/metrics.md)
    * [Distributed Tracing](./docs/app-mesh-at-a-glance/observability/distributed-tracing.md)

## App Mesh Orientation

* [The Color App](./docs/reference-example/the-color-app/)
  * [The mesh configuration](./docs/reference-example/the-color-app/the-color-app-mesh-resources.md)
  * [Full demo walkthrough](./docs/reference-example/the-color-app/full-demo-walkthrough.md)

## App Mesh with Different AWS Environments

* [What you need to know](./docs/deployments/what-you-need-to-know.md)
* [Clusters](./docs/deployments/clusters/)
  * [Fargate](./docs/deployments/clusters/deploy-to-fargate.md)
  * [ECS \(EC2 launch type\)](./docs/deployments/clusters/deploy-to-ecs.md)
  * [EKS](./docs/deployments/clusters/deploy-to-eks.md)
  * [EC2](./docs/deployments/clusters/deploy-to-ec2.md)
  * [Multi-cluster Environment](./docs/deployments/clusters/bridging-compute-services.md)

## App Mesh HOW-TO

* [Getting Started](./docs/tasks/prerequisites/)
  * [Prerequisites](./docs/tasks/prerequisites/prerequisites.md)
  * [Deploy demo VPC](./docs/tasks/prerequisites/deploy-the-color-app-vpc.md)
  * [Deploy demo without a mesh](./docs/tasks/prerequisites/deploy-the-demo-without-a-mesh.md)
* [Traffic Management](./docs/tasks/traffic-management/)
  * [Service Discovery](./docs/tasks/traffic-management/service-discovery/)
    * [DNS discovery](./docs/tasks/traffic-management/service-discovery/use-dns-discovery.md)
    * [Cloud Map discovery](./docs/tasks/traffic-management/service-discovery/use-cloud-map-discovery.md)
  * [Routing](./docs/tasks/traffic-management/routing/)
    * [Weighted Targets](./docs/tasks/traffic-management/routing/weighted-targets.md)
    * [Path-based Routing](./docs/tasks/traffic-management/routing/path-based-routing.md)
    * [Deployment strategies](./docs/tasks/traffic-management/routing/common-deployment-strategies/)
      * [Blue-Green deployment](./docs/tasks/traffic-management/routing/common-deployment-strategies/blue-green-deployment.md)
      * [Canary release](./docs/tasks/traffic-management/routing/common-deployment-strategies/canary-release.md)
      * [A/B Testing](./docs/tasks/traffic-management/routing/common-deployment-strategies/a-b-testing.md)
    * [Migration Strategies](./docs/tasks/traffic-management/routing/migration-strategies/)
      * [Migrating a Monolith](./docs/tasks/traffic-management/routing/migration-strategies/migrate-from-ec2-to-ecs.md)
* [Observability](./docs/tasks/observability/)
  * [Logs](./docs/tasks/observability/logs/)
    * [CloudWatch](./docs/tasks/observability/logs/request-logs-with-cloudwatch.md)
  * [Metrics](./docs/tasks/observability/metrics/)
    * [CloudWatch](./docs/tasks/observability/metrics/metrics-with-cloudwatch.md)
    * [Prometheus & Grafana](./docs/tasks/observability/metrics/metrics-with-prometheus-and-grafana.md)
  * [Distributed tracing](./docs/tasks/observability/distributed-tracing/)
    * [X-Ray](./docs/tasks/observability/distributed-tracing/distributed-tracing-with-x-ray.md)
    * [Zipkin](./docs/tasks/observability/distributed-tracing/distributed-tracing-with-zipkin.md)
    * [Jaegar](./docs/tasks/observability/distributed-tracing/distributed-tracing-with-jaegar.md)
* [Using the AWS Console](./docs/tasks/using-the-aws-console/)
  * [Mesh-enable ECS tasks](./docs/tasks/using-the-aws-console/use-console-to-enable-mesh.md)

