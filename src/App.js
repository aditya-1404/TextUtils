import './App.css';
import Navbar from './components/navbar';
import Textform from './components/textform';
import React,{useState} from "react"; 
import Features from './components/features'; 

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [dark,setDark]=useState('light');
  let stylee={
    color:"black",
    backgroundColor:"white",
  }
  const ToggleDark=()=>{
        if(dark=='light'){
            setDark('dark');
            stylee={
              color:"white",
              backgroundColor:"black",
            }
        }
        else {
            setDark('light');
            stylee={
              color:"black",
              backgroundColor:"white",
            }
        }
        
    }

    
  return (
    <>
    <Router>
    <Navbar mode={dark} toggle={ToggleDark}/>
    <Routes>
          <Route exact path="/home" element={<Textform mode={dark} stylee={stylee} />}> 
          </Route>
          <Route exact path="/features" element={<Features mode={dark}/>}>     
          </Route>
    </Routes>
    </Router>
</>
  );
}

export default App;
