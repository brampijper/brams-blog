import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import formatBlogPosts from '../helpers/formatBlogPosts';

import SearchBar from './SearchBar';
import BlogPosts from "./BlogPosts"

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
                        category
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
    const [filteredPosts, setFilteredPosts] = useState(formattedData)
    const [searchInput, setSearchInput] = useState('')

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
        <div>
            <SearchBar value={searchInput} onChange={handleSearchChange} />

            <div className="container">
                <BlogPosts
                    posts={searchInput ? filteredPosts : posts}
                />
            </div>
        </div>
    )
}

export default FilterableBlogPosts;