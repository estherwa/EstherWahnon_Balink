import './App.css';
import BookStore from "./components/BookStore";

import {Link} from "react-router-dom";
import Stores from "./components/Stores";
import NotFound from "./components/NotFound";
import Welcome from "./components/Welcome";

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import {useState} from "react";
import CartStore from "./components/CartStore";
import ThankPage from "./components/ThankPage";

const App= () => {
    const [store, setStore] = useState("")
    let name = ""



    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Welcome/>}>
                        <Route index="index" element={<Stores    setStore= {setStore} />}/>

                        <Route path="cartStore" element={<CartStore/>}/>

                        <Route  path="bookStore" element={<BookStore   store={store}/>  }/>


                        <Route  path="thankPage" element={<ThankPage/>  }/>

                        <Route path={"*"} element={<NotFound/>}/>


                    </Route>
                </Routes>
            </BrowserRouter>


        </>
    );
}

export default App;




