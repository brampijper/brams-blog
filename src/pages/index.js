import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderSubTitle from "../components/HeaderSubTitle"
import BlogPostCard from "../components/blog/BlogPostCard"
import formatBlogPosts from "../helpers/formatBlogPosts"
import ProjectCard from "../components/project/ProjectCard"

const IndexPage = ({ data, location }) => {
  const { title } = data.site.siteMetadata
  const { edges } = data.allProjectsJson
  
  const formattedData = formatBlogPosts(data) // undefined variables.

  const blogPostCards = formattedData.map( 
    post => (
      <BlogPostCard 
        key={post.slug} 
        post={post} 
      />
    )
  )

  const notableProjects = edges.map( ({node}) => (
      <ProjectCard
        key={node.id}
        project={node}
      />
    )
  )

  return (
    <Layout 
      location={location} 
      title={title}
    >
      <Seo title="All posts" />
      <HeaderSubTitle />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">

        <ul className="list-none">
          <h3 className="font-bold text-xl md:text-3xl tracking-tight mb-4 text-black">
            Most Recent
          </h3>
          {blogPostCards}
        </ul>

        <ul className="list-none">
          <h3 className="font-bold text-xl md:text-3xl tracking-tight mb-4 text-black">
            Notable Projects
          </h3>
          {notableProjects}
        </ul>

      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 4) {
      edges {
          node {
              excerpt
              fields {
                  slug
              }
              frontmatter {
                  title
                  description
              }
          }
      }
    }
    allProjectsJson {
      edges {
        node {
          id
          title
          homepage
          github
          description
          tools
        }
      }
    }
  }
`
