import React, {useEffect, useState} from "react";
import './style.css'
import { gql, useMutation } from '@apollo/client';
export default function Input() {


    return (
        <>
            <input className="firstName"  type="text" id="first_name"
                   value={firstName} onChange={(e)=>setFirstName(e.target.value)}
                   maxLength={10}
                   minLength={2}
                   name="FirstName" placeholder="First Name" required/>

        </>
    )
}

