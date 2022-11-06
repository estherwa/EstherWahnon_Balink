import React, {useEffect, useState} from "react";
import {Outlet} from "react-router";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import './detailPage.css'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, updateCart} from "../../Reducers/actions";
import {REACT_APP_URL} from "../../config/env";
import{REACT_APP_DETAILS} from "../../config/env"
import {bookStore} from "../orders";
export default function DetailPage(props) {
    let cart = useSelector((state)=> state.cart);
    const [isLoading, setIsLoading] = useState(false);
    const [books,saveBook] = useState([]);
    const [id] = useSearchParams();
    const dispatch = useDispatch();
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
        console.log("in add cart")
        if(!(cart?.find((book)=>book.id===books.id))){
            dispatch(addToCart(books));
        }
        else{
            console.log("update cart");
            dispatch(updateCart(books));
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
                    <p> Description : <div className="space"></div> {books.description}</p>
                    <p> Language : {books.language} 🌐</p>
                    <p> Ratings : {books.ratings} ⭐</p>
                </div>
            }
            <div className="card-detail"  >
                <h1>BUY: {books.price} $</h1>
                <h9> As an alternative, pre order the Kindle eBook instead to automatically receive on a day of release.</h9>
                <div className="space"></div>
                <button onClick={()=>{addCart()}} >Add to cart</button>
            </div>
            <Outlet/>
        </>
    )


}

