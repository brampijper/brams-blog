import React from 'react'
import BlogPostCard from './BlogPostCard'

const BlogPostCategory = ({category, posts}) => {

  const blogPosts = posts.map( 
    post => (
      <BlogPostCard
        key={post.slug} 
        post={post} 
      />
    )
  )

  return (
    <div>
      <h3>{category}</h3>
        {blogPosts}
    </div>
  )
}

export default BlogPostCategory;