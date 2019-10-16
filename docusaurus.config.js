/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Orientation to App Mesh',
  tagline: 'Improve control, monitoring, and reliability of your microservice applications on AWS',
  url: 'https://subfuzion.github.io',
  baseUrl: '/appmesh.dev/',
  favicon: 'img/favicon.ico',
  organizationName: 'subfuzion',
  projectName: 'appmesh.dev',
  themeConfig: {
    navbar: {
      title: 'appmesh.dev',
      logo: {
        alt: 'appmesh logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/introduction', label: 'Docs', position: 'right'},
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/subfuzion/appmesh.dev/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/WY65Uv8',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      logo: {
        alt: 'Tony Pujals Logo',
        src: 'img/tonypujals.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Tony Pujals.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
