import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/landing/hero"
import Content from "../components/landing/content"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" image="https://c4.wallpaperflare.com/wallpaper/959/357/209/artwork-minimalism-rocket-wallpaper-preview.jpg" />
    <Hero />
    <Content />
  </Layout>
)

export default IndexPage
