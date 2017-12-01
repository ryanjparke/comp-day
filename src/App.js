import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import Browsing from './Components/Browsing/Browsing';
import Details from './Components/Details/Details';
import Cart from './Components/Cart/Cart';
import Shelf from './Components/Shelf/Shelf.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route component={ Login } exact path='/' />
            <Route component={ Browsing } path='/browsing' />
            <Route component={ Details } path='/details' />
            <Route component={ Cart } path='/cart' />
            <Route component={ Shelf } path='/shelf' />  
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
