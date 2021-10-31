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
  link:new HttpLink(
  {uri:'https://trusting-toucan-66.hasura.app/v1/graphql',
  headers:{
  'x-hasura-admin-secret':'dldnrw71yojp63eiGoyTLyYCOAzZL43yxdter0x3hn7WU1S7587W0o7E1jP4dXzC'
  }
  }
  ),
});




ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);


