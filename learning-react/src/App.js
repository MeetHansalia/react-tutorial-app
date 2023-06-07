import logo from './logo.svg';
import './App.css';
import Tick from './component/welcome';
import Form from './component/events';
import LoginControl from './component/Rendering';
import Garage from './component/CreatingMap';
import ModifyCar from './component/StateEffect';
import Component1 from './component/context';
import Reffrences from './component/Reffrence';
import FormFill from './component/Form';
import Calculator from './component/Temperature';






function App() {
 

  

  return (
    <div className="App">     
      <Tick name="Meet" sername="Hansalia" cars = {('Ford', 'BMW', 'Audi','Jaguar','meet')}/>     
      <Form/> 
      <LoginControl/> 
      <Garage/>
      <ModifyCar/>
      <Component1/>
      <Reffrences/>  

      <FormFill/>
      <Calculator/>     
      
    </div>
  );
}

export default App;
