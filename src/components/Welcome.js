import {useState} from "react";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";
export default function Locations(props) {


    return (
        <>
            <img src="../images/logo.png" width="100px" className="img-fluid" alt="logo"/>

            <br/><br/>

            <Outlet/>
        </>

    )

}