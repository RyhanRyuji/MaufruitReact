import React,{useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Register.css';
import { RegisterUser } from "../../services/UserService";


const Register = props =>{
    const initialValues = { name: "", email: "", password: "",Confirmpassword:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isValid, setIsValid] = useState(false)
 
    const handleChange =(e) =>{
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) =>{
        e.preventDefault(); 
        console.log(formValues);

        const formMsg = validate(formValues);
    setFormErrors(formMsg.errors);
    setIsValid(formMsg.validity);  
    if(formMsg.validity){
        
             RegisterUser(formValues);
        
         }
    }


    const validate =(values) =>{
        const errors ={};
        let formValid = true;
        const regexName=/^(?!\s)[A-z\s]+$/i;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

        if (!values.name) {
            errors.name = "Name is required!";
            formValid = false;
          }
          else if (!regexName.test(values.name)){
            errors.name="This is not a valid name!";
            formValid = false;
          }

          if (!values.email) {
            errors.email = "Email is required!";
            formValid = false;
          } 
           else if (!regexEmail.test(values.email)) {
            errors.email = "This is not a valid email format!";
            formValid = false;
          }
          if(!values.password){
              errors.password="Password is required!";
              formValid = false;
          }
          else if(!regexPassword.test(values.password)){
              errors.password="Password must be at least 8 characters, no more than 32 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.";
              formValid = false;
          }
          if(values.Confirmpassword !==values.password){
              errors.Confirmpassword="Password does not match";
              formValid = false;
          }
          return {
            validity: formValid,
            errors
        };
    }

    return(

   <form className="registerform" onSubmit={handleSubmit} >
       <h4>Register</h4>
       <div className="form-group mb-3">
           <label className="form-label">Name</label>
           <input type="text" className="form-control" name="name" placeholder="Enter Name"  onChange={handleChange} autoComplete="off"/>
       </div>
       <p>{formErrors.name}</p>

       <div className="form-group mb-3">
           <label className="form-label">Email</label>
           <input type="email" className="form-control" name="email" placeholder="Enter Email"  onChange={handleChange} autoComplete="off"/>
       </div>
       <p>{formErrors.email}</p>

       <div className="form-group mb-3">
           <label className="form-label">Password</label>
           <input type="password" className="form-control" name="password" placeholder="Enter password"  onChange={handleChange} autoComplete="off"/>
       </div>
       <p>{formErrors.password}</p>

       <div className="form-group mb-3">
           <label className="form-label">Confirm Password</label>
           <input type="password" className="form-control" name="Confirmpassword" placeholder="Confirm Password" onChange={handleChange} autoComplete="off"/>
       </div>
       <p>{formErrors.Confirmpassword}</p>

       <div className="form-group form-check m-3">
                <input type="checkbox" className="form-check-input" required/>
                <label className="form-check-label">I agree all statements in Terms of service</label>
              </div>
        <div className="container">   
        {isValid && (<div className="success">Form submitted successfully</div>)}
 
        <button type="submit" className="btn btn-success">Register</button>
        </div>  
   </form>
    
    )
}
export default Register;