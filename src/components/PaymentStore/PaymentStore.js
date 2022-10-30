import React, {useEffect, useState} from "react";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import * as countries from "i18n-iso-countries";
import './style.css'
import {order} from '../orders'
import { Check_box, CheckBox, Value} from "./Component";
import {useMutation} from "@apollo/client";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


export default function PaymentStore() {
countries.registerLocale(enLocale);
countries.registerLocale(itLocale);

const cart = useSelector((state)=> state.cart)
    let navigate = useNavigate();



    const InsertOrder=(props)=> {
       const[insert_orders]= useMutation (order)
        let id, books, firstName, lastName, address,phone_number, amount;

        return (
            <div>
                <form onSubmit={ e => {
                    e.preventDefault();
                    navigate("/thankPage")

                    insert_orders( {"objects": [{
                            id: id.value,
                            amount: cart.amount,
                            books: {
                                id: props.id
                                ,price : props.price
                            },
                            firstName: firstName.value,
                            lastName: lastName.value,
                            address:address.value,
                            phone_number:phone_number.value
                        }]
                    })}

                }>
                    <fieldset>
                        <Value ref={value => firstName= value} name= "First Name" placeholder="First Name"/>
                        <Value ref={value => lastName= value}  name= "Last Name" placeholder="Last Name"/>
                        <Value ref={value => address= value} name= "zip" placeholder="Zip Code" />
                        <Value ref={value => phone_number= value}  name="phone number"  placeholder="Phone number"/>
                        <CheckBox/>
                        <div className="space"></div>
                        <Check_box/>
                        <div className="space"></div>
                         <button style={{textAlign: "center"}} type="submit"  className="mainButton">Submit</button>
                    </fieldset>
                </form>
            </div>
        )
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
                                <InsertOrder/>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </p>
         </>
    )
}

