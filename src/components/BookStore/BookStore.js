import {Link, useLocation, useNavigate, useSearchParams} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import {Outlet} from "react-router";
import {gql, useQuery} from "@apollo/client";

import './style.css'
import axios from "axios";



let url = "https://logical-calf-89.hasura.app/v1/graphql"

const BookStore= (props) =>{


    let [searchParams, setSearchParams] = useSearchParams();
    const [id] = useSearchParams();


    const [books,setTheBooks] = useState([]);
    let interchange= String(id).replace("=","")



    let data= {query: `query get($where: books_bool_exp) {
                books(where: $where) {
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
              }`
        ,variables: {
            "where": { "store_id": {"_eq": interchange}}


        }
    }

    useEffect(()=>{
        const booksInStore = async () => {

            const result = await axios.post(url,data);

            setTheBooks(result.data.data.books);

        }
        booksInStore().then(result =>

            console.log(result.data.data.books));

    },[])


    let navigate = useNavigate();

    return (
        <>
            <h1>Welcome to {props.store} Store</h1>


            <div>


                { books?.map(({ id, name, author,type }) => (

                    <div className="card" >
                        <img src="../images/book4.png" width="400px" className="img-fluid" alt="logo"/>
                        <h4><b>{name}</b></h4>
                        <p>Author: {author}</p>
                        <p> Type: { type}</p>

                        <Link to={`/bookDetail/?${id}`}>Access the book</Link>





                    </div>


                ))
                }
            </div>


            <Outlet/>

        </>
    )

}

export default BookStore;