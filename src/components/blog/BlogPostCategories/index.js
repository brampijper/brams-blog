import React from 'react'

import CategoryCard from "../CategoryCard"
import "./style.css"

const BlogPostCategory = ({posts}) => {
  const categories = ["technology & health"];
  
  // const categories = posts.reduce( (acc, {category}) => {    
  //     if (!acc.includes(category)) {
  //       return [ ...acc, category]
  //     }
  //   return acc;
  // }, [])

  const filterPosts = (categoryName) => (
    posts.filter( post => 
        post.category === categoryName
    )
  )

  const blogPostCategories = categories.map( category => (
      <CategoryCard 
        category={category}
        posts={posts}
        key={category}
      />
  ))
  
  return (
      <section className="categories-container">
        {blogPostCategories}
      </section>
  )
}

export default BlogPostCategory; 