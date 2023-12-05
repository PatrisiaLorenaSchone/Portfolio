//The Section with the certificates
import React from "react"
import {CerificateCard} from "./Card.jsx"
import stiker from "../assets/graduate.png"
import stiker2 from "../assets/gradShowing.png"
import { ThemeContext } from "../App.jsx"

export default function BlueSection(){
    const {lightMode} = React.useContext(ThemeContext)
    const [isScrolled, setIsScrolled] = React.useState(false)

    function changeOnScroll(){
    if(window.scrollY >= 500){
        setIsScrolled(true)
    }else{
        setIsScrolled(false)
    }
    }
    window.addEventListener("scroll", changeOnScroll)

    return(
        <div>
            <img src={stiker} height={150} className={isScrolled ? "graduate" : "graduate"} alt="Patricia Lorena Stiker wearing a graduation hat" />
            <div className={lightMode ? "my-green-section" : "my-green-section my-green-sectionDark"}>
            <h2 id="certificates"><span>🏆 </span> Certificates</h2>
            <CerificateCard lightMode={lightMode}/>
            <img src={stiker2} height={150} className="graduatePointing" alt="Patricia Lorena Stiker wearing a graduation hat" />
        </div>
        </div>
    )
}
