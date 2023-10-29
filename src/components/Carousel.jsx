//carousel
import React from 'react';
import Macbook from '../assets/macbook.png';
import MH from '../assets/MH.gif'
import LL from '../assets/LL.gif'
import logoMH from '../assets/logo.jpeg'
import logoMG from '../assets/logoMG.png'
import logoLL from '../assets/logoLine.png'
import { useState } from 'react';
import stiker1 from '../assets/wave.png';
import stiker2 from '../assets/pointer.png';
import stiker3 from '../assets/talking1.png';
import { ThemeContext } from '../App';

export const Carousel=() =>{
  let {lightMode} = React.useContext(ThemeContext)
  const projectData = [{
    title: "Schone MobelHaus",
    description: `This is the first website I made. 
    I made it in the classic Beginner manner using only CSS, HTML and Vanilla Javascript. 
    For the design I found inspiration in the company story and I tried to express the joy of a new begining.
    Schone MobelHaus is a german company specialised in `,
    projectImage: MH,
    logo:logoMH,
    stiker: stiker1,
    stikerClass: 'projectWave',
    link:"https://xn--schnembelhaus-kmbd.com/index.html"
    },
    {
    title: "Instagram Clone",
    description: `This is Instagram with a twist, where every post is a work of art. `,
    projectImage: MH,
    logo:logoMG,
    stiker: stiker2,
    stikerClass: 'projectPointer',
    link:"https://little-lemon-6k6k-patrisialorenaschones-projects.vercel.app/"
    },
    {
    title: "J Shop",
    description: `I started this website as part of a graded assigment during meta front end dev course. 
    Being very pleased with the result, I decided to take the development further and transform it into 
    a beautiful E-commerce website model. Main features: online orders, payments.`,
    projectImage: MH,
    logo:logoMG,
    stiker: stiker2,
    stikerClass: 'projectPointer',
    link:"https://little-lemon-6k6k-patrisialorenaschones-projects.vercel.app/"
    },
    {
    title: "Little Lemon Restaurant",
    description: `I started this website as part of a graded assigment during "Meta Frontend Developer" course. 
    Being very pleased with the result, I decided to take the development further and transform it into 
    a beautiful web aplication model. Main features: online table booking, booking management. `,
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
          <div className={lightMode ? 'carouselCard' : 'carouselCard carouselCardDark'}>
            <img className='cardLogo' height={80} src={project.logo} alt='website logo'/>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a target='blank' href={project.link}><button className='my-btn'>Go to the website</button></a>
            <img className={project.stikerClass} height={150} src={project.stiker} alt="Patricia Lorena stiker" />
          </div>
          <div className={lightMode ? 'carouselImage' : "carouselImageDark carouselImage "}>
            <img className='carouselImage'  src={Macbook} alt="Project" />
            <img className='ProjectGif' src={project.projectImage} alt="" />
          </div>
        </div>
    )})

  return (
    <div id="projects" className="carouselSection">
      <h2 className="my-secondary-title"><span>🌟 </span> Projects</h2>
      <div className='carouselContainer'>
        <button className='carouselBtn' onClick={prev}>&#9664; </button>
        {projects[index]}
        <button onClick={next} className='carouselBtn'> &#9654;</button>
      </div>
    </div>
  );
}
