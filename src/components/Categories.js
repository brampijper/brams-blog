import React, { useEffect, useState } from "react"

const Categories = ({ posts }) => {

    const [categories, setCategories] = useState([]);

    const mapAndFilterCategories = 
    posts
        .map (post  => post.categories)
        .filter(item => item) //blogposts without a category are filtered out.
        .flatMap(item => item) //merge arrays into a single array.
    
    useEffect(() => {
        setCategories(mapAndFilterCategories)
    }, [posts])

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