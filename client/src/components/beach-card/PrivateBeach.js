import React, {useContext, useEffect} from "react"
import {Link} from "react-router-dom"
import {UserContext} from "../../context/userContext"
import BeachCard from "../BeachCard"

function PrivateBeach(){

    const {publicBeaches, user:{_id}, getPublicBeaches} = useContext(UserContext)

    useEffect(()=>{
        getPublicBeaches()
    }, [])

    return(
        <div>
                {publicBeaches.length > 0 ? publicBeaches.map(beach => beach.user === _id && <BeachCard {...beach} path="/beach-card/public-beach" key={beach.idbeach}/>): <h1>Sorry, your private beach is currently gone. Check out the <Link to="/beach-card/public-beach">Public Library</Link> and find some new favorites!</h1> }
        </div>
    )
}

export default PrivateBeach