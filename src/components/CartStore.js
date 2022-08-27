import { useState} from "react";
import * as PropTypes from "prop-types";



import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";

import * as countries from "i18n-iso-countries";
import {Link, useNavigate} from "react-router-dom";


const Checkbox = ({ label, value, onChange }) => {
    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    );
};

Checkbox.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.bool
};


export default function CartStore() {

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [ZipCode, setZipCode] = useState("");
    const [OtherCondition, setOtherCondition] = useState(false);
    const [OtherConditionsText, setOtherConditionsText] = useState("");

    const [NumberPhone, setPhoneNumber] = useState("")




    // Have to register the languages you want to use
    countries.registerLocale(enLocale);
    countries.registerLocale(itLocale);

    let navigate = useNavigate();
    const routeChange = () =>{

        navigate("/thankPage");
    }


    return (
        <>


            <p style={{textAlign: "center"}}>
                <div className="container-fluid" >

                    <div className="main">
                        <div className="row">

                            <form >

                                <img src="../images/payment.jpg" width="500px" className="img-fluid" alt="logo"/>
                                <br/><br/>

                                <br/><br/>

                                <input className="un form-control"  type="text" id="first_name"
                                       value={FirstName} onChange={(e)=>setFirstName(e.target.value)}
                                       maxLength={10}
                                       minLength={2}
                                       name="FirstName" placeholder="First Name" required/>

                                <input className="un form-control"  type="text" id="lastname"
                                       value={LastName} onChange={(e)=>setLastName(e.target.value)}
                                       name="Lastname" placeholder="Last Name"  maxLength={10} required/>

                                <input className="un form-control" type="number" step="any"
                                       pattern="[0-9]+"

                                       value={ZipCode} onChange={(e)=>setZipCode(e.target.value)}

                                       minLength={5}
                                       name="ZipCode" placeholder="Zip Code" />

                                <input className="un form-control" type="text" step="any"
                                       name= "NumberPhone" id="NumberPhone"
                                       pattern="[0-9]+"
                                       value={NumberPhone} onChange={(e)=>setPhoneNumber(e.target.value)}

                                       placeholder="Number phone" required/>



                                <Checkbox

                                    value={OtherCondition} onChange={(e)=>setOtherCondition(e.target.checked)}

                                    label="Any comments"
                                    name="OtherConditions"

                                /> <br/><br/>



                        <input className="un form-control" type="text" id="check_box" name="Other conditions"
                               placeholder="Any comments" value={OtherConditionsText} onChange={(e)=>setOtherConditionsText(e.target.value)}
                               disabled={!OtherCondition}
                        />


                            <br></br>
                        <button style={{textAlign: "center"}}   onClick={(routeChange)    }   type="submit" className="btn btn-primary">Submit</button>


                    </form>

                </div>









                    </div>  </div></p>

        </>
    )
}

