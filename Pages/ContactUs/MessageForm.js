import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './MessageForm.css'
import { Form, Button } from 'react-bootstrap';
import emailjs from "emailjs-com"
const MessageForm = () => {
  const initialValues = { name: "", email: "", phone: "", text: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isValid, setIsValid] = useState(false)
 


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);

    const formMsg = validate(formValues);
    setFormErrors(formMsg.errors);
    setIsValid(formMsg.validity);  
    if(formMsg.validity){ 
    emailjs.sendForm('service_7yjzo1q', 'template_3b2e2ps', e.target,'taf3MVGlO0Lk-EJls'
    ).then(res=>{
      console.log(res);
    }).catch(err=>console.log(err))
  }
}
  const validate = (values) => {
    let formValid = true;

    const errors = {};
    const regexName = /^(?!\s)[A-z\s]+$/i;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "Name is required!";
      formValid = false;
    }
    else if (!regexName.test(values.name)) {
      errors.name = "This is not a valid name!"
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

    if (!values.phone) {
      errors.phone = "Phone required!";
      formValid = false;
    }
    else if (values.phone.length > 9) {
      errors.phone = "Invalid Phone number";
      formValid = false;
    }
    else if (values.phone.length < 7) {
      errors.phone = "Invalid Phone number";
      formValid = false;
    }

    if (!values.text) {
      errors.text = "Message required!";
      formValid = false;
    }
    return {
      validity: formValid,
      errors
  };
  }
  return (
    <div className='MessageBox'>
      <h2>Send a Message</h2>
  
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Name"  onChange={handleChange} />
        </Form.Group>
        <p>{formErrors.name}</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email"  onChange={handleChange} />
          <p>{formErrors.email}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" name="phone" placeholder="Enter Phone-number"  onChange={handleChange}  />
        </Form.Group>
        <p>{formErrors.phone}</p>
        <Form.Group className="mb-3" controlId="formBasicTextArea">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} name="text" placeholder="Enter Your Message"  onChange={handleChange}/>
        </Form.Group>
        <p>{formErrors.text}</p>

        {isValid && (<div className="success">Form submitted successfully</div>)}
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>


    </div>
  )
}
export default MessageForm;