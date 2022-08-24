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

// const client = ...

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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ApolloProvider client={client}>
        <App />

    </ApolloProvider>,


  <React.StrictMode>
    <App />
  </React.StrictMode>,
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
