import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../layouts"
import blogStyles from "./blog.module.css"

export default ({ data }) => {
  return (
    <>
      <Layout>
        {data.allContentfulBlogPosts.edges.map((edge, index) => (
          <div key={index} className={blogStyles.container}>
            <Link to={`/blog/${edge.node.slug}`} className={blogStyles.link}>
              <h3 className={blogStyles.title}>{edge.node.title}</h3>
              <p className={blogStyles.date}>{edge.node.publishedDate}</p>
            </Link>
          </div>
        ))}
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allContentfulBlogPosts(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          title
          slug
          publishedDate(fromNow: true)
        }
      }
    }
  }
`
