import React from 'react'

import BlogPostCategory from './BlogPostCategory'

const BlogPosts = ({posts}) => {
  
  const categories = posts.reduce( (acc, {category}) => {    
      if (!acc.includes(category)) {
        return [ ...acc, category]
      }
  
    return acc;
  }, [])

  const filterPosts = (categoryName) => (
    posts.filter( post => 
        post.category === categoryName
    )
  )

  const blogPostCategories = categories.map( category => (
      <BlogPostCategory 
        title={category}
        posts={filterPosts(category)}
        key={category}
      />
  ))
  
  return (
      <section className="category-container">
        {blogPostCategories}
      </section>
  )
}

export default BlogPosts; 