import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Categories from "../components/Categories"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  //state
  const [posts, setPosts] = React.useState(data.allMarkdownRemark.edges); 
  const [categories, setCategories] = React.useState([]);

  return (
    <Layout location={location} title={siteTitle}>
      <Categories posts={posts} categories={categories} setCategories={setCategories} />
      <Seo title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Link className="blog-posts-links" key={node.fields.slug} to={node.fields.slug}>
            <article  className="blog-posts">
              <header>
                <h2>
                    <span itemProp="headline">{title}</span>
                </h2>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                  itemProp="description"
                />
              </section>
            </article>
          </Link>
        )
      })}
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            categories
          }
        }
      }
    }
  }
`
