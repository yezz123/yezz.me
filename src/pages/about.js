import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <SEO title="About" image="https://c4.wallpaperflare.com/wallpaper/959/357/209/artwork-minimalism-rocket-wallpaper-preview.jpg" />
    <section className="about">
      <div className="container">
        <div className="row my-4 justify-content-center">
          <div className="col-lg-7 my-auto">
            <div className="card shadow-2xl">
              <div className="card-body">
                <div className="card-title">
                  <h2>About me 👨‍💻</h2>
                </div>

                <div className="card-text">
                  Experienced Backend developer, API Ninja, and OpenSource
                  Lover, mostly self-taught, and very passionate about new
                  technologies.
                  <br />
                  My strongest skills lie within Python | JavaScript, both
                  backends ⚡.
                  <br />
                  <br />I can learn quickly anything thrown at me, I am flexible
                  & Comfortable with new technologies and I can work with them
                  faster than Speedy Gonzales.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 my-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-title">
                  <h2>Passion 🌍</h2>
                </div>

                <div className="card-text">
                  Besides technology, I am more passionate about new Ideas and
                  new ways of Thinking.
                  <br />
                  <br />I like watching and reading all the things that relate
                  to Ancient Greece, As examples the Dark Ages of the 12th–9th
                  centuries also the Ancient Greek philosophy, Socrates,
                  Aristotle my greatest philosopher of all the time.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 my-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-title">
                  <h2>Mindset 🧠</h2>
                </div>

                <div className="card-text">
                  Back to the world of 0's and 1's, One of those book that made
                  me love that world is&nbsp;
                  <a
                    href="https://g.co/kgs/MpXYRt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Social Engineering: The Art of Human Hacking by Christopher
                    J. Hadnagy.
                  </a>
                  <br />
                  <br />
                  <i>
                    &#34;From elicitation, pre-texting, influence and
                    manipulation all aspects of social engineering are picked
                    apart, discussed and explained by using real world examples,
                    personal experience and the science behind them to unraveled
                    the mystery in social engineering.&#34;
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)
export default AboutPage
