import { Route, Switch, BrowserRouter } from 'react-router-dom'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import logo from './logo.svg';
import NavBar from './components/navbar/index'
import HomePage from './pages/home/homepage'
import DetailPage from './pages/product_detail/detailpage'
import LoginPage from './pages/login/loginpage'
import './App.css';


function App() {
  return (
    <div className="App">
      
      <header className="App-header"></header>
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route path="/products/:product_id" render={({match})=>(<DetailPage id={match.params.product_id}></DetailPage>)}/>
          <Route path="/reviews"></Route>
          <Route path="/reviews/:review_id"></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/" component={HomePage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
