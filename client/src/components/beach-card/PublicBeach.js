import React, {useContext, useEffect} from "react"
import {UserContext} from "../../context/userContext"
import BeachCard from "../BeachCard"

function PublicBeach(){

    const {publicBeach, getPublicBeach} = useContext(UserContext)
    useEffect(()=>{
        getPublicBeach()
    }, [])
    console.log(publicBeach.length)
    
    return(
        <div style={{marginTop:"100px"}}>
            {publicBeach.length > 0 ? publicBeach.map(beach => <BeachCard {...beach} path="/beach-card/public-beach" key={beach.idBeach}/>): <h1 style={{justifySelf:"center"}}>Sorry, the public beach is currently out if order. <a href="/beach-card/submission-form">submissions</a> to help get us started!</h1> }
        </div>
    )
}

export default PublicBeach