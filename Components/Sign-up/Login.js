import React,{useState} from "react";
import {Container,Form,Button} from 'react-bootstrap';
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
      
          <Form onSubmit={handleSubmit} id="loginform">
              <h4>Login</h4>
              <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email</Form.Label>
               <Form.Control type="email" name="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
              </Form.Group>
              <p>{emailError}</p>

              <Form.Group className="mb-1" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" name="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
              </Form.Group>
              <p>{passwordError}</p>
              <Form.Group className="mb-4">
               <a href="#">Forget Password?</a>
              </Form.Group>
        
            <Container>
              <Button variant="success" size="large" type="submit">
               Login </Button>
            </Container>
             
          </Form>

 
    )
}
export default Login;