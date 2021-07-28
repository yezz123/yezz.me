module.exports = {
    siteMetadata: {
        title: 'Yasser Tahiri - Portfolio',
        author: 'Yasser Tahiri',
        description: 'My personal website 🚀',
        siteUrl: 'https://yezz.me/',
        social: {
            twitter: 'THyasser1',
            github: 'yezz123',
        },
        twitter: 'THyasser1',
        favicon: 'src/assets/img/website-icon.png',

    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Yasser Tahiri - Portfolio',
                short_name: 'Portfolio',
                description: 'Experienced Backend developer. I am mostly self-taught, and I am very passionate about new technologies.',
                start_url: '/',
                orientation: 'portrait',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/assets/img/website-icon.png', // This path is relative to the root of the site.
            },
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-offline'
    ],
}
