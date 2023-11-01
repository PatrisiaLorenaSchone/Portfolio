import {Header} from '../components/Header.jsx';
import {BlueSection} from '../components/blueSection.jsx';
import {Skills} from '../components/Skills.jsx';
import {PinkSection} from '../components/pinkSection.jsx';
import {Carousel} from "../components/Carousel.jsx";
import React from "react"

export default function Homepage(){
    return(
        <>
        <Header/>
        <BlueSection/>
        <Skills/>
        <PinkSection/>
        <Carousel/>
        </>
    )
}