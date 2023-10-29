//app
import React from 'react';
import {Navbar}  from './components/navBar.jsx';
import {Header} from './components/Header.jsx';
import {BlueSection} from './components/blueSection.jsx';
import {Skills} from './components/Skills.jsx';
import {PinkSection} from './components/pinkSection.jsx';
import {Carousel} from "./components/Carousel.jsx";
import {Footer} from './components/Footer.jsx';
// import Footer from "./components/Footer"
import { useState} from "react";
import './App.css';


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
    <ThemeContext.Provider value={{lightMode, toggleTheme}}>
      <div className={ lightMode ? "App" : "App AppDark"}>
      <Navbar/>
      <Header/>
      <BlueSection/>
      <Skills/>
      <PinkSection/>
      <Carousel/>
      <Footer/>
    </div>
    </ThemeContext.Provider>
    );
}

export { ThemeContext }
