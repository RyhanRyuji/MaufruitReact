import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import{ Container,Row } from "react-bootstrap";
import './AboutUs.css';
import Store from './Store.png';
function AboutUs(){
 return(
     
  <div className="container">
      <h2>Our History</h2>
      <h3>Locally owned and operated Fruit  Store</h3>
      <h4>Stemming from the growth of online technology and the demand from our loyal customers for online shopping, MauFruits was formed by a local fruit store, to help give locals an easy way to shop online for their day to day fruit requirements.</h4>
      <img src={Store} alt="Store" /> 
    </div>
   
 );
}
export default AboutUs;
