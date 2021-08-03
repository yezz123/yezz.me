module.exports = {
  siteMetadata: {
    title: `Yasser Tahiri`,
    description: `Experienced Backend Developer, OpenSource Lover, Mostly self-taught, and very passionate about new technologies.`,
    author: `@yezz123`,
    siteUrl: "https://yezz.me/",
    social: {
      twitter: "THyasser1",
      github: "yezz123",
    },
    twitter: "THyasser1",
    favicon: "src/images/favicon.png",
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yasser Tahiri`,
        short_name: `yezz`,
        description: `Experienced Backend Developer, OpenSource Lover, Mostly self-taught, and very passionate about new technologies.`,
        start_url: `/`,
        background_color: `#082032`,
        theme_color: `#082032`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
  ],
}
