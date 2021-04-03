import { Route, Switch, BrowserRouter } from 'react-router-dom'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import logo from './logo.svg';
import NavBar from './components/navbar/index'
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header"></header>
      <BrowserRouter>
        <Switch>
          <Route path="/">

          </Route>
          <Route path="/products/:product_id">

          </Route>
          <Route path="/reviews">

          </Route>
          <Route path="/reviews/:review_id">
          
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
