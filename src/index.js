import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {orederReducer} from "./Reducers";
import reportWebVitals from './reportWebVitals';
import {ApolloClient, ApolloProvider, gql, InMemoryCache} from "@apollo/client";
import {Provider} from "react-redux";
const store = createStore(orederReducer);
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
        <ApolloProvider   client={client}  >
            <Provider store={store}>
            <App />
                </Provider>
        </ApolloProvider>
    </React.StrictMode>,
);
reportWebVitals();
