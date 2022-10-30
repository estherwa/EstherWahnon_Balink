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
export const Input =(props)=>{
    const [Input, setInput] = useState("");
    return  <input className={props.value}  type={props.type}
                   value={Input}
                   onChange={(e)=>setInput(e.target.value)}
                   maxLength={props.maxLength}
                   minLength={props.minLength}
                   name={props.name} placeholder={props.placeholder} required/>
}
export const CheckBox =(props)=>{
    const [otherCondition, setOtherCondition] = useState(false);
    return <Checkbox
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