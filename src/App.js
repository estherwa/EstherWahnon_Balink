import './App.css';
import FinatStore from "./components/FinatStore";
import MiguelStore from "./components/MiguelStore";
import {BrowserRouter, Link, Route} from "react-router-dom";
import {Routes} from 'react-router-dom'
import Stores from "./components/Stores";
import NotFound from "./components/NotFound";
import Welcome from "./components/Welcome";
// import {Outlet, useNavigate} from "react-router";
import HarrietsStore from "./components/HarrietsStore";

import { gql, useQuery} from "@apollo/client";


function DisplayLocations() {


    const { loading, error, data } = useQuery(GET_LOCATIONS);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;



    return data.stores.map(({ id, name, city,lang, address }) => (



            <div  className="card" >
                <img src="../images/book2.png" width="400px" className="img-fluid" alt="logo"/>
                    <h4><b>{name}</b></h4>
                    <p>City: {city}</p>
                    <p>Language: {lang}</p>
                    <p>Address: {address}</p>






                </div>


    ));
}


const GET_LOCATIONS = gql`
  query GetStores {
        stores {
          id
          name
          city
          lang
          address
        }
      }
`;



function App() {
    // const navigate = useNavigate();
    //
    // const navigateHome = () => {
    //      navigate('/');
    // };

    return (
        <>
            <div>

                <DisplayLocations />
            </div>


                <>
                <BrowserRouter>
                    <Routes>
                            <Route path="/" element={<Welcome/>}>

                            <Route index element={<Stores/>}/>


                            <Route path="miguel" element={<MiguelStore/>}/>

                            <Route path="finat" element={<FinatStore/>}/>

                                 <Route path="harriets" element={<HarrietsStore/>}/>


                            <Route path={"*"} element={<NotFound/>}/>




                        </Route>
                    </Routes>
                </BrowserRouter>
            </>








        </>
    );
}

export default App;




