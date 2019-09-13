import React from 'react';

import './App.css';
import Perfil from './components/Perfil'

import Loginfunction from './components/Login'
import Home from './components/Home'
import { Route, Router } from 'react-router-dom'
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import history from './history';


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
  cache,
  link
})


function App() {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <Route path="/" exact component={Loginfunction} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/home" component={Home} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
