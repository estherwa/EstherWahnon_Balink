import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {orederReducer} from "./Reducers";
import reportWebVitals from './reportWebVitals';
import {ApolloClient, ApolloProvider, gql, InMemoryCache} from "@apollo/client";
import {Provider} from "react-redux";
import {queryStore} from "./components/orders";
import {url} from "./dev"
const store = createStore(orederReducer);
const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
});
client
    .query({
        query: queryStore,
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
