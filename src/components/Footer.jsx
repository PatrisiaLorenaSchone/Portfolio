
//footer

import {Form} from "./Form.jsx";
import envelope from "../assets/envelope.png"
import {useState} from "react"
export const Footer=()=> {
  const[message, setMessage] = useState(false);

    return(
        <footer id="contact">
            <h2><span>📬 </span> Contact </h2>
            <div className="footerContent">
                <div>
                <ul className="my-list">
                     <li>Terms</li>
                     <li>Privacy</li>
                     <li>Help</li>
                     <li>Accessibility</li>
                     <li>Contact</li>
                 </ul>
                 <ul className="my-list">
                     <li>About</li>
                     <li>Feedback</li>
                     <li>Prices</li>
                 </ul>
                </div>
                {message 
                ? <div className="formAfter">
                    <img className="envelopeStiker" src={envelope} alt="Patricia Lorena stiker"/>
                    <p><b>Thank you for your Message!</b> We will respond as soon as possible.</p>
                  </div> 
                  : <Form setMessage={setMessage}/>}
            </div>
            <hr/>
            <div className="my-socials">
                 <a target="blank" href="http://www.github.com" className="git-svg">
                  <svg width="28" height="30" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg">
                     <path d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z" />
                  </svg>
                 </a>
                 <a target="blank" href="http://www.linkedin.com" className="linkedin-svg">
                   <svg width="26" height="26" viewBox="0 0 18 18" fill="black" xmlns="http://www.w3.org/2000/svg">
                     <path d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z" />
                   </svg>
                 </a>
                 <a href="mailto:patriciaschone23@gmail.com" className="mail-svg">
                   <svg width="29" height="29" viewBox="0 0 25 25" fill="black" xmlns="http://www.w3.org/2000/svg">
                     <path d="M12.5 0C9.18479 0 6.00537 1.31696 3.66117 3.66117C1.31696 6.00537 0 9.18479 0 12.5C0 15.8152 1.31696 18.9946 3.66117 21.3388C6.00537 23.683 9.18479 25 12.5 25C15.8152 25 18.9946 23.683 21.3388 21.3388C23.683 18.9946 25 15.8152 25 12.5C25 9.18479 23.683 6.00537 21.3388 3.66117C18.9946 1.31696 15.8152 0 12.5 0ZM6.25 6.25H18.75C18.9734 6.25 19.1891 6.29844 19.3891 6.3875L12.5 14.4234L5.61094 6.3875C5.81161 6.2963 6.02958 6.2494 6.25 6.25ZM4.6875 17.1875V7.8125L4.69063 7.71406L9.27188 13.0594L4.74062 17.5906C4.70483 17.4593 4.68696 17.3237 4.6875 17.1875ZM18.75 18.75H6.25C6.1125 18.75 5.97656 18.7312 5.84688 18.6969L10.2937 14.25L12.5016 16.825L14.7094 14.25L19.1563 18.6969C19.0249 18.7327 18.8893 18.7505 18.7531 18.75H18.75ZM20.3125 17.1875C20.3125 17.325 20.2937 17.4609 20.2594 17.5906L15.7281 13.0594L20.3094 7.71406L20.3125 7.8125V17.1875Z" />
                   </svg>
                 </a>
                 <a target="blank" href="https://www.coursera.org/user/4d4e5c888524c5f970ba73dc714a23b6" className="facebook-svg">
                   <svg width="25" height="25" viewBox="0 0 20 20" fill="black" xmlns="http://www.w3.org/2000/svg">
                     <path fillRule="evenodd" clipRule="evenodd" d="M13.725 20V12.255H16.325L16.714 9.237H13.724V7.31C13.724 6.436 13.967 5.84 15.221 5.84H16.819V3.14C16.0451 3.05764 15.2673 3.01758 14.489 3.02C12.185 3.02 10.608 4.427 10.608 7.01V9.237H8V12.255H10.607V20H1.104C0.494 20 0 19.506 0 18.896V1.104C0 0.494 0.494 0 1.104 0H18.896C19.506 0 20 0.494 20 1.104V18.896C20 19.506 19.506 20 18.896 20H13.725Z" />
                   </svg>
                 </a>
                 <a href="tel:+4733378901" className="tel-svg">
                   <svg width="29" height="29" viewBox="0 0 25 25"  fill="black" xmlns="http://www.w3.org/2000/svg">
                     <path d="M12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0ZM8.00781 4.96521C8.26535 4.95002 8.49815 5.10396 8.67463 5.37719L10.3836 8.61815C10.5635 9.00219 10.4613 9.4134 10.1929 9.68779L9.4101 10.4706C9.36179 10.5368 9.33 10.6113 9.32923 10.6933C9.62942 11.8553 10.54 12.9271 11.3434 13.6642C12.1468 14.4013 13.0103 15.3993 14.1312 15.6357C14.2697 15.6743 14.4394 15.6882 14.5386 15.596L15.448 14.6698C15.7619 14.4319 16.216 14.3166 16.5512 14.5111H16.5665L19.6502 16.3315C20.1029 16.6152 20.1498 17.1637 19.8257 17.4973L17.7017 19.6045C17.3881 19.9262 16.9714 20.0343 16.5665 20.0348C14.7759 19.9811 13.084 19.1023 11.6944 18.1992C9.41333 16.5397 7.32098 14.4815 6.0074 11.9949C5.5036 10.9522 4.91179 9.62181 4.96827 8.45798C4.97331 8.02015 5.09177 7.59121 5.4001 7.309L7.52413 5.18498C7.68958 5.04419 7.85327 4.97433 8.00781 4.96521Z" />
                   </svg>
                 </a>
            </div>
            <small className="text-center">Copyrights</small>
        </footer>
    )
}
