import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Store from './components/store/Store';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/store" component={Store} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
