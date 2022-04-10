import React,{useState,useEffect} from "react";
import './SecurityInformation.css';
import "bootstrap/dist/css/bootstrap.min.css";
const SecurityInformation = props =>{
    const initialValues = { OldPassword: "", NewPassword: "",ConfirmPassword:""};
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
        const regexPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

        if(!values.NewPassword){
            errors.NewPassword="Password is required!"
        }
        else if(!regexPassword.test(values.NewPassword)){
            errors.NewPassword="Password must be at least 8 characters, no more than 32 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit."
        }
        if(values.ConfirmPassword !==values.NewPassword){
            errors.ConfirmPassword="Password does not match";
        }
        return errors;
    }

    return (
        <div className="SecurityBox">
            <form id="securityInf" onSubmit={handleSubmit}>
                <h4>Change password</h4>

                <div className="form-group mb-3">
                 <label class="form-label fw-bold">Old Password</label>
                 <input type="password" className="form-control" name="OldPassword" placeholder="Old password" defaultValue={initialValues.OldPassword} onChange={handleChange}/>
                </div>
                <div className="form-group mb-3">
                 <label class="form-label fw-bold">New Password</label>
                 <input type="password" className="form-control" name="NewPassword" placeholder="New Password" defaultValue={initialValues.NewPassword} onChange={handleChange}/>
                </div>
                <p>{formErrors.NewPassword}</p>
                <div className="form-group mb-3">
                 <label class="form-label fw-bold">Confirm Password</label>
                 <input type="password" className="form-control" name="ConfirmPassword" placeholder="Confirm Password" defaultValue={initialValues.ConfirmPassword} onChange={handleChange} />
                </div>
                <p>{formErrors.ConfirmPassword}</p>
                <div className="container">
                    <button type="submit" className="btn btn-success">Reset</button>
                </div>

            </form>
        </div>
    )

}
export default SecurityInformation;