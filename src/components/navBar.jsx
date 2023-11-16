//navbar
import React from "react"
import {ToggleButton} from "./ToggleButton.jsx"
import hamburgerMenu from "../assets/hamburger.svg"
import closeButton from "../assets/close.svg"
import {useState} from "react"

export default function Navbar(){
    const [sideNav, setSideNav] = useState(false)
    function toggleNav(){
        setSideNav(!sideNav);
    }

    return(
        <div  className="my-navbar">
            <img onClick={toggleNav} src={ sideNav ? closeButton : hamburgerMenu} alt="hamburger menu" height="50" width="50" className="hamburgerMenu"/>
            <ul className={sideNav ? "sideNav" : "hidden"}>
                    <a href="/#aboutMe" className="my-nav-btn my-ab-btn">About me</a>
                    <a href="/#skills" className="my-nav-btn my-sk-btn">Skills</a>
                    <a href="/#certificates" className="my-nav-btn my-cer-btn">Certificates</a>
                    <a href="/#projects" className="my-nav-btn my-proj-btn">Projects</a>
                    <a href="/#contact" className="my-nav-btn my-con-btn">Contact</a>
            </ul>
            <ul className="upNav">
                <a href="/#aboutMe" className="my-nav-btn my-ab-btn">About me</a>
                <a href="/#skills" className="my-nav-btn my-sk-btn">Skills</a>
                <a href="/#certificates" className="my-nav-btn my-cer-btn">Certificates</a>
                <a href="/#projects" className="my-nav-btn my-proj-btn">Projects</a>
                <a href="/#contact" className="my-nav-btn my-con-btn">Contact</a>
            </ul>
            <ToggleButton/>
        </div>
    )
}