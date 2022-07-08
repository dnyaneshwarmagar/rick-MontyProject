import React from 'react'

const Search = ({handleSearch}) => {
    
  return (
    <div>
    <input type="text" placeholder="Search for a Contact" style={{width:"80vw"}} onChange={(e)=>handleSearch(e.target.value)}/>
    
</div>
  )
}

export default Search