import {useEffect, useState} from "react";
import axios from 'axios';
import {Outlet} from "react-router";



export default function Forecast(props) {
    return (
        <>

            <h1> this isForecast</h1>
            <Outlet/>

        </>
    )
}