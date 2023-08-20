import './App.css';
import React,{ useRef, useState } from 'react';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Text from './Components/Text';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// run this function from an event handler or an effect to execute scroll 
export default function App() {
  const myRef = useRef(null)
  
  const executeScroll = () => myRef.current.scrollIntoView()    
  const [mode, setMode]= useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert=(message,type)=>{
      setAlert({
        msg : message,
        type:type
      })
  } 
  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#121212'
      showAlert("Dark mode has been enabled!","success:");
      document.title = 'TextUtils-Dark Mode';
    //   setInterval(()=>{
    //     document.title = 'TextUtils Mode';
    //   },2000);
    // }
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#F5FEFD'
      showAlert("Light mode has been enabled!","success:");
      document.title = 'TextUtils-Light Mode';
    }
  }
  return (
     <Router>
      <Navbar title="TextUtils" mode = {mode} 
      toggleMode={toggleMode} executeScroll={executeScroll} />

      <Alert alert={alert}/>
      <Routes>
        <Route exact path='/' element={<Text/>} />
        <Route exact path='/about' element={<About />} />
      {/* <About myRef={myRef}/> */}
      </Routes>
   
  </Router>

  )

  }
