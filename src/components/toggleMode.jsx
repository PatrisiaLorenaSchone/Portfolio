//toggleMode
import iconSun from "../assets/iconSun.png"
import iconMoon from "../assets/iconMoon.png"

export const ToggleButton = ({lightMode, setLightMode}) =>{
    // const [lightMode, setLightMode] = useState(true)
    let darkMode = (
    <>
        <button onClick={()=>{setLightMode(false)}} className="btnCircle"></button>
        <img height={"30px"} alt="sun icon" src={iconSun}></img>
    </>);
    let dayMode = (
    <>
        <img height={"30px"} alt="moon icon"  src={iconMoon}></img>
        <button onClick={()=>{setLightMode(true)}} className="btnCircle"></button>
    </>);
    return(
        <div  className="toggleBtn">
            {lightMode ? darkMode : dayMode}
        </div>
    )
}