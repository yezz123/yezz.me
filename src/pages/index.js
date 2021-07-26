import React from 'react'
import Layout from '../components/layout'

{
    /*Section Intro*/
}
const IndexPage = () => (
    <Layout>
        <section className="intro">
            <header>
                <h1>Yasser Tahiri</h1>
                <p>
                    My Friends call me <strong>Yezz123</strong>
                    <br />
                    Check my <a href="https://blog.yezz.me/">blog</a>{' '}
                </p>
            </header>
            <div className="content">
                <span className="image fill" data-position="center">
                    <img src={pic01} alt="" />
                </span>
            </div>
        </section>

        {/*Section About Me*/}
        <section id="about">
            <header>
                <h2>About Me</h2>
            </header>
            <div className="content">
                <p>
                    I am an experienced Backend developer | OSS Developer. I am
                    mostly self-taught, and I am very passionate about new
                    technologies. My strongest skills lie within
                    Python/JavaScript, both backends.
                    <sub>
                        <a href="https://bit.ly/3ejQLYz" target="_blank">
                            Resume
                        </a>
                    </sub>
                </p>
                <p>
                    I can learn quickly anything thrown at me, I am flexible &
                    Comfortable with new technologies and I can work with them
                    faster than Speedy Gonzales.
                </p>
                <p>
                    Besides technology, I am more passionate about new Ideas and
                    new ways of Thinking.
                </p>
                <p>
                    Relate to My Passion, I like watching and reading all the
                    things that relate to Ancient Greece, As examples the Dark
                    Ages of the 12th–9th centuries also the Ancient Greek
                    philosophy, Socrates, Aristotle my greatest philosopher of
                    all the time.
                </p>
                <p>
                    Back to the world of 0's and 1's, One of those book that
                    made me love that world is &nbsp;
                    <a href="https://g.co/kgs/MpXYRt" target="_blank">
                        Social Engineering: The Art of Human Hacking by
                        Christopher J. Hadnagy.
                    </a>
                </p>
                <blockquote>
                    <p>
                        &#34;From elicitation, pre-texting, influence and
                        manipulation all aspects of social engineering are
                        picked apart, discussed and explained by using real
                        world examples, personal experience and the science
                        behind them to unraveled the mystery in social
                        engineering.&#34;
                    </p>
                </blockquote>
            </div>
        </section>

        {/*Language & Technology*/}
        <section>
            <header>
                <h2>Language & Technology</h2>
            </header>
            <div className="content">
                <p>
                    As a Back-end Developer and Open Source Developer, I work
                    mainly with Different languages and Frameworks to add value
                    by crafting softwares.
                </p>
                <p>
                    My preferred language is <strong>Python</strong>. Strongly
                    typed, beautifully designed, has nearly every major language
                    feature you could ever want, Category of great frameworks,
                    cross platform, and can be used for damn near anything.
                </p>
                <h3>Languages</h3>
                <ul className="feature-icons">
                    <li className="icon solid fa-scroll">Python</li>
                    <li className="icon solid fa-hat-wizard">JavaScript</li>
                    <li className="icon solid fa-code">C Lang</li>
                    <li className="icon solid fa-terminal">
                        Shell Script | Bash
                    </li>
                </ul>
                <h3>Framework</h3>
                <ul className="feature-icons">
                    <li className="icon solid fa-language">Django</li>
                    <li className="icon solid fa-user-ninja">Flask</li>
                    <li className="icon solid fa-bolt">FastAPI</li>
                    <li className="icon solid fa-paper-plane">NodeJS</li>
                </ul>
                <h3>Database</h3>
                <ul className="feature-icons">
                    <li className="icon solid fa-database">PostgreSQL</li>
                    <li className="icon solid fa-bolt">SQLite</li>
                    <li className="icon solid fa-server">MongoDB</li>
                </ul>
                <h3>Security</h3>
                <ul className="feature-icons">
                    <li className="icon solid fa-file-signature">
                        Code Security
                    </li>
                    <li className="icon solid fa-shield-alt">Vulnerability</li>
                    <li className="icon solid fa-key">Encryption</li>
                </ul>
            </div>
        </section>

        {/*Project*/}
        <section>
            <header>
                <h2>Project</h2>
            </header>
            <div className="content">
                <section id="activity">
                    <header>
                        <h3>Contribution activity</h3>
                        <p>
                            <a href="https://gdgsnf.tech" target="_blank">
                                GDGSNF
                            </a>{' '}
                            A Non-Profit Organization OSS, Help small Business
                            with a Free & public Project for maintaining their
                            Services.
                        </p>
                        <p>
                            <a
                                href="https://bnademoverflow.com"
                                target="_blank"
                            >
                                BnademOverFlow
                            </a>
                            A great community with genius people who love to be
                            beside the computer and understand how it works, we
                            are into a new challenge like creating Twil-Platform
                            where we can write articles, make videos and live
                            streams and make them accessible to the public.
                        </p>
                    </header>
                    <div class="content">
                        <h3>OpenSource project</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/yezz123/Phisher"
                                    target="_blank"
                                >
                                    Phisher
                                </a>
                                &nbsp; Tool designed for performing various
                                social engineering attacks. For phishing, set
                                allows for sending phishing Websites to get
                                Info. 🏆
                            </li>
                            <li>
                                <a
                                    href="https://github.com/yezz123/DogeAPI"
                                    target="_blank"
                                >
                                    DogeAPI
                                </a>
                                &nbsp; API with high performance to create a
                                simple blog and Crud with OAuth2PasswordBearer &
                                JWT. 🔏
                            </li>
                            <li>
                                <a
                                    href="https://github.com/yezz123/Athena"
                                    target="_blank"
                                >
                                    Athena
                                </a>
                                &nbsp; is a web application developed in
                                Python-Flask-SQLite for testing your skills as a
                                Hacker, Coder and Warrior. 🚀
                            </li>
                            <li>
                                <a
                                    href="https://github.com/yezz123/Nectus"
                                    target="_blank"
                                >
                                    Nectus
                                </a>
                                &nbsp; A boilerplate Flask API for a Fullstack
                                Project with some additional packages and
                                configuration prebuilt. 👻
                            </li>
                            <li>
                                <a
                                    href="https://github.com/GDGSNF/My-Business"
                                    target="_blank"
                                >
                                    My-Business
                                </a>
                                &nbsp; is a business management tool featuring
                                accounts, invoices, partners, projects, and
                                server. 🎉
                            </li>
                        </ul>
                        <p>
                            Check more about Projects I created, worked on or
                            collaborated in{' '}
                            <a
                                href="https://github.com/yezz123"
                                target="_blank"
                            >
                                Github Profile
                            </a>
                            .
                        </p>
                    </div>
                </section>
            </div>
        </section>

        <section id="Exp&Edu">
            <header>
                <h2>Experience</h2>
            </header>
            <div class="content">
                <br />
                <h5>
                    OpenSource Developer at{' '}
                    <a href="https://github.com/yezz123">Github</a> - FullTime
                </h5>
                <p>
                    When I start learning Coding, I was motivated to code more
                    than one OSS project and drop it on my GitHub profile
                    Helping myself at the same time in the Learning process and
                    work on building myself and build my professional background
                    as a developer and IT Security.
                </p>
                <h5>
                    Backend Developer at{' '}
                    <a href="https://ontwik-dev.com/">Ontwik</a> - Freelance
                </h5>
                <p>
                    As a Backend Developer, doing some Freelance and being
                    self-employed is a good motivation that helps me upgrade my
                    skills and get new & more Knowledge about technologies that
                    IT Stacks & People are close to it. <br />
                    <br />
                    That is why I choose Ontwik, a good platform with a high
                    process that connects businesses of all sizes to
                    freelancers, independent professionals, and agencies for all
                    their hiring needs.
                </p>
                <h5>
                    Internship Trainee at{' '}
                    <a href="http://www.infomarket-meknes.com/">InfoMarket</a> -
                    Internship
                </h5>
                <p>
                    My role as a trainee is to help InfoMarket creating a
                    website that generates a Passbook in a PDF template with
                    NodeJS and MySQL for the Back-end side & the website with
                    some React. JS & Native JS for the Front-end side. <br />
                    <br />
                    This was a great experience for me, I learn new stacks
                    during this internship and I got a good review from the
                    co-workers.
                </p>
            </div>
        </section>

        <section id="Exp&Edu">
            <header>
                <h2>Education</h2>
            </header>
            <div class="content">
                <br />
                <h5>
                    Specialized Institute of Applied Technology Management Bab
                    Tizimi 2019 - 2021
                </h5>
                <p>
                    The "Skilled Technician in Software Development" is a
                    support professional development and maintenance of computer
                    applications.
                </p>
                <h5>
                    high school degree in physical and chemical sciences, Moulay
                    Ismail High School 2016 - 2019
                </h5>
                <p>
                    During the 3 years of my studying in high school helped me
                    learn a lot and gave me a correct way to build my career, as
                    an IT Developer.
                </p>
            </div>
        </section>

        <section>
            <header>
                <h2>Get in touch</h2>
            </header>
            <div className="content">
                <p>
                    Let's create your next experience together! <br />
                    Connect with me on my Email or Social Media and let's
                    Discuss The Project.
                </p>
                <ul className="actions">
                    <li>
                        <a
                            href="mailto:yasserth19@gmail.com"
                            className="button primary large"
                        >
                            Get Started
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://blog.yezz.me/"
                            className="button large"
                            target="_blank"
                        >
                            Blog
                        </a>
                    </li>
                </ul>
            </div>
            <footer>
                <ul className="items">
                    <li>
                        <h3>Social Media</h3>
                        <ul class="icons">
                            <li>
                                <a
                                    href="https://t.me/yezz123"
                                    class="icon brands fa-telegram-plane"
                                    target="_blank"
                                >
                                    <span class="label">Telegram</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/yezz123/"
                                    class="icon brands fa-linkedin-in"
                                    target="_blank"
                                >
                                    <span class="label">LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/THyasser1"
                                    class="icon brands fa-twitter"
                                    target="_blank"
                                >
                                    <span class="label">Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/yezz123"
                                    class="icon brands fa-github"
                                    target="_blank"
                                >
                                    <span class="label">GitHub</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://stackoverflow.com/users/12927850/yasser-th"
                                    class="icon brands fa-stack-overflow"
                                    target="_blank"
                                >
                                    <span class="label">StackOverFlow</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </footer>
        </section>

        <div className="copyright">
            &copy;2021. Open Sourced on{' '}
            <a
                href="https://github.com/yezz123/yezz123.github.io"
                target="_blank"
            >
                Github
            </a>{' '}
            | All rights reserved To <a href="https://yezz.me">Yezz123</a>
        </div>
    </Layout>
)

export default IndexPage
