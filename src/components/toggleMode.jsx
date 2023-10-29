//toggleMode
import React from "react";
import iconSun from "../assets/iconSun.png"
import iconMoon from "../assets/iconMoon.png"
import { ThemeContext } from "../App";

export const ToggleButton = () =>{
    // const [lightMode, setLightMode] = useState(true)
    const{lightMode, toggleTheme} = React.useContext(ThemeContext)

    let darkMode = (
    <>
        <button onClick={toggleTheme} className="btnCircle"></button>
        <img height={"30px"} alt="sun icon" src={iconSun}></img>
    </>);
    let dayMode = (
    <>
        <img height={"30px"} alt="moon icon"  src={iconMoon}></img>
        <button onClick={toggleTheme} className="btnCircle"></button>
    </>);
    return(
        <div  className="toggleBtn">
            {lightMode ? darkMode : dayMode}
        </div>
    )
}