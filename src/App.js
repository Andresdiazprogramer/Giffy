import React from 'react';
import { Link,Route, Switch} from 'wouter';

import Header from 'components/Header'

import Home from 'pages/Home/Home';
import Detail from 'pages/Detail/index';
import SearchResults from 'pages/SearchResults/SearchResults';
import Login from 'pages/Login'
import Register from 'pages/Register';
import ErrorPage from 'pages/ErrorPage';

import {UserContextProvider} from 'context/UserContext';
import { GifsContextProvider } from 'context/GifsContext';


import second from './giffyLogo.png'
import './App.css';


export default function App() {
  return (
  <UserContextProvider >
      <div className="App">
        <section className="App-content">
          <Header></Header>
          <Link to="/">
            <figure className="App-logo">
              <img alt='Giffy logo' src={second} />
            </figure>
          </Link>
          <GifsContextProvider>
            <Switch>
            <Route
              component={Home}
              path="/"
            />
            <Route
              component={SearchResults}
              path="/search/:keyword/:rating?"  />
            <Route
              component={Detail}
              path="/gif/:id"
            />
            <Route
              component={Login}
              path='/login'
            />
            <Route
              component={Register}
              path='/register'
            />
            <Route 
              component={ErrorPage} 
              path="/:rest*" 
            />
            
            </Switch>
          </GifsContextProvider>
        </section>
      </div>
    </UserContextProvider>
  )
}
