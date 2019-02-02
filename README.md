# App Mesh Workshop

This is the repo for building the App Mesh workshop. It uses
[VuewPress] for generating the static website hosted on GitHub.

For editing and serving the workshop docs locally, ensure that
you have [Node] (version >= 8) installed on your system.

To run the local server during editing:

    $ npm run docs:dev

Open a brower window and navigate to: http://localhost:8080/
    
To build the doc assets:

    $ npm run docs:build

This will generate the static site under `docs/.vuepress`.


[Node]:     https://nodejs.org/
[VuePress]: https://vuepress.vuejs.org/
