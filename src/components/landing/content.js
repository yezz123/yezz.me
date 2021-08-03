import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBriefcase,
  faCalendar,
  faGraduationCap,
  faUserGraduate,
  faCode,
  faUserNinja,
  faTag,
} from "@fortawesome/free-solid-svg-icons"

export default class Content extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query projectsQuery {
            allProjectsJson {
              edges {
                node {
                  project
                  link
                  description
                  language
                }
              }
            }
            allLanguagesJson {
              edges {
                node {
                  id
                  language
                }
              }
            }
            allArticlesJson {
              edges {
                node {
                  article
                  link
                  description
                  language
                }
              }
            }
            allExperienceJson {
              edges {
                node {
                  companyname
                  stack
                  year
                  description
                }
              }
            }
            allCommunityJson {
              edges {
                node {
                  communityName
                  Stack
                  Year
                  Description
                }
              }
            }
            allTalkJson {
              edges {
                node {
                  subject
                  link
                  Description
                }
              }
            }
            allEducationJson {
              edges {
                node {
                  schoolname
                  field
                  Year
                  Description
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <section className="content" id="content">
              <div className="container">
                <div className="subsection">
                  <h2 className="mt-5">
                    <span className="dot"></span>Last{" "}
                    <span className="word">Articles</span>
                  </h2>
                  <div className="row">
                    {data.allArticlesJson.edges.map(({ node }, index) => (
                      <div className="col-lg-4" key={index}>
                        <div className="card mb-4">
                          <div className="card-body">
                            <div className="card-title">
                              <h3>{node.article}</h3>
                              <h4>
                                <FontAwesomeIcon
                                  icon={faTag}
                                  className="mr-2"
                                />
                                {node.language}
                              </h4>
                            </div>

                            <div className="card-text">{node.description}</div>
                          </div>
                          <div className="card-footer">
                            <a
                              href={node.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* + Technologies subsection */}
                <div className="subsection">
                  <h2 className="mt-5">
                    <span className="dot"></span>Language &{" "}
                    <span className="word">Technology</span>
                  </h2>
                  <div className="row">
                    {data.allLanguagesJson.edges.map(({ node }, index) => (
                      <div className="col-lg-4 col-md-6" key={index}>
                        <div className="card">
                          <div className="card-text">
                            <div className="card-item">
                              <FontAwesomeIcon
                                icon={faCode}
                                className="mr-2 item-icon"
                              />{" "}
                              {node.language}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* - Technologies subsection */}
                <br />
                {/* + Job subsection */}
                <div className="subsection">
                  <h2>
                    <span className="dot"></span>Experience{" "}
                  </h2>
                  {data.allExperienceJson.edges.map(({ node }, index) => (
                    <div className="card">
                      <div className="card-body" key={index}>
                        <div className="card-title">
                          <h3>{node.companyname}</h3>
                          <h4>
                            <FontAwesomeIcon
                              icon={faBriefcase}
                              className="mr-2"
                            />{" "}
                            {node.stack}
                          </h4>
                          <h4>
                            <FontAwesomeIcon
                              icon={faCalendar}
                              className="mr-2"
                            />{" "}
                            {node.year}
                          </h4>
                        </div>

                        <div className="card-text">
                          <span>⭐</span> {node.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* - Job subsection */}
                <br />
                {/* - Community subsection */}
                <div className="subsection">
                  <h2>
                    <span className="dot"></span>Community{" "}
                  </h2>
                  {data.allCommunityJson.edges.map(({ node }, index) => (
                    <div className="card">
                      <div className="card-body" key={index}>
                        <div className="card-title">
                          <h3>{node.communityName}</h3>
                          <h4>
                            <FontAwesomeIcon
                              icon={faUserNinja}
                              className="mr-2"
                            />{" "}
                            {node.Stack}
                          </h4>
                          <h4>
                            <FontAwesomeIcon
                              icon={faCalendar}
                              className="mr-2"
                            />{" "}
                            {node.Year}
                          </h4>
                        </div>

                        <div className="card-text">
                          <span>⭐</span> {node.Description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* + School subsection */}
                <div className="subsection">
                  <h2 className="mt-5">
                    <span className="dot"></span>Education{" "}
                  </h2>
                  {data.allEducationJson.edges.map(({ node }, index) => (
                    <div className="card">
                      <div className="card-body" key={index}>
                        <div className="card-title">
                          <h3>{node.schoolname}</h3>
                          <h4>
                            <FontAwesomeIcon
                              icon={faGraduationCap}
                              className="mr-2"
                            />
                            {node.field}
                          </h4>
                          <h4>
                            <FontAwesomeIcon
                              icon={faUserGraduate}
                              className="mr-2"
                            />{" "}
                            {node.Year}
                          </h4>
                        </div>

                        <div className="card-text">{node.Description}</div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* - School subsection */}

                {/* + Projects subsection */}
                <div className="subsection">
                  <h2 className="mt-5">
                    <a
                      href="https://github.com/yezz123"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="dot"></span>OpenSource
                    </a>{" "}
                  </h2>
                  <div className="row">
                    {data.allProjectsJson.edges.map(({ node }, index) => (
                      <div className="col-lg-4" key={index}>
                        <div className="card mb-4">
                          <div className="card-body">
                            <div className="card-title">
                              <h3>{node.project}</h3>
                              <h4>
                                <FontAwesomeIcon
                                  icon={faCode}
                                  className="mr-2"
                                />
                                {node.language}
                              </h4>
                            </div>

                            <div className="card-text">{node.description}</div>
                          </div>
                          <div className="card-footer">
                            <a
                              href={node.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="subsection">
                  <h2>
                    <span className="dot"></span>Talks{" "}
                  </h2>
                  {data.allTalkJson.edges.map(({ node }, index) => (
                    <div className="card">
                      <div className="card-body" key={index}>
                        <div className="card-title">
                          <a href={node.link} target="_blank" rel="noreferrer">
                            <h4>{node.subject}</h4>
                          </a>
                        </div>

                        <div className="card-text">
                          <span>⭐</span> {node.Description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* - Projects subsection */}
            </section>
          </>
        )}
      />
    )
  }
}
