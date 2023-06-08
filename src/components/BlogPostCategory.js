import React from 'react'
import BlogPostCard from './BlogPostCard'

const BlogPostCategory = ({title, posts}) => {

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
      <h3>{title}</h3>
        {blogPosts}
    </div>
  )
}

export default BlogPostCategory;