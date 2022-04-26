import React,{useState} from "react";
import PersonalInformation from "./PersonalInformation";
import SecurityInformation from "./SecurityInformation";
import MyOrder from "./MyOrder";
import "bootstrap/dist/css/bootstrap.min.css";
import './DisplayAccount.css'

const DisplayAccount =props =>{
    const options = ["PersonalInformation", "SecurityInformation","MyOrder"];
    const [myOption, setMyOption] = useState("PersonalInformation");
    return(
        <div className="row">
            <div className="col-6 col-sm-3">
             <div className="MenuItem">
                 <nav>
                <button key={options[0]} className={`${myOption===options[0]?'fixedUnderlineButton':''}`} onClick={() => setMyOption(options[0])}>Personal Information</button>
                <button key={options[1]} className={`${myOption===options[1]?'fixedUnderlineButton':''}`}  onClick={() => setMyOption(options[1])}>Security Information</button>
                <button key={options[2]} className={`${myOption===options[2]?'fixedUnderlineButton':''}`} onClick={() => setMyOption(options[2])}>MyOrder</button>
                </nav>
             </div>
            </div>
            <div className="col-6">
                {myOption ==="PersonalInformation" &&(<PersonalInformation/> )}
                {myOption ==="SecurityInformation" &&(  <SecurityInformation/> )}
                {myOption ==="MyOrder" &&(<MyOrder/> )}

             
           
             
            </div>
        
        </div>
    )
}
export default DisplayAccount;