import React from 'react';

const SearchBar = ({value, onChange}) => {
    return (
        <input 
            type="text" 
            value={value} 
            onChange={onChange} 
            placeholder="search on title and description. . ." 
        />
    )
}

export default SearchBar