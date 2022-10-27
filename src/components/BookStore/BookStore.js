import {Link, useLocation, useNavigate, useSearchParams} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import {Outlet} from "react-router";
import './style.css'
import axios from "axios";
import {REACT_APP_URL} from "../../config/env";
import {bookQuery} from "../orders"
const BookStore= (props) => {
    let [searchParams, setSearchParams] = useSearchParams();
    const [id] = useSearchParams();
    const [books, setTheBooks] = useState([]);
    let interchange = String(id).replace("=", "")
    const [isLoading, setIsLoading] = useState(false);
    let data = {
        query: bookQuery
        , variables: {
            "where": {"store_id": {"_eq": interchange}}
        }
    }
    useEffect(() => {
        const booksInStore = async () => {
            setIsLoading(true);
            const result = await axios.post(REACT_APP_URL, data);
            setTheBooks(result.data.data.books);
        }
        booksInStore().then(result =>
            console.log(result.data.data.books));
        setIsLoading(false);
    }, [])
    return (
        <>
            <h1 className="bigtitle">Welcome to {props.store} Store</h1>
            <div>
                {isLoading ? (
                        <div className="alert alert-warning">Loading ...</div>
                    ) :
                books?.map(({id, name, author, type}) => (
                    <div className="mainCard">
                        <img src="../images/book4.png" width="400px" className="img-fluid" alt="logo"/>
                        <h4><b>{name}</b></h4>
                        <p>Author: {author}</p>
                        <p> Type: {type}</p>
                        <Link className="buttonStore" to={`/bookDetail/?${id}`}>Access the book</Link>
                    </div>
                ))
                }
            </div>
            <Outlet/>
        </>
    )
}

export default BookStore;