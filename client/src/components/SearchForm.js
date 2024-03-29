import React, {useContext} from "react"
import {DataContext} from "../context/dataContext"

function SearchForm(props){

    const {params, setParams, search} = useContext(DataContext)

    function handleChange(event){
        const {name, value} = event.target
        setParams(prevParams => {
            return{
                ...prevParams,
                [name]:value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        search(params)
    }

    console.log(params)

    return(
        <div>
            <form className="search--form">
                <select name="category" value={params.category} onChange={handleChange}>
                    <option value="default" disabled hidden>Select a Search Category</option>
                    <option value="name">Search by Name</option>
                    <option value="beaches">Search by beach</option>
                    <option value="alge">Alge?</option>
                </select>
                {params.category === "alge" ? 
                    <select name="keyword" value={params.keyword} onChange={handleChange}>
                        <option value="Alge">Alge</option>
                        <option value="No Algec">No Alge</option>
                    </select>:
                    <input placeholder="Enter Keyword" name="keyword" value={params.keyword} onChange={handleChange}/>
                }
                <button onClick={handleSubmit}>Search</button>
            </form>
        </div>
    )
}

export default SearchForm