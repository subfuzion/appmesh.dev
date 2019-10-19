# appmesh.dev

This is the repo for [appmesh.dev](https://appmesh.dev). The docs, blog posts, and source code for this site have been created to provide an orientation to App Mesh, a service mesh developed at Amazon to help developers better control and monitor their microservice applications running on AWS.

## Color App

All source code, scripts, and templates are under the `colorapp` directory. See **Getting Started** in the guide for running the demo using a simple CLI application.


## Website

The appmesh.dev website is built using Docusaurus 2, a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=1 yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

