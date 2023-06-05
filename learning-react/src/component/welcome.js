import { useEffect,useState } from "react";
  
function Tick(props){
    const[Time, setTime]= useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
          setTime(new Date())
        }, 800);
      
        return () => clearInterval(interval);
      }, []);

    return<div>
            <h1>Hello World</h1>
            <h1>I am Meet Hansalia</h1>
            <h1>it is :{Time.toLocaleTimeString()}</h1>
            
        </div>
    
}



export default Tick;