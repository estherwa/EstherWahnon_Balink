import {Link, useLocation} from 'react-router-dom';

import {Outlet} from "react-router";
import {gql, useQuery} from "@apollo/client";




function DisplayLocations() {


    const { loading, error, data } = useQuery(GET_BOOKS);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;



    return data.books.map(({  id,
                               name,
                               type,
                               isActive,
                               price,
                               store_id,
                               author,
                               description,
                               publisher,
                               language,
                               paperback,
                               ratings,
                               stars }) => (

        <div  className="card" >
            <img src="../images/book4.png" width="400px" className="img-fluid" alt="logo"/>
            <h4><b>{name}</b></h4>
            <p>Author: {author}</p>
            <p> { type}</p>
            <p> {price} $</p>


        </div>


    ));
}



const GET_BOOKS = gql`
   query GetBooks {
        books {
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
      }
`;

export default function BookStore(props) {



    return (
        <>


            <h1>Welcome to finat Store</h1>

            <div>

                <DisplayLocations/>
            </div>

            <Outlet/>

        </>
    )

}