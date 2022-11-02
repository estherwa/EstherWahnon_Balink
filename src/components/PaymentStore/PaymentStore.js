import React, {useEffect, useState} from "react";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import * as countries from "i18n-iso-countries";
import './style.css'
import {order} from '../orders'
import {Check_box, CheckBox, Input} from "./Component";
import {useMutation} from "@apollo/client";
import {useNavigate} from "react-router-dom";

 function PaymentStore() {
     countries.registerLocale(enLocale);
     countries.registerLocale(itLocale);
     let navigate = useNavigate();


     //  const cart = useSelector((state) => state.cart)
     const InsertOrder = (props) => {
         const [formState] = useState({
             lastName: '',
             firstName: '',
             address: '',
             phone_number: ''

         });
         const [createOrder] = useMutation(order, {
             variables: {
                 firstName: formState.firstName,
                 lastName: formState.lastName,
                 address: formState.address,
                 phone_number: formState.phone_number
             }
         });

         const handleSubmit = (event) => {
             const formData = new FormData(event.currentTarget);
             event.preventDefault();
             for (let [key, value] of formData.entries()) {
                 console.log(key, value);
             }

             createOrder().then(r => console.log("response", r));
             navigate("/thankPage")
         };
         return (
             <div>
                 <form onSubmit={handleSubmit}>

                     <Input  value={formState.firstName}
                            name="firstName" id="name" className= "value" placeholder="First Name" type="text" minLength="2"
                              maxLength="10"/>
                     <Input  value={formState.lastName}
                            className= "value" name="lastName" placeholder="Last Name" type="text" minLength="2" maxLength="10"/>
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
             </div>
         )
     };

     return (
         <>
             <p style={{textAlign: "center"}}>
                 <div className="container-fluid">
                     <div className="main">
                         <div className="row">
                             <div className="space">
                                 <form onSubmit={navigate("/thankPage")}></form>
                                 <img src="../images/payment.jpg" width="500px" className="img-fluid" alt="logo"/>
                                 <InsertOrder/>
                             </div>
                         </div>
                     </div>
                 </div>
             </p>
         </>

     )



}export default PaymentStore

