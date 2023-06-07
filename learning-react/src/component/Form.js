import React from "react";
import { useState } from "react";

function FormFill(){
    const [value,setValue]=useState('');

    const HandleChange=(event)=>{
        setValue(event.target.value);
    }

    const HandleSubmit=(event)=>{
        alert(`A name was submitted: ${value}`);
        event.preventDefault();
    }

    return(
        <form onSubmit={HandleSubmit}>
            <label>
                Pick your favorite fruit:
                <select value={value} onChange={HandleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                
            </label>
            <input type="submit" value="Submit"></input>
        </form>
    );
}

export default FormFill;