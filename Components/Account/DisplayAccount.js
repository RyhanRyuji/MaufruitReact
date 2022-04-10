import React from "react";
import Menu from "./Menu";
import PersonalInformation from "./PersonalInformation";
import SecurityInformation from "./SecurityInformation";
import "bootstrap/dist/css/bootstrap.min.css";
import './DisplayAccount.css'

const DisplayAccount =props =>{
    return(
        <div className="row">
            <div className="col-6 col-sm-3">
             <Menu/>
            </div>
            <div className="col-6">
             <PersonalInformation/>
             {/* <SecurityInformation/> */}
             
            </div>
        
        </div>
    )
}
export default DisplayAccount;