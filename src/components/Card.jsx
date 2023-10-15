//Card


import certificate1 from "../assets/certificate1.jpg";
import certificate2 from "../assets/certificate2.jpg"
let data = [
    {title: "Meta Front-End Developer",
    id: 1,
        description: "just a line of text",
        image: certificate1,
        button: {backgroundColor: "#0d6efd"},
        link: "https://coursera.org/share/ec8667b042ae7ec303db5391a6dcc8a7"
    },
    {title: "Figma UI UX Design Essentials",
    id: 2,
        description: "just a line of text",
        image: certificate2,
        button: {backgroundColor: "#198754"},
        link: "https://skl.sh/44fYL3M"
    },
    {title: "Mimo Certificate of Complition",
    id: 3,
        description: "just a line of text",
        // image: "",
        button: {backgroundColor: "#712CF9"},
        link: ""
    },
    {title: "title",
    id: 4,
        description: "just a line of text",
        // image: "",
        button: {backgroundColor: "#6c757d"},
        link: ""
    }
    ]; 

export const CerificateCard = (props) =>{
    let certificates = data.map(certificate => {
        return (
            <div className={props.lightMode ? "my-card" : "my-cardDark"} key={certificate.id}>
                <img height={"200px"} alt="diploma" src={certificate.image}></img>
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
