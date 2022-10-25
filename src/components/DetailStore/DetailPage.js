import React, {useEffect, useState} from "react";
import {Outlet} from "react-router";
import {Link, useNavigate, useSearchParams} from "react-router-dom";

import './detailPage.css'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, updateCart} from "../../Reducers/actions";
import {url} from "../../dev"

export default function DetailPage(props) {
    let cart = useSelector((state)=> state.cart)
    let navigate = useNavigate();
    const [books,saveBook] = useState([]);
    const [id] = useSearchParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        const detailBook = async () => {
            const result = await axios.post(url,{
                query: `query Books($booksByPkId: uuid!) {
                books_by_pk(id: $booksByPkId) {
                    id
                    name
                     type
                     isActive
                     price
                    store_id
                    author
                    description
                    publisher
                    language
                    paperback
                    ratings
                    stars
                }
              }`,variables: {
                    "booksByPkId":  String(id).replace("=","")
                }
            });

            saveBook(result.data.data.books_by_pk);

        }

        detailBook();

    },[])

    function addCart () {

        if(!(cart?.find((book)=>book.id===books.id))){
            books.quantity = 1
            console.log(books.quantity)
            dispatch(addToCart(books));

        }
        else{
            console.log(books.quantity)
            dispatch(updateCart(books));
        }
    }


    return (
        <>

            <div >
            <h1 className="bigtitle"> Book Details:</h1>
            </div>
                <div className="card-detail" >
                    <img src="../images/book4.png" width="400px" className="img-fluid" alt="logo"/>
                    <h4><b>{books.name}</b></h4>
                    <p>Author : {books.author}</p>
                    <p> Type : {books.type}</p>
                    <p> Description : <div className="space"></div> {books.description}</p>
                    <p> Language : {books.language} 🌐</p>
                    <p> Ratings : {books. ratings} ⭐</p>

                </div>

            <div className="card-detail"  >

                <h1>BUY: {books.price} $</h1>
                <h9> As an alternative, pre order the Kindle eBook instead to autoatically
                receive on a day of release.</h9>
                <div className="space"></div>

                <button onClick={()=>{addCart()} } >Add to cart</button>

            </div>

            <Outlet/>
        </>

    )

}

