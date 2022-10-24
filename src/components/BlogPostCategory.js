import React from "react"

const Category = ({filter, category}) => {
    return (
        <button onClick={filter} >
            {category}
        </button>
    )
}

export default Category;