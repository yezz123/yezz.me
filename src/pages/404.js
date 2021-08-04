import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import notfoundimg from "../images/notfound.svg"

const Page404 = () => (
  <Layout>
    <SEO
      title="Page Not Found"
      image="https://c4.wallpaperflare.com/wallpaper/959/357/209/artwork-minimalism-rocket-wallpaper-preview.jpg"
    />
    <section className="page404">
      <div className="container">
        <div className="row row-404 mt-4 float-right">
          <div className="img-container">
            <img src={notfoundimg} alt="404" />
          </div>
        </div>
        <div className="row row-404 mt-5 ml-5">
          <h1>404</h1>
          <h2>There's nothing here</h2>
          <p>
            Oops! The page you are looking for does not exist or still in
            development mode.
          </p>
          <br />
        </div>
      </div>
    </section>
  </Layout>
)

export default Page404
