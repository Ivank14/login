import React from 'react';

import './App.css';
import Perfil from './components/Perfil'
import Calificar from './components/Calificar'

import Loginfunction from './funciones/Loginfunction'
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
        <Route path="/calificar" component={Calificar} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
