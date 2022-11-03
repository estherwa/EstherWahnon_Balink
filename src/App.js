import './App.css';
import BookStore from "./components/BookStore/BookStore";
import Stores from "./components/StorePage/Stores";
import NotFound from "./components/NotFoundPage/NotFound";
import Welcome from "./components/HeaderPage/Welcome";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import {useState} from "react";
import ThankPage from "./components/ThankPage/ThankPage";
import {ApolloClient, InMemoryCache} from "@apollo/client";
import DetailPage from "./components/DetailStore/DetailPage";
import CartPage from  "./components/CartStore/CartPage"
import PaymentStore from './components/PaymentStore/PaymentStore';
import {REACT_APP_URL} from "./config/env";
const client = new ApolloClient({
    uri: REACT_APP_URL,
    cache: new InMemoryCache(),
});
const App= () => {

    const [store, setStore] = useState("")
    return (


        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Welcome/>}>
                        <Route index="index" element={<Stores    setStore= {setStore} />}/>
                        <Route path="paymentStore" element={<PaymentStore/>}/>
                        <Route  path="bookStore" element={<BookStore   store={store}/>  }/>
                        <Route  path="bookDetail" element={<DetailPage/>  }/>
                        <Route  path="cartPage" element={<CartPage/>  }/>
                        <Route  path="thankPage" element={<ThankPage/>  }/>
                        <Route path={"*"} element={<NotFound/>}/>
                    </Route>
                </Routes>

            </BrowserRouter>
            
        </>
    );
}
export default App;




