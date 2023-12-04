//carousel
import React from 'react';
import Macbook from '../assets/Macbook1.png';
import Iphone from '../assets/iphone.png'
import MH from '../assets/MHgif.gif'
import LL from '../assets/LLgif.gif'
import OG from '../assets/OG.gif'
import MG from '../assets/MGgif.gif'
import logoMH from '../assets/logo.jpeg'
import logoMG from '../assets/logoMG.png'
import logoOG from '../assets/logoOG.png'
import logoLL from '../assets/logoLine.png'
import { useState } from 'react';
import stiker1 from '../assets/wave.png';
import stiker2 from '../assets/pointer.png';
import stiker3 from '../assets/talking1.png';

export const Carousel=() =>{
  const projectData = [
    {
    title: "Beauty products Shop",
    description: `I designed and developed this E-commerce website because I wanted to practice the integration of client-side routing. `,
    features:`conection to the Firebase Database, products sorting and filtering, 
    dynamic shopping chart, client-side routing`,
    projectImage: MG,
    logo:logoMG,
    stiker: stiker2,
    stikerClass: 'projectPointer',
    link:"https://mangata-gallo-three.vercel.app/"
    },
    {
    title: "Instagram Clone",
    description: `This is Instagram with a twist, where every post is a work of art. 
    The ui was inspired by one of the solo projects I made at Scrimba to whitch I added the functionalities and the complete design.`,
    features:`conection to the Firebase Database, user authentification, search input, client-side routing`,
    projectImage: OG,
    logo:logoOG,
    stiker: stiker1,
    stikerClass: 'projectWave',
    link:"https://oldgram-alpha.vercel.app/"
    },
    {
      title: "Schone MobelHaus",
      description: `This is the first website I made. 
      I made it in the classic Beginner manner using only CSS, HTML and Vanilla Javascript. 
      For the design I found inspiration in the company story and I tried to express the joy of a new begining.`,
      features:`form integration`,
      projectImage: MH,
      logo:logoMH,
      stiker: stiker2,
      stikerClass: 'projectPointer',
      link:"https://xn--schnembelhaus-kmbd.com/index.html"
      },
    {
    title: "Little Lemon Restaurant",
    description: `I started this website as part of a graded assigment during "Meta Frontend Developer" course. 
    Being very pleased with the result, I decided to take the development further and transform it into a beautiful web application model.`,
    features:`online table booking, booking management, client-side routing, carousel `,
    projectImage: LL,
    logo:logoLL,
    stiker: stiker3,
    stikerClass: 'projectTalking',
    link:"https://little-lemon-6k6k-patrisialorenaschones-projects.vercel.app/"
    }
    ]
  const [index, setIndex] = useState(0);

  function next(){
    setIndex((prevIndex) => {
      if(prevIndex === projectData.length - 1){
        return 0;
      } else {
        return prevIndex + 1
      }});
  }
  function prev(){
    setIndex((prevIndex) => {
      if(prevIndex === 0){
      return prevIndex + (projectData.length - 1)
    } else {
      return prevIndex - 1
    }});
  }

  let projects = projectData.map(project => {
    return(
      <div className='carouselItem'>
          <div className='carouselCard'>
            <img className='cardLogo' height={65} src={project.logo} alt='website logo'/>
            <h2>{project.title}</h2>
            <div>
            <p>{project.description}</p>
            <p><span>Main features: </span>{project.features}</p>
            </div>
            <a target='blank' href={project.link} className='my-btn'>Go to the website</a>
            <img src={project.stiker} className={project.stikerClass} height={150}  alt="Patricia Lorena stiker" />
          </div>
          <div style={{position:"relative", margin:"auto"}}>
            <img src={project.logo == logoOG ? Iphone : Macbook} className='carouselImage'  alt="Project" />
            <img src={project.projectImage} className={project.logo == logoOG ? 'ProjectGifPhone' : 'ProjectGif'}  alt="a gif representation of the project" />
          </div>
        </div>
    )})

  return (
    <div id="projects" className="carouselSection">
      <h2 className="my-secondary-title"><span>🌟 </span> Projects</h2>
      <div className='carouselContainer'>
        <button className='carouselBtn carouselBtnLeft' onClick={prev}>&#9664; </button>
        {projects[index]}
        <button onClick={next} className='carouselBtn carouselBtnRight'> &#9654;</button>
      </div>
    </div>
  );
}
