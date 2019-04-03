let collapsable = true;

module.exports = {
    title: 'App Mesh Guide',
    description: 'Up and Running with AWS App Mesh',
    base: '/appmesh-guide/',
    ga: 'UA-133644962-1',
    markdown: {
      lineNumbers: true
    },
    plugins: [
        '@vuepress/active-header-links',
        '@vuepress/back-to-top',
        '@vuepress/medium-zoom'
    ],
    themeConfig: {
        sidebar: [
            {
                title: "Introduction",
                collapsable: collapsable,
                children: [
                    "/introduction/"
                ]
            },
            {
                title: "Concepts",
                collapsable: collapsable,
                children: [
                    "/concepts/"
                ]
            },
            {
                title: "Setup",
                collapsable: collapsable,
                children: [
                    "/setup/"
                ]
            },
            {
                title: "ECS",
                collapsable: collapsable,
                children: [
                    "/ecs/"
                ]
            },
            {
                title: "EKS",
                collapsable: collapsable,
                children: [
                    "/eks/"
                ]
            }
        ]
    }
};
