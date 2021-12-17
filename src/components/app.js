import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Navbar from './nav';
import Contact from './pages/contact';
import Product from './pages/product';
import AddItem from './pages/add';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Product}></Route>
          <Route path="/add-item" component={AddItem} />
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    );
  }
}
