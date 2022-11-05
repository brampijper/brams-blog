import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Category from "../components/BlogPostCategory"
import BlogPost from "../components/BlogPost"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title; 
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState(["show all"]);
  const [filteredPosts, setFilteredPostList] = useState([]);
  const [hasFiltered, setHasFiltered] = useState(false);

  useEffect(() => {
    function formatPosts() {
      const posts = data.allMarkdownRemark.edges.map( ({node}) => {
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
        setPosts(posts)
      }
    formatPosts();
  }, [data])

  useEffect(() => {
    function mapAndFilterCategories () {
    
    const filteredCategories = posts.reduce( (acc, val) => { 
      if (val.categories) {
          return acc.concat(val.categories);
      }
      return [...new Set(acc)]; // return only unique categories.
    }, [])
    setCategories( (prevState) => [...prevState, ...[...new Set(filteredCategories)]]); //spread old and new categories into state.
    }
    mapAndFilterCategories();

  }, [posts])

  function filter(category) {
    if(category === "show all") {
      setHasFiltered(false)
      return;
    }

    const filteredPosts = posts.filter( ({ categories }) => (
        categories && categories.includes(category)
    ))
    setFilteredPostList(filteredPosts)
    setHasFiltered(true);
  }

  const categoryButtons = categories.map(category => (
    <Category 
      key={category}  
      category={category}
      filter={ () => filter(category) }
    />
  ))

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <section className="category-container">
        {categoryButtons}
      </section>
      <BlogPost 
        posts={hasFiltered ? filteredPosts : posts}
      />
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
