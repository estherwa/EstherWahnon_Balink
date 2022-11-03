import React, {useState} from "react";
import * as PropTypes from "prop-types";
import {Value, Checkbox} from "./style";
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
export const Input =(props)=>{
    const [formState, setFormState] = useState({
        lastName: '',
        firstName: '',
        address: '',
        phone_number: ''
    });
    return  <Value name={props.name} className={props.className}  type={props.type}
                    value={formState.name}
                   onChange={(e) =>
                       setFormState({
                           ...formState,
                           name : e.target.value
                       })
                   }
                   maxLength={props.maxLength}
                   minLength={props.minLength}
                    placeholder={props.placeholder} required/>
}
export const CheckBox =(props)=>{
    const [otherCondition, setOtherCondition] = useState(false);
    return < Checkbox
        className={props.className}  value={otherCondition} onChange={(e)=>setOtherCondition(e.target.checked)}
        label={props.label}
        name={props.name}
    />
}
export const Check_box = (props)=>{
    const [otherConditionsText, setOtherConditionsText] = useState("");
    const [otherCondition, setOtherCondition] = useState(false);
    return <input className={props.className} type={props.type} id={props.id} name={props.name}
                  placeholder={props.placeholder} value={otherConditionsText} onChange={(e)=>setOtherConditionsText(e.target.value)}
                  disabled={!otherCondition} />
}