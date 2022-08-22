import './App.css';
import Forecast from "./components/Forecast";
import Locations from "./components/Locations";
import {BrowserRouter,  Route} from "react-router-dom";
import {Routes} from 'react-router-dom'
import Stores from "./components/Stores";
import NotFound from "./components/NotFound";
import Welcome from "./components/Welcome";
import {Outlet} from "react-router";





function App() {


    return (
        <>

            <>
                <BrowserRouter>
                    <Routes>
                            <Route path="/" element={<Welcome/>}>

                            <Route index element={<Stores/>}/>


                            <Route path="locations" element={<Locations/>}/>

                            <Route path="forecast" element={<Forecast/>}/>


                            <Route path={"*"} element={<NotFound/>}/>



                        </Route>
                    </Routes>
                </BrowserRouter>
            </>








        </>
    );
}

export default App;




