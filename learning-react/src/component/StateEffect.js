
import {useEffect, useState} from "react";
import React from "react"

function ModifyCar(){
    const [car,setCar] = useState({
        brand:"Ford",
        model:"Mustang",
        year:"1964",
        color:"red"
    });

    const [count,setCount]= useState(0);
    const [calculation,setCalculation]=useState(0)
    
    useEffect(()=>{
       setCalculation(()=>count*2);
    },[count]);

    const updateColor=()=>{
        setCar(previousState =>{
            return{...previousState,color:"blue"}
        });
    }

    return (
        <div>
        <h1>My {car.brand}</h1>
        <p>
            It is a {car.color} {car.model} from {car.year}.
        </p>
        <button
            type="button"
            onClick={updateColor}>Blue
        </button>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount((c)=>c+1)}>+</button>
        <p>calculation:{calculation}</p>

       </div>
    )
}


export default ModifyCar;