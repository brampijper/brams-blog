import React from 'react'
import BlogPostCard from '../BlogPostCard/'
import "./style.css"

const CategoryCard = ({category, posts}) => {

  const blogPosts = posts.map( 
    post => (
      <BlogPostCard
        key={post.slug} 
        post={post}
      />
    )
  )

  const styles = {
    "technology": {
      backgroundColor: "#6FC6BC",
      borderTopLeftRadius: "1rem",
      alignItems: "flex-start",
      color: "#2C5F59"
    },
    "health": {
      backgroundColor: "#C66F6F",
      borderTopRightRadius: "1rem",
      alignItems: "flex-end",
      color: "#5F2C2C"
    }
  }

  return (
    <div 
      className={`category-card ${category}`}
      style={styles[category]}
    >
      <h2 className="category-title">
        {category}
      </h2>
      
      {blogPosts.length ? blogPosts : <h5>No matches!</h5> } 
    </div>
  )
}

export default CategoryCard;