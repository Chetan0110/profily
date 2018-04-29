import React from 'react';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import Login from './components/login';
import Profile from './components/profile';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const App = () => (
  <Provider store={createStoreWithMiddleware(reducers)} >
    <BrowserRouter>
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  </Provider >
)

export default App;
