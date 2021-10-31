import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink(
    {
      uri: process.env.REACT_APP_HASURA_URI,
      headers: {
        'x-hasura-admin-secret': process.env.REACT_APP_x_hasura_admin_secret,
      }
    }
  ),
});

console.log(process.env)






ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);


