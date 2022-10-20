import React, { useEffect } from 'react';

/**
 * TODO: It feels in-efficient to call flatmap 2 times. Is there a way to improve this code?
 * TODO: Currently the category buttons are not firing of an onClick.
 */

export default function Categories({ posts, categories, setCategories}) {
    
    useEffect(() => {
        setCategories( (prevState) => { //prevState = []
            return [
                ...prevState, 
                posts
                .map (item => item.node.frontmatter.categories)
                .filter(item => item) //blogposts without a category are filtered out.
                .flatMap(item => item) //merge arrays into a single array.
            ]
        });
    }, [])

    const categoryButtons = categories
        .flatMap( category => category)
        .map( category => {
            console.log(category)
            return (
                <button key={category}>
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