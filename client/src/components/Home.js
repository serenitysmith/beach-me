
import React, {useContext} from "react"
import BeachCard from "./BeachCard"
import {DataContext} from "../context/dataContext"


function Home(){

    const {random, saveBeach} = useContext(DataContext)
    

        return(
            <div className="home">
                <h1 style={{marginBottom:0}}>Welcome to </h1>
                <h2 style={{marginTop:0}}>Beach Me</h2>
                <br></br>
                <h4>Wanna find a new beach? see below!</h4>
                {random === "" ? <></> : random.beaches.map(beach => <BeachCard 
                    key={beach.idBeach}
                    {...beach}
                    save={saveBeach} 
                />)}
            </div>
        )
}

export default Home