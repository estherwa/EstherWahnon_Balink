import {useEffect, useState} from "react";
import axios from 'axios';
import {Outlet} from "react-router";



export default function HarrietsStore(props) {
    return (
        <>

            <h1>Welcome to Harriet Store</h1>
            <Outlet/>

        </>
    )
}