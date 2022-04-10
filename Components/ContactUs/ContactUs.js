import React from "react";
import './ContactUs.css';
import "bootstrap/dist/css/bootstrap.min.css";
import InfoContact from './InfoContact';
import Map from './Map';
import MessageForm from './MessageForm';

const ContactUs = () =>{
    return (
        <div className="WholeContainer">
        <h1 className="ContactTitle">Contact </h1>
          <div className="row">
            <div className="col-lg-5 InfoMap">
            <InfoContact/>
            <Map />
            </div>
    
            <div className="col-lg-6 MessageForm">
            <MessageForm/>
            </div>
            <div className="col"></div>
          </div>
        </div>
       
      );
}
export default ContactUs;