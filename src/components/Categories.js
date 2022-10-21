import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

/**
 * TODO: Currently the category buttons are not firing of an onClick.
 */

const Categories = () => {
    const data = useStaticQuery(graphql`query categories { 
        allMarkdownRemark {
            nodes {
                frontmatter {
                categories
                }
            }
        }
    }
    `)

    const posts = data.allMarkdownRemark.nodes
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        setCategories( () => {
            return posts.map (item  => item.frontmatter.categories)
                .filter(item => item) //blogposts without a category are filtered out.
                .flatMap(item => item) //merge arrays into a single array.
        })
    }, [])

    const categoryButtons = categories
        .map( category => {
            return (
                <button data-index={category} key={category}>
                    {category}
                </button>
            )
        })
    return (
        <div>
            {categoryButtons}
        </div>
    )
}

export default Categories;