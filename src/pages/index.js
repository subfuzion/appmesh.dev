/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Traffic Routing</>,
    imageUrl: 'img/appmesh-logo.svg',
    description: (
      <>
        App Mesh makes it easy to control and shape network traffic, supporting common deployment
        strategies, including Canary releases, Blue-Green deployments, and A/B testing.
      </>
    ),
  },
  {
    title: <>Observability</>,
    imageUrl: 'img/monitoring.svg',
    description: (
      <>
        Because all traffic flows through Envoy proxies, App Mesh delivers
        enhanced end-to-end monitoring and traceability of your microservice traffic,
        with a uniform strategy for capturing logs, metrics, and distributed traces.
      </>
    ),
  },
  {
    title: <>Powered by AWS</>,
    imageUrl: 'img/aws-logo.svg',
    description: (
      <>
        The App Mesh control plane was built specifically by AWS to meet the scale, performance,
        and simplicity expectations of its customers running their microservice
        applications on ECS, EKS, EC2, and Fargate.
      </>
    ),
  },
];

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={withBaseUrl('docs/introduction')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({imageUrl, title, description}, idx) => (
                  <div
                    key={idx}
                    className={classnames('col col--4', styles.feature)}>
                    {imageUrl && (
                      <div className="text--center">
                        <img
                          className={styles.featureImage}
                          src={withBaseUrl(imageUrl)}
                          alt={title}
                        />
                      </div>
                    )}
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
