import {useState} from "react";

export const  Form = ({setMessage})=> {

const [data, setData]= useState(
  {
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    message: "",
    agreement: false,
    jobType: "",
  }
);
const [isTouched, setIsTouched] = useState({
  firstName: false,
  lastName: false,
  email: false,
  tel: false,
  message: false,
})

function handleChange(event){
  let{name, value, type, checked} = event.target;
  setIsTouched((prevVal) =>{
    return{
      ...prevVal,
      [name]: true,
    }
  })
  setData((prevData) =>{
    return{
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }
  });
};

function isFormValid(){
  if(isFirstNameValid 
    &&isLastNameValid
    && isEmailValid
    && data.tel.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{0,6}$/)
    && isTelValid
    && data.message.length > 5
    && data.agreement
    && data.jobType != ""
    ){
    return true
  } else{
    return false
  }
}

function handleSubmit(){
  fetch("https://formsubmit.co/ajax/patriciaschone23@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        ...data
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
    
  setMessage((prevMessage)=> !prevMessage);
};
function isEmailValid(){
  if(data.email.length > 3 && data.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
    return true
  } else {
    return false
  }
}
function isTelValid(){
  if(data.tel.length > 3 && data.tel.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/)){
    return true
  } else {
    return false
  }
}
function isFirstNameValid(){
  if(data.firstName.length >=2 && data.firstName.match(/^[a-z_-]{2,20}$/)){
    return true
  } else {
    return false
  }
}
function isLastNameValid(){
  if(data.lastName.length >=2 && data.lastName.match(/^[a-z_-]{2,20}$/)){
    return true
  } else {
    return false
  }
}

return(
 <form  action="" method="POST" onSubmit={handleSubmit}>
  <div>
    <label htmlFor="firstName">
    {!isFirstNameValid() && isTouched.firstName && <svg className="inputMark" xmlns="http://www.w3.org/2000/svg" fill="red" width="20" height="20" viewBox="0 0 24 24"><path d="M16.143 2l5.857 5.858v8.284l-5.857 5.858h-8.286l-5.857-5.858v-8.284l5.857-5.858h8.286zm.828-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-6.281 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm1.31 10.724c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/></svg>}
    {isFirstNameValid() && isTouched.firstName && <svg className="inputMark" xmlns="http://www.w3.org/2000/svg" fill="green" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z"/></svg>}
     First Name: </label>
    <input 
    value={data.firstName} 
    name="firstName"
    onChange={handleChange} 
    id="firstName" type="text" 
    required
    pattern="[a-z]"
    className={!isFirstNameValid() && isTouched.firstName ? "invalid" : "valid"}
    />
  </div>
  <div>
    <label htmlFor="lastName">
    {!isLastNameValid() && isTouched.lastName && <svg className="inputMark" xmlns="http://www.w3.org/2000/svg" fill="red" width="20" height="20" viewBox="0 0 24 24"><path d="M16.143 2l5.857 5.858v8.284l-5.857 5.858h-8.286l-5.857-5.858v-8.284l5.857-5.858h8.286zm.828-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-6.281 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm1.31 10.724c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/></svg>}
    {isLastNameValid() && isTouched.lastName && <svg className="inputMark" xmlns="http://www.w3.org/2000/svg" fill="green" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z"/></svg>}
     Last Name: </label>
    <input 
    value={data.lastName} 
    name="lastName"
    onChange={handleChange}
    id="lastName" type="text" 
    required
    pattern="[a-z]"
    className={!isLastNameValid() && isTouched.lastName ? "invalid" : "valid"}
    />
  </div>
  <div>
    <label htmlFor="email"> 
    {!isEmailValid() && isTouched.email && <svg className="inputMark" xmlns="http://www.w3.org/2000/svg" fill="red" width="20" height="20" viewBox="0 0 24 24"><path d="M16.143 2l5.857 5.858v8.284l-5.857 5.858h-8.286l-5.857-5.858v-8.284l5.857-5.858h8.286zm.828-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-6.281 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm1.31 10.724c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/></svg>}
    {isEmailValid() && isTouched.email && <svg className="inputMark" xmlns="http://www.w3.org/2000/svg" fill="green" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z"/></svg>}
     Email: </label>
    <input 
    value={data.email} 
    name="email"
    onChange={handleChange}
    id="email" type="email" 
    required
    className={!isEmailValid() && isTouched.email ? "invalid" : "valid"}
    />
  </div>
  <div>
    <label htmlFor="phoneNumber">
    {!isTelValid() && isTouched.tel && <svg className="inputMark" xmlns="http://www.w3.org/2000/svg" fill="red" width="20" height="20" viewBox="0 0 24 24"><path d="M16.143 2l5.857 5.858v8.284l-5.857 5.858h-8.286l-5.857-5.858v-8.284l5.857-5.858h8.286zm.828-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-6.281 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm1.31 10.724c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/></svg>}
    {isTelValid() && isTouched.tel && <svg className="inputMark" xmlns="http://www.w3.org/2000/svg" fill="green" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z"/></svg>}
     Telephone: </label>
    <input 
    value={data.tel} 
    name="tel"
    onChange={handleChange}
    id="phoneNumber" type="tel"
    required
    pattern="[0-9]"
    className={!isTelValid() && isTouched.tel ? "invalid" : "valid"}
    />
  </div>
  <div className="formMessage">
    <label className="formMessage" htmlFor="message">
    {data.message.length < 5 && isTouched.message && <svg className="inputMark" xmlns="http://www.w3.org/2000/svg" fill="red" width="20" height="20" viewBox="0 0 24 24"><path d="M16.143 2l5.857 5.858v8.284l-5.857 5.858h-8.286l-5.857-5.858v-8.284l5.857-5.858h8.286zm.828-2h-9.942l-7.029 7.029v9.941l7.029 7.03h9.941l7.03-7.029v-9.942l-7.029-7.029zm-6.281 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm1.31 10.724c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/></svg>}
    {data.message.length >= 5 && isTouched.message && <svg className="inputMark" xmlns="http://www.w3.org/2000/svg" fill="green" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z"/></svg>}
    Write your message here:</label>
    <textarea 
    value={data.message} 
    name="message"
    onChange={handleChange}
    id="message" cols="50" rows="10"
    required
    className={data.message.length < 5 && isTouched.message ? "invalid" : "valid"}
    />
  </div>
  <div>
    <label htmlFor="jobType">Type of inqury:</label>
    <select  
    value={data.jobType}
    name="jobType"
    onChange={handleChange}
    id="jobType" 
    required>
      <option value="">-Choose-</option>
      <option value="freelance project">Freelance project proposal</option>
      <option value="job position">Job position proposal</option>
      <option value="other">Other</option>
    </select>
  </div>
  <div className="agreement">
    <input 
    checked={data.agreement} 
    name="agreement"
    onChange={handleChange}
    id="agreement" type="checkbox" 
    required/>
    <label className="agreement"  htmlFor="agreement"> *I agree to the <a target="blank" href="https://mail.google.com/mail/u/0/#inbox">Terms and Conditions</a> of submitting this Form </label>
  </div>
  {/* <p className="agreement">All the fields are mandatory</p> */}
  <button disabled={!isFormValid()} className="submitBtn my-btn" type="submit">Submit message</button>
 </form>
)
}
