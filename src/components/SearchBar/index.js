import React from "react"

import "./style.css"

const SearchBar = ({value, onChange}) => {
    return (
        <div className="input-container">
            <input 
                type="text" 
                value={value} 
                onChange={onChange} 
                placeholder="search on title and description. . ." 
            />
        </div>
    )
}

export default SearchBar