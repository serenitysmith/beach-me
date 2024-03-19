import React from "react"
import SearchForm from "./SearchForm"
import SearchResultsList from "./SearchResultsList"


function Search(){
    return(
        <div className="search">
            <h1>Search </h1>
            <SearchForm />
            <hr></hr>
            <SearchResultsList/>
        </div>
    )
}

export default Search