import {Header} from '../components/Header.jsx';
import BlueSection from '../components/BlueSection.jsx';
import {Skills} from '../components/Skills.jsx';
import PinkSection from '../components/PinkSection.jsx';
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