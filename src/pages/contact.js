import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Links from "../components/links"
import contactimg from "../images/contact.svg"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" image="https://c4.wallpaperflare.com/wallpaper/959/357/209/artwork-minimalism-rocket-wallpaper-preview.jpg" />
    <section className="contact">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-8">
            <h1>Contact Details</h1>
            <p>
              Hi 👋 How are you? Thank you for visiting My Portfolio. If you
              have any inquiries or feedback, please don't hesitate to reach
              out. I am available at the following social media outlets:
            </p>
            <Links />
            <p>
              Also, currently available for freelance work. My scope of work
              includes but not limited to:
            </p>
            <ul>
              <li>Backend Development</li>
              <li>Application Programming Interface(API)</li>
              <li>Python Development</li>
              <li>Code Review & Testing</li>
              <li>Frontend Development</li>
            </ul>
          </div>
          <div className="col-lg-4 my-auto">
            <div className="img-container">
              <img src={contactimg} alt="contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage
