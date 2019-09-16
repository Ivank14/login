import React from 'react';

import './App.scss';
import Perfil from './components/Perfil'
import Calificar from './components/Calificar'

import Loginfunction from './components/Login'
import Home from './components/Home'
import Menu from './components/Menu'
import { Route, Router, Redirect } from 'react-router-dom'
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import history from './history';
import gql from 'graphql-tag';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
    headers: {
      authorization: localStorage.getItem('token'),
    },
  }),
});
cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token')
  },
});



function App() {
  return (
    <ApolloProvider client={client}>
      <div class="wrapper">
        {/* <Menu/> */}
      <Router history={history} >
        <Route path="/" exact render={()=>(localStorage.getItem('token')?  <Perfil uid={localStorage.getItem('token')}/>:<Loginfunction/>)}/>
        <Route path="/perfil"   render={()=>(localStorage.getItem('token')?  <Perfil uid={localStorage.getItem('token')}/>:<Redirect to="/"/>)}/>
        <Route path="/calificar" render={()=>(localStorage.getItem('token')?  <Calificar uid={localStorage.getItem('token')}/>:<Redirect to="/"/>)}/>
        <Route path="/home" component={Home} />
      </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
