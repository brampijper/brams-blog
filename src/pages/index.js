import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FilterableBlogPosts from "../components/FilterableBlogPosts"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title; 
  
  return (
    <Layout 
      location={location} 
      title={siteTitle}
    >
      <Seo title="All posts" />
      <FilterableBlogPosts />
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
