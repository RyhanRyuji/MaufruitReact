import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoLocationOutline } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import './InfoContact.css'
const InfoContact =(props)=>{
    return(
       
        <div className="contactInfo">
            <div className="row justify-content-md-center">
                <div className="col-3 icon">
                <IoLocationOutline size="3em"/>
                </div>
                <div className="col-5 info">
                <span>Address </span> <br/>
                     Ally ST, Plaine Verte,<br/>
                     Port Louis 
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-3 icon">
                <BiPhone size="3em"/>
                </div>
                <div className="col-5 info">
                <span>Phone </span> <br/>
                        +230 58022193 <br/>
                        +230 54786746 
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col-3 icon">
                < AiOutlineMail size="3em"/>
                </div>
                <div className="col-5 info">
                <span>Email </span> <br/>
                    Mau_Fruits@gmail.com
                </div>
            </div>
        </div>
    )
}
export default InfoContact;  