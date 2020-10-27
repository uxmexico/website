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
        `gatsby-plugin-emotion`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: 'gatsby-source-wordpress-experimental',
            options: {
                url: 'https://data.uxmexico.org/graphql',
                schema: {
                    queryDepth: 5,
                    typePrefix: `Wp`,
                    timeout: 30000,
                },
                develop: {
                    nodeUpdateInterval: 3000,
                    hardCacheMediaFiles: false,
                },
                production: {
                    hardCacheMediaFiles: false,
                },
                html: {
                    // this causes the source plugin to find/replace images in html
                    useGatsbyImage: true,
                    // this adds a limit to the max width an image can be
                    // if the image selected in WP is smaller, or the image is smaller than this
                    // those values will be used instead.
                    imageMaxWidth: null,
                    // if a max width can't be inferred from html, this value will be passed to Sharp
                    // if the image is smaller than this, the images width will be used instead
                    fallbackImageMaxWidth: 100,
                    imageQuality: 90,
                },
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
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
        `gatsby-plugin-twitter`,
        `gatsby-plugin-sass`
    ],
};
