import React from 'react';
import './App.css';
import About from '../About/';
import Home from '../Home/';
import Page1 from '../Page1/';
import Page2 from '../Page2/';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createBrowserHistory } from "history";


function App() {
  const hist = createBrowserHistory();
  return (
    <Router basename="routing-react-site" history={hist}>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div class="container">
        <a class="navbar-brand" href="/routing-react-site/">React SPA</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Home/>
            </li>
            <li class="nav-item">
              <About/>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Switch>
      <Route exact path="/" component={Page1}/>
      <Route path="/about" component={Page2}/>
    </Switch>
  </Router>
  );
}

export default App;
