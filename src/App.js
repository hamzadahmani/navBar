import React, { Component } from 'react';
import Navbarr from './component/navbar/index';
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Navbarr} />
          </Switch> 
      </BrowserRouter>
 
      </div>
    );
  }
}

export default App;
