import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Categories from "../components/Categories"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title; 
  
  const [posts, setPosts] = useState([]); 

  const formatPosts = (posts) => {
    const postList = posts.allMarkdownRemark.edges
      .map( ({node}) => {
        const { frontmatter, fields, excerpt } = node;
        return {
          title: frontmatter.title,
          slug: fields.slug,
          date: frontmatter.date,
          description: frontmatter.description,
          excerpt,
          categories: frontmatter.categories
        }
      })
    setPosts(postList);
  }

  useEffect( () => {
    formatPosts(data);
  }, [data]);

  return (
    <Layout location={location} title={siteTitle}>
      <Categories posts={posts} />
      <Seo title="All posts" />
      {posts.map((post) => {
        return (
          <Link className="blog-posts-links" key={post.slug} to={post.slug}>
            <article  className="blog-posts">
              <header>
                <h2>
                    <span itemProp="headline">{post.title}</span>
                </h2>
                <small>{post.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.description || post.excerpt,
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
