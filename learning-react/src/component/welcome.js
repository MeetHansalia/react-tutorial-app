import { useEffect,useState } from "react";
  
function Tick(props){
    const[Time, setTime]= useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
          setTime(new Date())
        }, 800);
      
        return () => clearInterval(interval);
    }, []);
    
    const cars =props.cars;
    return(
      <div>
        <div>
          <h1>Hello World</h1>
          <h1>I am {props.name} {props.sername}</h1>
          <h1>it is :{Time.toLocaleTimeString()}</h1>
          <h1>heello</h1>
        </div>

        <div>
          <>
            <h1>Garage</h1>
            {cars.length > 0 &&
                <h2>
                    you have {cars.length} cars in your Garage.
                </h2>
            }
          </>
        </div>
            
      </div>
    )  
    
}



export default Tick;