import React from 'react';

import './App.css';
import Register from './components/Register'

import Loginfunction from './funciones/Loginfunction'
import { Route, Router} from 'react-router-dom'
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import {ApolloProvider} from '@apollo/react-hooks';
import history from './history';


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://192.168.0.64:4000'
})

const client = new ApolloClient({
  cache,
  link
})


function App() {
  return (
    

  <ApolloProvider client={client}>
  <Router history={history}>  
    
  <Route path="/" exact component={Loginfunction}/>
  
  <Route path="/path" component={Register}/>
  </Router>
  </ApolloProvider>
  );
}

export default App;
