import React, {useState} from "react";
import  PaymentStore  from './PaymentStore'
import * as PropTypes from "prop-types";
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


export const FirstName =(name, placeholder)=>{
    const [firstName, setFirstName] = useState("");
    return  <input className="firstName"  type="text" id="first_name"
                   value={firstName}
                   onChange={(e)=>setFirstName(e.target.value)}
                   maxLength={10}
                   minLength={2}
                   name={name} placeholder={placeholder} required/>
}
export const LastName = ()=>{
    const [lastName, setLastName] = useState("");
    return <input className="lastName"  type="text" id="lastname"
                  value={lastName} onChange={(e)=>setLastName(e.target.value)}
                  name="Lastname" placeholder="Last Name"  maxLength={10} required/>
}
export const Zip =()=>{
    const [zipCode, setZipCode] = useState("");
    return  <input className="zip" type="number" step="any"
                   pattern="[0-9]+"
                   value={zipCode} onChange={(e)=>setZipCode(e.target.value)}
                   minLength={5}
                   name="ZipCode" placeholder="Zip Code" />
}
export const PhoneNumber =()=>{
    const [numberPhone, setPhoneNumber] = useState("")
    return <input className="phoneNumber" type="text" step="any"
                  name= "numberPhone" id="numberPhone"
                  pattern="[0-9]+"
                  value={numberPhone} onChange={(e)=>setPhoneNumber(e.target.value)}
                  placeholder="Number phone" required/>
}
export const CheckBox =()=>{
    const [otherCondition, setOtherCondition] = useState(false);
    return <Checkbox
        className="checkBox"  value={otherCondition} onChange={(e)=>setOtherCondition(e.target.checked)}
        label=" Any comments"
        name="otherConditions"
    />
}
export const Check_box = ()=>{
    const [otherConditionsText, setOtherConditionsText] = useState("");
    const [otherCondition, setOtherCondition] = useState(false);
    return <input className="check_box" type="text" id="check_box" name="Other conditions"
                  placeholder="Any comments" value={otherConditionsText} onChange={(e)=>setOtherConditionsText(e.target.value)}
                  disabled={!otherCondition} />
}