//pinksection
import React from "react"
import selfie from "../assets/gr3.png"
import { ThemeContext } from "../App"

export const PinkSection = () =>{
  const {lightMode} = React.useContext(ThemeContext)
    return(
      <div className={lightMode ? "my-pink-section" : "my-pink-section my-pink-sectionDark"}>
          <h2 id="aboutMe"><span>🎀 </span> About me</h2>
            <div className="my-about">
              <img height={"390px"} width={"390px"} src={selfie} className="my-selfie-img" alt=" Patricia Lorena selfie" />
              <div>
                <p> I am a highly creative and hardworking Web Developer and UI/UX
                  designer with a passion for philosophy, foreign languages, user phycology, logic 
                  and building exceptional websites. My skills in coding, design and problem solving 
                  allow me to create unique and user-friendly web experiences. 
                  <br/> I can make your website both work great and look fantastic at the same time.
                  I strive to continuously learn and improve my craft ensuring that my
                  work is always of high quality
                </p>
              </div>
          </div>
          <div className="my-icons-container">
                <svg title="enthousiast coder" xmlns="http://www.w3.org/2000/svg" fill="white" width="50" height="50" viewBox="0 0 24 24"><path d="M22 3.2c0-.663-.537-1.2-1.2-1.2h-17.6c-.663 0-1.2.537-1.2 1.2v11.8h20v-11.8zm-2 9.8h-16v-9h16v9zm2 3h-20c-.197.372-2 4.582-2 4.998 0 .522.418 1.002 1.002 1.002h21.996c.584 0 1.002-.48 1.002-1.002 0-.416-1.803-4.626-2-4.998zm-12.229 5l.467-1h3.523l.467 1h-4.457z"/></svg>
                <svg title="passionate about philosopy" xmlns="http://www.w3.org/2000/svg" fill="white" width="50" height="50" viewBox="0 0 24 24"><path d="M23 5v13.883l-1 .117v-16c-3.895.119-7.505.762-10.002 2.316-2.496-1.554-6.102-2.197-9.998-2.316v16l-1-.117v-13.883h-1v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1h9.06v-15h-1zm-12 13.645c-1.946-.772-4.137-1.269-7-1.484v-12.051c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484v-11.613c2.004-1.247 4.648-1.725 7-1.922v12.051z"/></svg>
                <svg title="with a love for design" xmlns="http://www.w3.org/2000/svg" fill="white" width="49" height="49" viewBox="0 0 24 24"><path d="M8.997 13.985c.01 1.104-.88 2.008-1.986 2.015-1.105.009-2.005-.88-2.011-1.984-.01-1.105.879-2.005 1.982-2.016 1.106-.007 2.009.883 2.015 1.985zm-.978-3.986c-1.104.008-2.008-.88-2.015-1.987-.009-1.103.877-2.004 1.984-2.011 1.102-.01 2.008.877 2.012 1.982.012 1.107-.88 2.006-1.981 2.016zm7.981-4.014c.004 1.102-.881 2.008-1.985 2.015-1.106.01-2.008-.879-2.015-1.983-.011-1.106.878-2.006 1.985-2.015 1.101-.006 2.005.881 2.015 1.983zm-12 15.847c4.587.38 2.944-4.492 7.188-4.537l1.838 1.534c.458 5.537-6.315 6.772-9.026 3.003zm14.065-7.115c1.427-2.239 5.846-9.748 5.846-9.748.353-.623-.429-1.273-.975-.813 0 0-6.572 5.714-8.511 7.525-1.532 1.432-1.539 2.086-2.035 4.447l1.68 1.4c2.227-.915 2.868-1.04 3.995-2.811zm-12.622 4.806c-2.084-1.82-3.42-4.479-3.443-7.447-.044-5.51 4.406-10.03 9.92-10.075 3.838-.021 6.479 1.905 6.496 3.447l1.663-1.456c-1.01-2.223-4.182-4.045-8.176-3.992-6.623.055-11.955 5.466-11.903 12.092.023 2.912 1.083 5.57 2.823 7.635.958.492 2.123.329 2.62-.204zm12.797-1.906c1.059 1.97-1.351 3.37-3.545 3.992-.304.912-.803 1.721-1.374 2.311 5.255-.591 9.061-4.304 6.266-7.889-.459.685-.897 1.197-1.347 1.586z"/></svg>
                <svg title="courious about languages" xmlns="http://www.w3.org/2000/svg" fill="white" width="50" height="50" viewBox="0 0 24 24"><path d="M11.088 8.063c.062-.243.1-.426.135-.605l-1.1-.214-.109.5c-.371-.055-.767-.061-1.166-.021.009-.268.025-.531.049-.784h1.229v-1.042h-1.082c.054-.265.099-.424.144-.575l-1.074-.322c-.079.263-.144.521-.211.897h-1.225v1.042h1.092c-.029.336-.046.685-.051 1.038-1.207.443-1.719 1.288-1.719 2.053 0 .904.714 1.7 1.842 1.598 1.401-.128 2.337-1.186 2.885-2.487.567.327.805.876.591 1.385-.197.471-.78.919-1.892.896v1.121c1.234.019 2.448-.45 2.925-1.583.464-1.107-.067-2.317-1.263-2.897zm-1.446.766c-.175.387-.405.772-.698 1.075-.045-.323-.076-.676-.092-1.054.267-.035.537-.041.79-.021zm-1.894.362c.03.473.084.909.158 1.298-.998.183-1.038-.801-.158-1.298zm-5.748.161c0 1.873.849 2.943 1.683 3.943.031 1 .085 1.668-.333 3.183 1.748-.558 2.038-.778 3.008-1.374 1 .244 1.474.381 2.611.491-.094.708-.081 1.275.055 2.023-.752-.06-1.528-.178-2.33-.374-1.397.857-4.481 1.725-6.649 2.115.811-1.595 1.708-3.785 1.661-5.312-1.091-1.305-1.706-2.985-1.706-4.695 0-4.826 4.719-8.352 10-8.352 5.237 0 9.977 3.484 9.998 8.318-.644-.175-1.322-.277-2.021-.314-.229-3.34-3.713-6.004-7.977-6.004-4.411 0-8 2.85-8 6.352zm15.657 5.429l.725 2.074h-1.445l.72-2.074zm6.343 1.666c0-3.158-3.089-5.467-6.546-5.467-3.436 0-6.546 2.293-6.546 5.467 0 2.8 2.633 5.442 6.498 5.442.699 0 1.44-.087 2.213-.274.914.561 2.933 1.127 4.352 1.385-.53-1.045-1.117-2.479-1.088-3.479.714-.853 1.117-1.954 1.117-3.074zm-4.851 2.553l-.456-1.27h-2.062l-.451 1.27h-1.18l2.099-5.5h1.101l2.091 5.5h-1.142z"/></svg>
          </div>
          {/* <button>Expand to see more</button> */}
      </div>
    )
}
