module.exports = {
    siteMetadata: {
        title: `UX México`,
        description: `UX México es una comunidad enfocada a mejorar la calidad del Desarrollo mexicano brindando fácil acceso a las últimas prácticas y consejos de Usabilidad.`,
        author: `@uxmexico`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: "gatsby-source-wordpress",
            options: {
                baseUrl: 'uxmexico.test',
                protocol: 'http',
                hostingWPCOM: false,
                useACF: true,
                includedRoutes: [
                    "**/posts",
                    "**/pages",
                    "**/events",
                    "**/media",
                    "**/categories",
                    "**/taxonomies",
                    "**/tags",
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `UX Mexico`,
                short_name: `uxmexico`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/logo-uxmexico.svg`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-emotion`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
