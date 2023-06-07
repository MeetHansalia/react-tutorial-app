import { useState } from "react"

function BoilingVerdict(props){
    if(props.celcius >= 100){
        return <p>The Water would boil.</p>
    }
    return <p>The water would not boil</p>
}


function Calculator(props){
    const [temperature,setTemperature]= useState('');

    const HandleChange=(event)=>{
        setTemperature(event.target.value)
    }

    

    return(
        <fieldset>
            <legend>Enter temperature in Celsius:</legend>
            <input
            value={temperature}
            onChange={HandleChange} />
            <BoilingVerdict
            celsius={parseFloat(temperature)} />
        </fieldset>
    )
}


export default Calculator;