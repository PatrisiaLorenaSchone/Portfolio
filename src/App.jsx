//app

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

function App() {
  const [lightMode, setLightMode] = useState(true)
  return (
    <div className={ lightMode ? "App" : "App AppDark"}>
      <Navbar lightMode={lightMode} setLightMode={setLightMode}/>
      <Header lightMode={lightMode}/>
      <BlueSection lightMode={lightMode}/>
      <Skills lightMode={lightMode}/>
      <PinkSection lightMode={lightMode}/>
      <Carousel lightMode={lightMode}/>
      <Footer/>
    </div>
  );
}

export default App;
