import {useState} from "react";
import {Outlet} from "react-router";
import {Link, useNavigate} from "react-router-dom";
import './welcome.css'
import {useSelector} from "react-redux";
export default function Welcome(props) {
    let navigate = useNavigate();
    const cart = useSelector((state)=> state.cart);

    return (
        <>
            <div className="header">
                <img   src="../images/logo.png"
                      width="100px" onClick={()=>{ navigate("/")} } />
                <div className="header-right">
                    <div >{cart?.length}</div>
                    <img   src="../images/empty_cart.png"
                           width="50px" onClick={()=>{ navigate("/cartPage")} } />
                    </div>
            </div>
            <Outlet/>
        </>
    )

}

