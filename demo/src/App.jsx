import './App.css'
import Suma from './Component/ContextApi1';
import { Puma } from './ContextApi3';
import { namecontext } from './Component/ContextApi2';


function App() {
  
  
  return (<>
<h1>App.jsx File page</h1>

<namecontext> 
    <Suma></Suma>
    <namecontext.Provider value="Salaar">
        <Puma></Puma>
    </namecontext.Provider>
    
</namecontext>


</>)
}
export default App;
export {namecontext};
