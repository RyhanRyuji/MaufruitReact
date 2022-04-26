import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css';
const Login = props =>{

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    handleValidation();

  }
  const handleValidation = (event) => {
    let formIsValid = true;
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i)) {
        formIsValid = false;
        setemailError("Email Not Valid");
        return false;
      } else {
        setemailError("");
        formIsValid = true;
      }
  
      if (!password.match(/^[a-zA-Z0-9]{8,22}$/)) {
        formIsValid = false;
        setpasswordError(
          "Password length must best min 8 Chracters and Max 22 Chracters"
        );
        return false;
      } else {
        setpasswordError("");
        formIsValid = true;
      }
  
      return formIsValid;

  }



    return(
      
          <form onSubmit={handleSubmit} className="loginform">
              <h4>Login</h4>
              <div className="form-group mb-3" controlid="formBasicEmail">
              <label className="form-label">Email</label>
               <input className="form-control" type="email" name="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
              </div>
              <p>{emailError}</p>

              <div className="form-group mb-1" controlid="formBasicPassword">
               <label className="form-label">Password</label>
               <input className="form-control" type="password" name="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
              </div>
              <p>{passwordError}</p>
              <div className="form-group mb-4">
               <a href="#">Forget Password?</a>
              </div>
        
              <div className="container"> 
              <button className="btn btn-success" variant="success" size="large" type="submit">
               Login </button>
            </div>
             
          </form>

 
    )
}
export default Login;