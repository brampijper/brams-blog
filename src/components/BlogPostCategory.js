import React from "react"

const Category = ({filter, category}) => {
    return (
        <button onClick={filter} className="category-button" >
            {category}
        </button>
    )
}

export default Category;