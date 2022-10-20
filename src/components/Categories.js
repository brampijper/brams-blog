import React from 'react';

export default function Categories({ posts }) {
    const categories = posts.map( item => {
        return item.node.frontmatter.categories
    })
        .filter(item => item) //blogposts without a category are filtered out.
        .flatMap(item => item) //merge arrays into a single array.
        .map( item => { 
            return (
                <button key={item}>
                    {item}
                </button>
            )
    })

    return (
        <div>
            {categories} 
        </div>
    )
}