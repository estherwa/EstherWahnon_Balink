import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {ApolloClient, ApolloProvider, gql, InMemoryCache} from "@apollo/client";




const client = new ApolloClient({
    uri: 'https://logical-calf-89.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
});

client
    .query({
        query: gql`
      query GetStores {
        stores {
          id
          name
          city
          lang
          address
        }
      }

    `,
    })
    .then((result) => console.log(result));




// const book= new ApolloClient({
//     uri: 'https://logical-calf-89.hasura.app/v1/graphql',
//     cache: new InMemoryCache(),
// });



client
    .query({
        query: gql`
      query GetBooks {
        books {
          author
          description
          id
          isActive
          language
          name
          paperback
          price
          ratings
          publisher
          store_id
          type
          stars
          
        }
      }
      
    `,
    })
    .then((result) =>
        console.log(result));






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
        {/*<App />*/}

        <ApolloProvider   client={client}  >
            <App />

        </ApolloProvider>

    </React.StrictMode>,






);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
