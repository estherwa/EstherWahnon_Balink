import React, {useEffect, useState} from "react";
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import * as countries from "i18n-iso-countries";
import {Space} from "./style";
import {InsertOrder} from "./Order";
countries.registerLocale(enLocale);
countries.registerLocale(itLocale);
export let  error,data=null;
//**********************************************************************************************************************
function PaymentStore() {
  return (
         <>
               <Space/>
               <img src="../images/payment.jpg" width="500px" alt="logo"/>
               <InsertOrder/>
         </>
     )
}export default PaymentStore
//**********************************************************************************************************************
