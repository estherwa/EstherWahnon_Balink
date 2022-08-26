import { Route} from "react-router-dom";
import {gql, useQuery} from "@apollo/client";
import BookStore from "./BookStore";
import {Routes} from 'react-router-dom'
import Welcome from "./Welcome";


import {Link, useNavigate} from "react-router-dom";
import {Outlet} from "react-router";

let variable= ""








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



export default function Stores(props) {
    /**
     * This is the main menu that will appear in all pages and will have the option to go to either the page of the
     * forecast or the page of the location, here we are setting the objects to be in the middle and the image to be
     * fluid, so we can keep the website responsible
     *
     */



    const handleClick = event => {

        variable=event.currentTarget.dataset.id;

        // this.props.history.push("/bookStore", {store.: "HiHI"});

        props.setStore(variable );

        alert(variable)



    }

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



                <Link to={"/bookStore"}  data-id={name} onClick={ handleClick }>Enter the store</Link>







            </div>


        ));
    }

    return (
        <>

            <div>
                {/*<BookStore name="variable" />*/}
                <DisplayLocations/>




            </div>

            <Outlet/>

        </>
    );
}

