import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import HeaderStyles from "./header.module.css"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={HeaderStyles.container}>
      <Link to="/" className={HeaderStyles.title}>
        <h1>{data.site.siteMetadata.title}</h1>
      </Link>
      <nav>
        <ul className={HeaderStyles.navList}>
          <li>
            <Link to="/" className={HeaderStyles.navItem}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={HeaderStyles.navItem}>
              About
            </Link>
          </li>
          <li>
            <Link to="/jobs" className={HeaderStyles.navItem}>
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/contact" className={HeaderStyles.navItem}>
              Contact Me
            </Link>
          </li>
          <li>
            <Link to="/blog" className={HeaderStyles.navItem}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
