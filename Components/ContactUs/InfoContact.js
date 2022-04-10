import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import './InfoContact.css';

const InfoContact = (props) =>{
    return(
        <Container className="InformationBoxColor">
            <Row className="justify-content-md-center">
                <Col className="col-3 icon">
                  <IoLocationOutline size="3em"/>
                </Col>
                <Col  className="col-5 info">
                       <span>Address </span> <br/>
                        Ally ST, Plaine Verte,<br/>
                        Port Louis
                    
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="col-3 icon">
                  <BiPhone size="3em"/>
                </Col>
                <Col  className="col-5 info">
                        <span>Phone </span> <br/>
                        +230 58022193 <br/>
                        +230 54786746 
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="col-3 icon">
                    < AiOutlineMail size="3em"/>
                </Col>
                <Col  className="col-5 info">
                        <span>Email </span> <br/>
                        Mau_Fruits@gmail.com
                </Col>
            </Row>
        </Container>
    );
}
export default InfoContact;