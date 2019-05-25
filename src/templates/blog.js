import React from "react"
import { graphql } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../layouts"
import blogStyles from "./blog.module.css"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPosts(slug: { eq: $slug }) {
      title
      publishedDate(fromNow: true)
      body {
        json
      }
    }
  }
`

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const url = node.data.target.fields.file["en-US"].url
      const alt = node.data.target.fields.title["en-US"]
      return (
        <img src={url} alt={alt} style={{ maxWidth: 760, width: "100%" }} />
      )
    },
  },
}

export default ({ data }) => {
  return (
    <Layout>
      <div className={blogStyles.container}>
        <h2 className={blogStyles.title}>{data.contentfulBlogPosts.title}</h2>
        <p className={blogStyles.date}>{`Published ${
          data.contentfulBlogPosts.publishedDate
        }`}</p>
        {documentToReactComponents(data.contentfulBlogPosts.body.json, options)}
      </div>
    </Layout>
  )
}
