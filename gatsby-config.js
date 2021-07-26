module.exports = {
    siteMetadata: {
        title: 'Yasser Tahiri - Portfolio',
        author: 'Yasser Tahiri',
        description: 'My personal website 🚀',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Yasser Tahiri - Portfolio',
                short_name: 'Portfolio',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/assets/img/website-icon.png', // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-sass',
    ],
}
