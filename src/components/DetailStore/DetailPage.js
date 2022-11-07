import React, {useEffect, useState} from "react";
import {Outlet} from "react-router";
import { useSearchParams} from "react-router-dom";
import './detailPage.css'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, updateCart} from "../../Reducers/actions";
import {REACT_APP_URL} from "../../config/env";
import{REACT_APP_DETAILS} from "../../config/env"
import {bookStore} from "../orders";
export default function DetailPage(props) {
    const {cart} = useSelector((state)=> state);
    const [total,setTotal] = useState(0)
    const [isLoading, setIsLoading] = useState(false);
    const [books,saveBook] = useState([]);
    const [id] = useSearchParams();
    const dispatch = useDispatch();
    console.log('indetailpage',{cart});
    useEffect(()=>{
        const detailBook = async () => {
            setIsLoading(true);
            const result = await axios.post(REACT_APP_URL,{
                query: bookStore,variables: {
                    "booksByPkId":  String(id).replace("=","")
                }
            });
            saveBook(result.data.data.books_by_pk);
            setIsLoading(false);
        }
        detailBook();
    },[])
    function addCart () {
        console.log(cart?.quantity)
        if(!cart?.get(books.id)){
            console.log("in add cart")
            dispatch(addToCart(books));
            setTotal(cart?.quantity)

        }
        else{
            console.log("update cart");
            dispatch(updateCart(books));
            setTotal(cart?.quantity)
        }
    }
    return (
        <>
            <div >
            <h1 className="bigtitle">{REACT_APP_DETAILS}</h1>
            </div>
            {isLoading ? (
                    <div className="alert alert-warning">Loading ...</div>
                ) :
                <div className="card-detail">
                    <img src="../images/book4.png" width="400px" className="img-fluid" alt="logo"/>
                    <h4><b>{books.name}</b></h4>
                    <p>Author : {books.author}</p>
                    <p> Type : {books.type}</p>
                    <div> Description : <div className="space"></div> {books.description}</div>
                    <p> Language : {books.language} 🌐</p>
                    <p> Ratings : {books.ratings} ⭐</p>
                </div>
            }
            <div className="card-detail"  >
                <h1>BUY: {books.price} $</h1>
                <h5> As an alternative, pre order the Kindle eBook instead to automatically receive on a day of release.</h5>
                <div className="space"></div>
                <button onClick={()=>{addCart()}} >Add to cart</button>
            </div>
            <Outlet/>
        </>
    )


}

