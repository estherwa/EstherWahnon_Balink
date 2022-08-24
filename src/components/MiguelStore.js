import {useState} from "react";
import {Outlet} from "react-router";

export default function MiguelStore(props) {


    return (
        <>
            <h1>Welcome to Miguel Store</h1>

            <Outlet/>
        </>
    )

}