import React,{useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Register.css'


const Register = props =>{
    const initialValues = { name: "", email: "", password: "",Confirmpassword:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange =(e) =>{
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);
    const validate =(values) =>{
        const errors ={};
        const regexName=/^(?!\s)[A-z\s]+$/i;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

        if (!values.name) {
            errors.name = "Name is required!";
          }
          else if (!regexName.test(values.name)){
            errors.name="This is not a valid name!"
          }

          if (!values.email) {
            errors.email = "Email is required!";
          } 
           else if (!regexEmail.test(values.email)) {
            errors.email = "This is not a valid email format!";
          }
          if(!values.password){
              errors.password="Password is required!"
          }
          else if(!regexPassword.test(values.password)){
              errors.password="Password must be at least 8 characters, no more than 32 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit."
          }
          if(values.Confirmpassword !==values.password){
              errors.Confirmpassword="Password does not match";
          }
         return errors;
    }

    return(

   <form id="registerform" onSubmit={handleSubmit} >
       <h4>Register</h4>
       <div className="form-group mb-3">
           <label class="form-label">Name</label>
           <input type="text" className="form-control" name="name" placeholder="Enter Name" value={formValues.name} onChange={handleChange}/>
       </div>
       <p>{formErrors.name}</p>

       <div className="form-group mb-3">
           <label class="form-label">Email</label>
           <input type="email" className="form-control" name="email" placeholder="Enter Email" value={formValues.email} onChange={handleChange}/>
       </div>
       <p>{formErrors.email}</p>

       <div className="form-group mb-3">
           <label class="form-label">Password</label>
           <input type="password" className="form-control" name="password" placeholder="Enter password" value={formValues.password} onChange={handleChange}/>
       </div>
       <p>{formErrors.password}</p>

       <div className="form-group mb-3">
           <label class="form-label">Confirm Password</label>
           <input type="password" className="form-control" name="Confirmpassword" placeholder="Confirm Password" value={formValues.Confirmpassword} onChange={handleChange}/>
       </div>
       <p>{formErrors.Confirmpassword}</p>

       <div className="form-group form-check m-3">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label">I agree all statements in Terms of service</label>
              </div>
        <div className="container">    
        <button type="submit" className="btn btn-success">Register</button>
        </div>  
   </form>
    
    )
}
export default Register;