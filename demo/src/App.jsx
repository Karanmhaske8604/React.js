import './App.css'
import { themeContext } from './Component/ContextApi4';
import { Navbar } from './Component/ContextApi4.1';



function App() {
  let theme="Dark";
  
  return (<>
<h1>App.jsx File page</h1>
<themeContext.Provider value={theme}>
    <Navbar></Navbar>
</themeContext.Provider>



</>)
}
export default App;
export {Navbar};
