import {useState} from "react";
import {Outlet} from "react-router";

export default function Locations(props) {


    return (
        <>
            <h1>Locations</h1>

            <Outlet/>
        </>
    )

}