import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {cartReducer} from "./Reducers";
import reportWebVitals from './reportWebVitals';
import {ApolloClient, ApolloProvider, gql, InMemoryCache} from "@apollo/client";
import {Provider} from "react-redux";
import {bookQuery, order, queryStore} from "./components/orders";
import {REACT_APP_URL} from "./config/env";
const store = createStore(cartReducer);
const client = new ApolloClient({
    uri: REACT_APP_URL,
    cache: new InMemoryCache(),
});

console.log(REACT_APP_URL)
client
    .query({
        query: queryStore,
         order
    })
    .then((result) => console.log(result));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ApolloProvider   client={client}  >
            <Provider store={store}>
                <App/>
            </Provider>
        </ApolloProvider>
    </React.StrictMode>,
);
reportWebVitals();
