//app
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
// import Footer from "./components/Footer"
import { useState} from "react";
import './App.css';
import Homepage from './pages/Homepage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Layout from './pages/Layout.jsx';


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
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </div>
    </ThemeContext.Provider>
    </BrowserRouter>
    );
}

export { ThemeContext }
