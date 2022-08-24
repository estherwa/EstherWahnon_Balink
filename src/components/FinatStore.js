// import {Component, useEffect, useState} from "react";
// import axios from 'axios';
// import {Outlet} from "react-router";
// import {useQuery, gql} from "@apollo/client";
// import {graphql} from "graphql";
// // import{graphql} from "react-apollo";
// const cors = require('cors')
//
// export const BOOKS = gql`
//     query{
//
//      getAllBooks{
//
//     }
//     }
//   `
//
// class FinatStore extends Component{
//     render() {
//
//         console.log(this.props);
//     // const{error, loading, data}= useQuery(BOOKS)
//     // useEffect(()=> {
//     //     console.log(data);
//     //
//     // }, [data])
//
//     return (
//         <>
//
//             <h1>Welcome to Finat Store</h1>
//
//             <Outlet/>
//
//         </>
//
//     );
//     }
// }
//
// export default  graphql(BOOKS)(FinatStore )
// // export default  graphql(BOOKS)(FinatStore )


import {useState} from "react";
import {Outlet} from "react-router";

export default function FinatStore(props) {


    return (
        <>
            <h1>Welcome to finat Store</h1>

            <Outlet/>
        </>
    )

}