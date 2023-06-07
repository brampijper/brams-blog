import React, {useState, useEffect} from 'react'

import BlogPostCategory from './BlogPostCategory'

const BlogPosts = ({posts}) => {
  const [categories, setCategories] = useState([])

  // useEffect, makes it a bit unreadable - helper function ??
  useEffect( () => {
    const getUniqueCategories = () => {
      return posts.reduce( (acc, {category}) => {    
        if (!acc.includes(category)) {
          return [ ...acc, category]
        }
    
        return acc;
      }, [])
    } 
    setCategories(getUniqueCategories());

  }, [posts])
  
  const filterPosts = (categoryName) => (
    posts.filter( post => 
        post.category === categoryName
    )
  )

  const blogPostCategories = categories.map( category => (
      <BlogPostCategory 
        category={category}
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