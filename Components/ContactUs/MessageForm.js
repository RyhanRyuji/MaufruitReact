import React,{useState,useEffect } from 'react'
import { Container,Form,Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './MessageForm.css'
 const MessageForm = () => {
    const initialValues = { name: "", email: "", phone: "",text:""};
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

          if(!values.phone){
              errors.phone ="Phone required!"
          }
           else if(values.phone.length>9){
               errors.phone ="Invalid Phone number"
           }
           else if(values.phone.length<7){
            errors.phone ="Invalid Phone number"
        }

          if(!values.text){
              errors.text="Message required!"
          }
        return errors;
    }

  return (
    <div className='MessageBox'>
        <h2>Send a Message</h2>
        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Message send succesfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}
        <Form  onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
             <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter Name" value={formValues.name} onChange={handleChange}/>
             </Form.Group>
             <p>{formErrors.name}</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" value={formValues.email} onChange={handleChange}/>
              <p>{formErrors.email}</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
             <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" name="phone" placeholder="Enter Phone-number" value={formValues.phone} onChange={handleChange}/>
             </Form.Group>
             <p>{formErrors.phone}</p>
             <Form.Group className="mb-3" controlId="formBasicTextArea">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} name="text" placeholder="Enter Your Message" value={formValues.text} onChange={handleChange}/>
             </Form.Group>
             <p>{formErrors.text}</p>
 
              <Button variant="success" type="submit">
               Submit
             </Button>
</Form>


   </div>
  )
}
export default MessageForm;