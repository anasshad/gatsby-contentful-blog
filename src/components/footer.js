import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.css"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div className={footerStyles.container}>
      <p>{`Created by ${data.site.siteMetadata.author} with ❤`}</p>
    </div>
  )
}
