import './App.css';
import BookStore from "./components/BookStore";

import {Link} from "react-router-dom";
import Stores from "./components/Stores";
import NotFound from "./components/NotFound";
import Welcome from "./components/Welcome";

// import {Outlet, useNavigate} from "react-router";

import {gql, useQuery} from "@apollo/client";

import {BrowserRouter as Router, Switch, Redirect,} from "react-router-dom";


import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

const App= (props) => {
    let name = ""



    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Welcome/>}>
                        <Route index="index" element={<Stores/>}/>
                        {/*<Route path="stores" element={<Stores/>}/>*/}


                        <Route bookID={props.bookID} path="bookStore" element={<BookStore/>}/>}/>



                        <Route path={"*"} element={<NotFound/>}/>


                    </Route>
                </Routes>
            </BrowserRouter>


        </>
    );
}

export default App;




