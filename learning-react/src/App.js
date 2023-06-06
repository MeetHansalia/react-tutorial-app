import logo from './logo.svg';
import './App.css';
import Tick from './component/welcome';
import Form from './component/events';
import LoginControl from './component/Rendering';
import Garage from './component/CreatingMap';
import Todos from './component/todos';
import { useState } from 'react';




function App() {
  const [count , setCount]=useState(0);
  const [todos,setTodos]= useState(["todo 1","todo 2"]);

  const increment=()=>{
    setCount((c) => c+1);
  };

  return (
    <div className="App">     
      <Tick name="Meet" sername="Hansalia" cars = {('Ford', 'BMW', 'Audi','Jaguar','meet')}/>     
      <Form/> 
      <LoginControl/> 
      <Garage/>
      <>
        <Todos todos={todos}/>
        <hr/>
        <div>
          Count : {count}
          <button onClick={increment}>+</button>
        </div>
      </>
    </div>
  );
}

export default App;
