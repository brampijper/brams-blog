import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import formatBlogPosts from "../../../helpers/formatBlogPosts"

import SearchBar from "../../SearchBar/"
import BlogPostCategories from "../BlogPostCategories"

import "./style.css"

const getData = graphql`
    query {
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
                        topics
                    }
                }
            }
        }
    }
`

const FilterableBlogPosts = () => {
    const data = useStaticQuery(getData)
    const formattedData = formatBlogPosts(data)

    const [posts, setPosts] = useState(formattedData)
    const [filteredPosts, setFilteredPosts] = useState([])
    const [searchInput, setSearchInput] = useState("")

    const handleSearchChange = (event) => {
        const value = event.target.value.toLowerCase()
        setSearchInput(value)

        const searchResults = posts.filter( 
            ({title, description}) => (
                title.toLowerCase().includes(searchInput) ||
                description.toLowerCase().includes(searchInput)
            )
        )
        setFilteredPosts(searchResults)
    }
        
    return (
        <div className="wrap-content">
            <SearchBar 
                value={searchInput} 
                onChange={handleSearchChange} 
            />

            <BlogPostCategories
                posts={searchInput ? filteredPosts : posts}
            />
            
        </div>
    )
}

export default FilterableBlogPosts;