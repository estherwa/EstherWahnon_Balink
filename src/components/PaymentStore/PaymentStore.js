import React, {useEffect, useState} from "react";
import * as PropTypes from "prop-types";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import axios from "axios";
import * as countries from "i18n-iso-countries";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import './style.css'
import {order} from '../orders'
import {REACT_APP_URL} from "../../config/env";
import  {LastName, FirstName, Zip, CheckBox, Check_box, PhoneNumber} from "./Component";

export default function PaymentStore() {
    countries.registerLocale(enLocale);
    countries.registerLocale(itLocale);
    const [saveBook] = useState([]);

    useEffect(()=>{
        const insertOrders= async () => {
            const result = await axios.post(REACT_APP_URL,{
                query:{order}
                ,variables:{
                    "amount": null,
                    "books": null,
                    "firstName": FirstName.firstName,
                    "lastName": LastName.lastName,
                    "address":Zip.zipCode,
                    "phone_number":PhoneNumber.numberPhone
                    }
            });
           saveBook(result.data.data.order.Insert_orders);
           console.log(result.data.data.order.Insert_orders)
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
                            <div className="space">
                            <form>
                                <img src="../images/payment.jpg" width="500px" className="img-fluid" alt="logo"/>
                                <FirstName   name= "firstName" placeholder="First Name"/>
                                <LastName/>
                                <Zip/>
                                <PhoneNumber/>
                                <CheckBox/>
                               <div className="space"></div>
                                <Check_box/>
                                <div className="space"></div>
                                <button style={{textAlign: "center"}}  onClick={(routeChange)} type="submit" className="mainButton">Submit</button>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </p>
         </>
    )
}

