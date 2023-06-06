import React from "react";
import { useState } from "react";


function Form(){
    const[inputs ,setInputs]= useState({});
    const[textarea,setTextarea]=useState("")

    const handleChange =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setTextarea(event.target.value)
        setInputs(values =>({...values,[name]:value}))              
    }

    const HandleSubmit =(event)=>{
        event.preventDefault();
        alert(inputs);
    }

    return (
        <form onSubmit={HandleSubmit}>
            <lable>Enter your name:
                <input 
                    type="text"
                    name="username"
                    value={inputs.username || " "}
                    onChange={handleChange}
                />
            </lable>
            <lable>Enter your age:
                <input 
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </lable><br/>
            
            <textarea value={textarea} onChange={handleChange}></textarea>
            <input type="submit"/>
        </form>
    )
}

export default Form;