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
export const Value =(props)=>{
    const [Value, setValue] = useState("");
    return  <input className="value"  type="string"
                   value={Value}
                   onChange={(e)=>setValue(e.target.value)}
                   maxLength={10}
                   minLength={2}
                   name={props.name} placeholder={props.placeholder} required/>
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