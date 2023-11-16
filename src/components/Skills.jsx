//skills
import React from "react"
import it from "../assets/ita.svg"
import us from "../assets/usa.svg"
import ro from "../assets/rou.svg"
import fr from "../assets/fra.svg"
import de from "../assets/deu.svg"
import checkBox from "../assets/checkBox.png"
import {LanguageChart} from "./languageChart.jsx";
import {ComputerChart} from "./computerChart.jsx"
import {useState} from "react"
import { ThemeContext } from "../App"

export const Skills = ()=>{
  const[computerList, setComputerList] = useState(false);
  const[languageList, setLanguageList] = useState(false);

  const {lightMode} = React.useContext(ThemeContext)

    return(
       <div id="skills" className={lightMode ? "skillsSection" : "skillsSection skillsSectionDark"}>
        <h2 className="my-secondary-title"><span>🚀 </span> My Skills</h2>
        <div className="skillsCardsContainer">
            <div onClick={()=>{setComputerList(!computerList)}} className={languageList ? "hidden" : "my-skills-list"}>
                <h3>Computer Skills</h3>
                <div className="skillsCard">
                <ul>
                  <li><b>Fundamentals: </b>HTML, CSS, JavaScript</li>
                  <li><b>Libraries: </b>React.js</li>
                  <li><b>Frameworks</b>BootStrap</li>
                  <li><b>Design: </b>Figma, Ui-Ux Design</li>
                  <li><b>Extra: </b>GitHUB, VisualStudio</li>
                </ul>
                {computerList && <ComputerChart />}
                </div>
                <small>*Based on Certified Evaluations</small>
            </div>
            {!computerList && !languageList ? <img height={330} className="checked" src={checkBox} alt="Patricia Lorena Stiker reading"></img> : ""}
            <div onClick={()=>{setLanguageList(!languageList)}} className={computerList ? "hidden" : "my-skills-list"} >
                <h3>Language Skills</h3>
                <div className="skillsCard">
                  <ul>
                    <li><img height={23} alt="U.S.A. flag" src={us}/> <b>English</b> - Advanced</li>
                    <li><img height={23} alt="Italian flag" src={it}/> <b>Italian</b> - Advanced</li>
                    <li><img height={23} alt="French flag" src={fr}/> <b>French</b> - Intermediate</li>
                    <li><img height={23} alt="Germany flag" src={de}/> <b>German</b> - Beginner</li>
                    <li><img height={23} alt="Romania flag" src={ro}/> <b>Romanian</b> - Native</li>
                  </ul>
                  {languageList && <LanguageChart/>}
                </div>
                <small>*Common European Framework of Reference</small>
            </div>
        </div>
        <div className="my-other-skills">
          <h3>Other Skills:</h3>
          <p>Atention to detail, creativity, patience</p>
        </div>
       </div>
    )
}

