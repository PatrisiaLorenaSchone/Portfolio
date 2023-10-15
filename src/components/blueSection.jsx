//bluesection

import {CerificateCard} from "./Card.jsx"
import stiker from "../assets/graduate.png"
import stiker2 from "../assets/gradShowing.png"

 export const BlueSection = ({lightMode})=>{
    return(
        <div>
            <img src={stiker} height={150} className="graduate" alt="Patricia Lorena Stiker wearing a graduation hat" />
        <div className={lightMode ? "my-green-section" : "my-green-section my-green-sectionDark"}>
            <h2 id="certificates">Certifications</h2>
            <CerificateCard lightMode={lightMode}/>
            <img src={stiker2} height={150} className="graduatePointing" alt="Patricia Lorena Stiker wearing a graduation hat" />
        </div>
        </div>
    )
}
