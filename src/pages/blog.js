import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogPostCard from "../components/blog/BlogPostCard"
import formatBlogPosts from "../helpers/formatBlogPosts"

const BlogPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  const formattedData = formatBlogPosts(data) // undefined variables.

  const blogPostCards = formattedData.map( 
    post => (
      <BlogPostCard 
        key={post.slug} 
        post={post} 
      />
    )
  )

  return (
    <Layout location={location} title={siteTitle} >
      <Seo title="All blog posts" />

      <div className="flex flex-col gap-4 w-full">

        <ul className="list-none">
          <h3 className="font-bold text-xl md:text-3xl tracking-tight mb-4 mt-8 text-black">
            All Posts
          </h3>
          {blogPostCards}
        </ul>

      </div>

    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      edges {
          node {
              excerpt
              fields {
                  slug
              }
              frontmatter {
                  date(formatString: "MMMM DD, YYYY")
                  title
              }
          }
      }
    }
  }
`
