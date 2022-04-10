import React from "react";
import './PersonalInformation.css'
const PersonalInformation = props => {
    // pss value from database to this form
    return (
        <div >
            <form id="accountInfo" >
                <h4>Edit Member Profile</h4>

                <div className="form-group mb-3">
                    <label class="form-label text-decoration-underline fw-bold">Name:<span>*</span></label>
                    <input type="text" className="form-control" name="name" required value={"Alfred Barbel"}/>
                </div>

                <div className="form-group mb-3">
                    <label class="form-label text-decoration-underline fw-bold">Email:<span>*</span></label>
                    <input type="email" className="form-control" name="Email" required value={"Aldred_losti@gmail.com"} />
                </div>

                <div className="form-group mb-3">
                    <label class="form-label text-decoration-underline fw-bold">Gender:</label>
                    <div>
                        <input type="radio" className="SelectGender" value="Male" name="gender" checked/> Male
                        <input type="radio" className="SelectGender" value="Female" name="gender" /> Female
                        <input type="radio" className="SelectGender" value="Other" name="gender" /> Other
                    </div>
                </div>

                <div className="form-group mb-3">
                    <label class="form-label text-decoration-underline fw-bold">Contact Address:</label>
                    <div className="addressOption">
                        <label class="form-label">Street Address1</label>
                        <input type="text" className="form-control" name="Street-address" value={"17 Cancrela ST,Ross Bwa"}/>
                        <label class="form-label">City1</label>
                        <input type="text" className="form-control" name="City" value={"Port Louis"} />

                        <label class="form-label">Street Address2(optional)</label>
                        <input type="text" className="form-control" name="Street-address" />
                        <label class="form-label">City2(optional)</label>
                        <input type="text" className="form-control" name="City" />
                    </div>
                </div>

                <div className="form-group mb-3">
                    <label class="form-label text-decoration-underline fw-bold">Tel:</label>
                    <input type="number" className="form-control-sm" name="Tel" value={59876543} />
                </div>

                <div className="container">
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>




            </form>
        </div>
    )
}

export default PersonalInformation;