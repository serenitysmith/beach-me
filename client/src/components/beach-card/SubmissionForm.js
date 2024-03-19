import React, {useState, useContext}from "react"
import {UserContext} from "../../context/userContext"

function SubmissionForm(){

    const {addUserBeach} = useContext(UserContext)

    const initState = {
            strBeachy:false,
            strBeached:"",
          
            strBeachMe:"",
            strBeachYa:"",
            // strIBA,
           beach14:"",
            beach15:"",
           beach16:"",
            strBeach1:0,
           
    }

    const [inputs, setInputs] = useState(initState)

    function handleChange(e){
        const {name, value, type, checked} = e.target
        setInputs(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addUserBeach(inputs)
        setInputs(initState)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{marginTop:"200px", marginBottom:'20px'}}>
                    <input name="strBeach" value={inputs.strBeach1} placeholder="Beach Name" onChange={handleChange} style={{marginRight:"20px"}}/>
                    {/* <input name="description" value={inputs.descriptionDrink}/> */}
                    <label>
                        <input name="strBeachy" type="checkbox" checked={inputs.strBeachy} onChange={handleChange} style={{marginRight:"20px"}} />
                        Is this Beach free?
                    </label>
                    <input name="strBeach" value={inputs.strBeachMe} placeholder="Image Url" onChange={handleChange}/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SubmissionForm