import React, {useEffect, useState} from "react";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import * as countries from "i18n-iso-countries";
import './style.css'
import {order} from '../orders'
import {Check_box, CheckBox, Input} from "./Component";
import {useMutation} from "@apollo/client";
import {useNavigate} from "react-router-dom";
countries.registerLocale(enLocale);
countries.registerLocale(itLocale);
let createOrder, loading, error,data=null;
//**********************************************************************************************************************
const handleSubmit = async (e) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        },2000)
        const formData = new FormData(e.currentTarget);
        e.preventDefault();
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        createOrder()
    })
};
//**********************************************************************************************************************
const InsertOrder = (props) => {
    const [formState] = useState({
        lastName: '',
        firstName: '',
        address: '',
        phone_number: ''
    });
    [createOrder,{ data, loading, error }] = useMutation(order,{
             variables:{
             object: {
                 "amount": 5,
                 "books": {
                     id: props.id
                     , price: props.price
                 },
                "firstName" : formState.firstName,
                 "lastName": formState.lastName,
                 "address": formState.address,
                 "phone_number": formState.phone_number
             }}
  })
  useEffect(() => {console.log(loading, error, data)});
    let navigate = useNavigate();
         if (loading) return 'Submitting...';
         if (error) return `Submission error! ${error.message}`;
          if (data)  return navigate("/thankPage")
         console.log("insert_orders", createOrder)
         return (
                 <form onSubmit={handleSubmit}>
                     <Input  value={formState.firstName}
                            name="firstName" id="name" className= "value" placeholder="First Name" type="text"
                             minLength="2" maxLength="10"/>
                     <Input  value={formState.lastName}
                            className= "value" name="lastName" placeholder="Last Name" type="text" minLength="2"
                             maxLength="10"/>
                     <Input  value={formState.address} name="address"
                             placeholder="Zip Code" type="number" className= "value" minLength="2" maxLength="10"/>
                     <Input  value={formState.phone_number}
                            name="phone_number"
                            placeholder="Phone number" className= "value"  type="number" minLength="2" maxLength="10"/>
                     <CheckBox label=" Any comments" className="className=" name="otherConditions" checkBox/>
                     <div className="space"></div>
                     <Check_box className="check_box" type="text" id="check_box" name="Other conditions"
                                placeholder="Any comments"/>
                     <div className="space"></div>
                     <button style={{textAlign: "center"}} type="submit" className="mainButton">Submit</button>
                 </form>
         )
};
//**********************************************************************************************************************
function PaymentStore() {
  return (
         <>
             <p style={{textAlign: "center"}}>
                 <div className="container-fluid">
                     <div className="main">
                         <div className="row">
                             <div className="space">
                             <img src="../images/payment.jpg" width="500px" className="img-fluid" alt="logo"/>
                             </div>
                             <p style={{textAlign: "center"}}>
                             <InsertOrder/>
                             </p>
                         </div>
                     </div>
                 </div>
             </p>
         </>
     )
}export default PaymentStore
//**********************************************************************************************************************

