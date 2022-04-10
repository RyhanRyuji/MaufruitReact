import React from "react";
import{FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa'
import'./footer.css'



 function Footer(){
    return(
        

<div className="footer-content">
            <h1>MauFruits</h1>
            <ul className="menu">
                <li><a href="#">Store</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Shipping & Returns</a></li>
                <li><a href="#">Terms & Conditions</a></li>
            </ul>

            <ul class="socials">
                <li><a href="#"><FaFacebookF size="2em" color="#3b5998"/></a></li>
                <li><a href="#"><FaInstagram size="2em" color="#8a3ab9"/></a></li> 
                <li><a href="#"><FaTwitter size="2em" color="#00acee"/></a></li>
               
             </ul>

             <p>@ 2022 Copyright made by ridwaan and ryhan</p>
        </div>
        
    )
 }
 export default Footer;