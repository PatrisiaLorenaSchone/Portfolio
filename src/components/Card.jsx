//Card

// import {useEffect} from "react"
import certificate1 from "../assets/certificate1.png";
import certificate2 from "../assets/certificate2.jpg";
import certificate3 from "../assets/certificate3.png";
// import VanillaTilt from "vanilla-tilt"

let data = [
    {title: "Meta Front-End Developer",
    id: 1,
        description: "",
        image: certificate1,
        button: {backgroundColor: "#0d6efd"},
        link: "https://www.coursera.org/account/accomplishments/professional-cert/6D3SB26JVW5B",
        border: "3px solid #0d6efd"
    },
    {title: "Figma UI UX Design Essentials",
    id: 2,
        description: "",
        image: certificate2,
        button: {backgroundColor: "#198754"},
        link: "https://skl.sh/44fYL3M",
        border: "2px solid green"
    },
    {title: "Scrimba Frontend Developer",
    id: 3,
        description: "",
        image: certificate2,
        button: {backgroundColor: "#712CF9"},
        link: "",
        border: "2px solid #0d6efd"
    },
    {title: "React Native Specialization",
    id: 4,
        description: "",
        image: certificate3,
        button: {backgroundColor: "#6c757d"},
        link: "",
        border: "2px solid #0d6efd"
    }
    ]; 

export const CerificateCard = (props) =>{
// useEffect(()=>{
//     VanillaTilt.init(document.querySelectorAll(".my-card"),{
//         max: 20,
//         speed: 10,
//     })
// })
    let certificates = data.map(certificate => {
        return (
            <div className={props.lightMode ? "my-card" : "my-cardDark my-card"} key={certificate.id}>
                <img className="cardImg" style={{border: certificate.border}} height={"200px"} alt="diploma" src={certificate.image}></img>
                <h3 className="card-title">{certificate.title}</h3>
                <p>{certificate.description}</p>
                <a target="blank" href={certificate.link}><button className="card-btn" style={certificate.button}>See Credentials</button></a>
            </div>
        )});
return (
    <div className="my-card-container">
      {certificates}
    </div>
  );
}
