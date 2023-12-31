//The Section with the certificates
import React from "react"
import {easeInOut, motion} from "framer-motion"
import {CerificateCard} from "./Card.jsx"
import stiker from "../assets/graduate.png"
import stiker2 from "../assets/gradShowing.png"
import { ThemeContext } from "../App.jsx"

export default function BlueSection(){
    const {lightMode} = React.useContext(ThemeContext)

    return(
        <div>
        <motion.img
            initial={{
                y: 200,
            }}
            whileInView={{
                y: 0
            }}
            whileHover={{
                y: 20,
            }}
            exit={{
                y: 200
            }}
            transition={{
                duration: 0.3,
            }}
            src={stiker} height={150} className="graduate" alt="Patricia Lorena Stiker wearing a graduation hat" />
        <div 
            className={lightMode ? "my-green-section" : "my-green-section my-green-sectionDark"}>
            <h2 id="certificates"><span>🏆 </span> Certificates</h2>
            <CerificateCard lightMode={lightMode}/>
            <img src={stiker2} height={150} className="graduatePointing" alt="Patricia Lorena Stiker wearing a graduation hat" />
        </div>
        </div>
    )
}
