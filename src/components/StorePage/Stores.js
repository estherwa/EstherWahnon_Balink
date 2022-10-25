import { Route} from "react-router-dom";
import './style.css'
import {gql, useQuery} from "@apollo/client";
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

    let navigate = useNavigate();
    const handleClick = event => {

        variable=event.currentTarget.dataset.id;
        props.setStore(variable );
    }

    function DisplayLocations() {
        const { loading, error, data } = useQuery(GET_LOCATIONS);
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.stores.map(({ id, name, city,lang, address }) => (
            <div className="card" >
                <div className="card-header">
                    <div className="card-header-bar">
                <img src="../images/book2.png" width="400px" className="img-fluid" alt="logo"/>
                <h4><b>{name}</b></h4>
                <p>City: {city}</p>
                <p>Language: {lang}</p>
                <p>Address: {address}</p>
                        <Link className="buttonStore" to={ `bookStore/?${id}`}  data-id={name} onClick={ handleClick }>Enter the store</Link>
                        </div>
                    </div>
            </div>


        ));
    }

    return (
        <>
            <div>
                <DisplayLocations/>

            </div>

            <Outlet/>

        </>
    );
}
