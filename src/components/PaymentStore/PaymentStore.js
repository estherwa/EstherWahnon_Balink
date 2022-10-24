import React, {useEffect, useState} from "react";
import * as PropTypes from "prop-types";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import axios from "axios";
import * as countries from "i18n-iso-countries";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import './style.css'
import { gql, useMutation } from '@apollo/client';
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
export default function PaymentStore() {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [ZipCode, setZipCode] = useState("");
    const [OtherCondition, setOtherCondition] = useState(false);
    const [OtherConditionsText, setOtherConditionsText] = useState("");
    const [NumberPhone, setPhoneNumber] = useState("")
    const url= "https://logical-calf-89.hasura.app/v1/graphql"
    countries.registerLocale(enLocale);
    const [id] = useSearchParams();
    countries.registerLocale(itLocale);
    const [books,saveBook] = useState([]);
 
    useEffect(()=>{
        const insertOrders= async () => {
            const result = await axios.post(url,{
                query: `mutation Insert_orders($objects: [orders_insert_input!]!) {
                    insert_orders(objects: $objects) {
                      affected_rows
                      returning {
                        id
                      }
                    }
                  }`,variables: {
                    "amount": null,
                    "books": null,
                    "firstName": FirstName, 
                    "lastName": LastName,
                    "address":ZipCode,
                    "phone_number":NumberPhone
                    }
            });

           saveBook(result.data.data.Insert_orders);
           console.log(result.data.data.Insert_orders)
        }
        insertOrders();
    },[])

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
                                <br/><br/><br/><br/>
                                <input className="firstName"  type="text" id="first_name"
                                       value={FirstName} onChange={(e)=>setFirstName(e.target.value)}
                                       maxLength={10}
                                       minLength={2}
                                       name="FirstName" placeholder="First Name" required/>

                                <input className="lastName"  type="text" id="lastname"
                                       value={LastName} onChange={(e)=>setLastName(e.target.value)}
                                       name="Lastname" placeholder="Last Name"  maxLength={10} required/>

                                <input className="zip" type="number" step="any"
                                       pattern="[0-9]+"
                                       value={ZipCode} onChange={(e)=>setZipCode(e.target.value)}
                                       minLength={5}
                                       name="ZipCode" placeholder="Zip Code" />
                                <input className="phoneNumber" type="text" step="any"
                                       name= "NumberPhone" id="NumberPhone"
                                       pattern="[0-9]+"
                                       value={NumberPhone} onChange={(e)=>setPhoneNumber(e.target.value)}
                                       placeholder="Number phone" required/>
                                <Checkbox
                                    className="checkBox"  value={OtherCondition} onChange={(e)=>setOtherCondition(e.target.checked)}
                                        label=" Any comments"
                                        name="OtherConditions"
                                /> <br/><br/>
                                    <input className="check_box" type="text" id="check_box" name="Other conditions"
                                        placeholder="Any comments" value={OtherConditionsText} onChange={(e)=>setOtherConditionsText(e.target.value)}
                                        disabled={!OtherCondition}
                                 />
                             <br></br>

                        <button style={{textAlign: "center"}}  onClick={(routeChange)} type="submit" className="mainButton">Submit</button>
                    </form>
                </div>
             </div>  
        </div>
    </p>

        </>
    )
}

