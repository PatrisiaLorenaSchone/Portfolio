
//header
import hey from "../assets/hey1.png"
import candle from "../assets/holdingCandle.png"

export const Header = (props) =>{
    return(
            <header className={props.lightMode ? '' : 'darkHeader'}>
                <div>
                    {props.lightMode && <img className="hello" height={150} src={hey} alt="Patricia Lorena as a cartoon says hi"/>}
                </div>
                <div className="my-header-text">
                    <h1 className="my-main-title"><span className="noWrap">Patricia-Lorena</span> Schone</h1>
                    <h2 className="headerSubtitle">Design and Development</h2>
                    <div className="candleStikerText">
                        <p>Hello and wellcome to my personal website! <br/>Here you can find informations about my overall competences and take a look at the projects I've been working on lately.
                           But first, let me introduce myself. I'm Patricia, a front-end developer and designer specialised in React. 
                           I am open for long-term job offers as well as for short-term projects collaborations.</p>
                    {!props.lightMode && <img className="candle" height={150} width={110} src={candle} alt="Patricia Lorena as a cartoon holding a candle"/>}
                    </div>
                    <a href="../assets/holdingCandle.png" download={candle} target="_blank" className="my-btn">Download CV</a>
                </div>
                <iframe className={props.lightMode ? '' : 'darkIframe'}  title="PatriciaLorenaAnimation"  src="https://lottie.host/?file=ce4fad59-27b6-4d32-96ec-01ff6f6da70c/sptTNyR8JT.json"></iframe>
            </header>
    )
}
