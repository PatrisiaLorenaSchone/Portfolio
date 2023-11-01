//app
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import {Navbar}  from './components/navBar.jsx';
import {Footer} from './components/Footer.jsx';
// import Footer from "./components/Footer"
import { useState} from "react";
import './App.css';
import Homepage from './pages/Homepage.jsx';
import Informationpage from './pages/Informationpage.jsx';


const ThemeContext = React.createContext()

export default function App() {
  const [lightMode, setLightMode] = useState(true);
  function toggleTheme(){
    setLightMode(prevMode => !prevMode)
  }
  const [loading, setLoading] = useState(true)
  const loadingScreen = document.getElementById("loading");
  if(loadingScreen){
    setTimeout(()=>{
      loadingScreen.style.display = "none";
      setLoading(false)
    }, 2500)
  }
  return (
    !loading &&
    <BrowserRouter>
    <ThemeContext.Provider value={{lightMode, toggleTheme}}>
      <div className={ lightMode ? "App" : "App AppDark"}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/info" element={<Informationpage/>}/>
      </Routes>
      <Footer/>
    </div>
    </ThemeContext.Provider>
    </BrowserRouter>
    );
}

export { ThemeContext }
