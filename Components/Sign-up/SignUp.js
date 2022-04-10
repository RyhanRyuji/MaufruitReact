import react,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './SignUp.css'
import Login from './Login';
import Register from "./Register";
const SignUp = props => {
    const options = ["Login", "Register"];
    const [myOption, setMyOption] = useState("Login");
    
    return (
        <div >
            <div className="col mb-5 col-12 text-center">
                <div className="btn-group" role="group" aria-label="Basic example">
                {/* {options.map(option => (
                            <button type="button"  key={option} className={`togg-btn ${option}`} onClick={() => setMyOption(option)}>
                                {option}
                            </button>
                ))} */}
                 <button type="button"  key={options[0]} className={`togg-btn ${myOption===options[0]?'fixedColButton':''}`} onClick={() => setMyOption(options[0])}>
                                {options[0]}
                </button>
                <button type="button"  key={options[1]} className={`togg-btn ${myOption===options[1]?'fixedColButton':''}`} onClick={() => setMyOption(options[1])}>
                                {options[1]}
                </button>

                </div>
            </div>

            <div className="row">
                <div className="col"></div>
            <div className="col-6">
        
                {myOption === "Login" && (<Login/>)}

                {myOption === "Register" && (<Register/>)}
            </div>
            <div className="col"></div>
            </div>

            {/* <Login />
            <Register /> */}
        </div>
    )
}
export default SignUp;