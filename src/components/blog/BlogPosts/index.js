import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import formatBlogPosts from "../../../helpers/formatBlogPosts"

import BlogPostCard from "../BlogPostCard"

import "./style.css"

const getData = graphql`
    query {
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
                        description
                        topics
                    }
                }
            }
        }
    }
`

const BlogPosts = () => {
    const data = useStaticQuery(getData)
    const formattedData = formatBlogPosts(data)

    const [posts, setPosts] = useState(formattedData)

    const blogPosts = posts.map( 
        post => (
          <BlogPostCard
            key={post.slug} 
            post={post}
          />
        )
      )

    return (
        <>
            {blogPosts}
        </>

    )
}

export default BlogPosts;