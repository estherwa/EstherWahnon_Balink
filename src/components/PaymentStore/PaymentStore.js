import React, {useEffect, useState} from "react";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import * as countries from "i18n-iso-countries";
import './style.css'
import {order} from '../orders'
import {Check_box, CheckBox, Input} from "./Component";
import {useMutation} from "@apollo/client";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
export default function PaymentStore() {
countries.registerLocale(enLocale);
countries.registerLocale(itLocale);
    let navigate = useNavigate();
const cart = useSelector((state)=> state.cart)
    const InsertOrder=(props)=> {
       const[insert_orders]= useMutation (order)
        let id, books, firstName, lastName, address,phone_number, amount;
        return (
            <div>
                <form onSubmit={ e => {
                    navigate("/thankPage")
                    e.preventDefault();

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
                        <Input ref={value => firstName= value} value= "value" name= "First Name" placeholder="First Name" type="text" minLength="2" maxLength="10"/>
                        <Input ref={value => lastName= value}  value= "value" name= "Last Name" placeholder="Last Name" type="text" minLength="2" maxLength="10"/>
                        <Input ref={value => address= value} value= "value" name= "zip" placeholder="Zip Code" type="number" minLength="2" maxLength="10"/>
                        <Input ref={value => phone_number= value}value= "value" name="phone number" placeholder="Phone number" type="number" minLength="2" maxLength="10"/>
                        <CheckBox  label=" Any comments" className="className="   name="otherConditions"  checkBox/>
                        <div className="space" ></div>
                        <Check_box className="check_box" type="text" id="check_box" name="Other conditions" placeholder="Any comments"/>
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
                            <form  onSubmit={ navigate("/thankPage")}></form>
                                <img src="../images/payment.jpg" width="500px" className="img-fluid" alt="logo"/>
                                <InsertOrder/>
                        </div>
                    </div>
                    </div>
                </div>
            </p>
         </>
    )
}

