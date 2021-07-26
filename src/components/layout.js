import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import '../assets/sass/main.scss'

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={(data) => (
            <>
                <Helmet
                    title={data.site.siteMetadata.title}
                    meta={[
                        {
                            name: 'description',
                            content:
                                'experienced Backend developer and OSS Developer, mostly self-taught, and very passionate about new technologies. My strongest skills lie within Python/JavaScript, both backends.',
                        },
                        {
                            name: 'keywords',
                            content: 'ReactJS, Gatsby, yezz123',
                        },
                        { name: 'author', content: 'Yasser Tahiri' },
                        {
                            name: 'og:title',
                            content: data.site.siteMetadata.title,
                        },
                        {
                            name: 'og:description',
                            content:
                                'experienced Backend developer and OSS Developer, mostly self-taught, and very passionate about new technologies. My strongest skills lie within Python/JavaScript, both backends.',
                        },
                        { name: 'og:url', content: 'https://yezz.me/' },
                        {
                            name: 'og:image',
                            content:
                                'https://avatars.githubusercontent.com/u/52716203?s=400&u=5b177e454d03b55a9ce8cf02d8673ec212f04190&v=4',
                        },
                        { name: 'og:type', content: 'website' },
                        {
                            name: 'og:site_name',
                            content: 'Yasser Tahiri - Portfolio',
                        },
                        { name: 'twitter:card', content: 'summary' },
                        { name: 'twitter:site', content: '@THyasser1' },
                        {
                            name: 'twitter:title',
                            content: data.site.siteMetadata.title,
                        },
                        {
                            name: 'twitter:description',
                            content:
                                'experienced Backend developer and OSS Developer, mostly self-taught, and very passionate about new technologies. My strongest skills lie within Python/JavaScript, both backends.',
                        },
                        {
                            name: 'twitter:image',
                            content:
                                'https://avatars.githubusercontent.com/u/52716203?s=400&u=5b177e454d03b55a9ce8cf02d8673ec212f04190&v=4',
                        },
                        { name: 'twitter:card', content: 'summary' },
                        { name: 'twitter:site', content: '@THyasser1' },
                        { name: 'twitter:creator', content: '@THyasser1' },
                        { name: 'twitter:domain', content: 'gdgsnf.github.io' },
                    ]}
                >
                    <html lang="en" />
                </Helmet>
                <div id="wrapper">{children}</div>
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
