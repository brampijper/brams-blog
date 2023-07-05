import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogPosts from "../components/blog/BlogPosts"

const BlogIndex = ({ data, location }) => {
  const { title } = data.site.siteMetadata

  return (
    <Layout 
      location={location} 
      title={title}
    >
      <Seo title="All posts" />
      <BlogPosts />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
