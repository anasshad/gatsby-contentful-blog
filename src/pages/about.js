import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../layouts"

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
    <>
      <Layout>
        <h2>About Page</h2>
        <div>
          <p>
            Hello, my name is {data.site.siteMetadata.author} and I am a gatsby
            developer
          </p>
        </div>
      </Layout>
    </>
  )
}
