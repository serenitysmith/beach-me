import React, { useContext } from "react"
import {UserContext} from "../context/userContext.js"
import {useNavigate} from "react-router-dom"
import Auth from "./beach-card/Auth.js"

function BeachCard(){

    const {token, signup, login, errMsg, resetAuthErr } = useContext(UserContext)
    const navigate = useNavigate()

    return(
        <div>
            
            { !token ?
                <Auth signup={signup} login={login} errMsg={errMsg} resetAuthErr={resetAuthErr}/>
            :
                navigate('/beach-card/dashboard')
            }
        </div>
    )
}

export default BeachCard