import React, {useEffect, useState} from "react";
import {useMutation} from "@apollo/client";
import {order} from "../orders";
import {useNavigate} from "react-router-dom";
import {Button, Space, Value} from "./style";
import {Check_box, CheckBox, Input} from "./Component";
import {handleSubmit} from "./HandleSubmit";
export let createOrder, loading, error,data=null;
export const InsertOrder = (props) => {
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
                    name="firstName" id="name"  placeholder="First Name" type="text"
                    minLength="2" maxLength="10"/>
            <Input value={formState.lastName}
                    name="lastName" placeholder="Last Name" type="text" minLength="2"
                    maxLength="10"/>
            <Input value={formState.address} name="address"
                    placeholder="Zip Code" type="number"  minLength="2" maxLength="10"/>
            <Input  value={formState.phone_number}
                    name="phone_number"
                    placeholder="Phone number"  type="number" minLength="2" maxLength="10"/>
            <CheckBox label=" Any comments"  name="otherConditions" checkBox/>
            <Space></Space>
            <Check_box  type="text" id="check_box" name="Other conditions"
                        placeholder="Any comments"/>
            <Space></Space>
            <Button  type="submit" >Submit</Button>

        </form>
    )
};

