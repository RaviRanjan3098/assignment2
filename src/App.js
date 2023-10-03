import Home from "./cmp/index";
import './App.css';

import {BrowserRouter,Routes,Route} from "react-router-dom";

const App =() =>{
   return (
      <>
      
      <BrowserRouter>
          <Routes>  
             <Route path="/" element={<Home />} />
            
          </Routes>
          </BrowserRouter>

          
     
      </>
   )
}
export default App;
