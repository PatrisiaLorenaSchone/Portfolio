
//header
import React from 'react';
import hey from "../assets/hey1.png"
import candle from "../assets/holdingCandle.png"
// import cv from "../assets/cvPatriciaSchone.pdf"
import cv from "../assets/Patricia-Schone-CV.pdf"
import { ThemeContext } from "../App"

export const Header = () =>{
    const {lightMode} = React.useContext(ThemeContext)
    return(
            <header className={lightMode ? '' : 'darkHeader'}>
                <div>
                    {lightMode && <img className="hello" height={150} src={hey} alt="Patricia Lorena as a cartoon says hi"/>}
                </div>
                <div className="my-header-text">
                    <h1 className="my-main-title"><span className="noWrap">Patricia-Lorena</span> Schone</h1>
                    <h2 className="headerSubtitle">Design and Development</h2>
                    <div className="candleStikerText">
                        <p>Hello and welcome to my personal website! <br/>Here you can find information about my overall competencies and take a look at the projects I've been working on lately.
                           But first, let me introduce myself. I'm Patricia, a front-end developer and designer specialized in React. 
                           I am open to long-term job offers as well as to short-term project collaborations.</p>
                    {!lightMode && <img className="candle" height={150} width={110} src={candle} alt="Patricia Lorena as a cartoon holding a candle"/>}
                    </div>
                    <a href={cv} target='_blank' className="my-btn" download>Download CV</a>
                </div>
                <iframe className={lightMode ? '' : 'darkIframe'}  title="PatriciaLorenaAnimation"  src="https://lottie.host/?file=ce4fad59-27b6-4d32-96ec-01ff6f6da70c/sptTNyR8JT.json"></iframe>
            </header>
    )
}
