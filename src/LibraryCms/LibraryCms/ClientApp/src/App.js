import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './views/Home';
import { DisplayItem } from './views/DisplayItem';
import { Profile } from './views/Profile';
import { Login } from './views/Login';
import { CreateUser } from './views/CreateUser';
import { SearchResults } from './views/searchResults';
import { Category } from './views/Category';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Test } from './views/test';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/search' component={SearchResults} />
          <Route exact path='/books/category/:genre' component={Category} />
          <Route exact path='/books/:id' component={DisplayItem} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/create-user' component={CreateUser} />
          <Route path='/counter' component={Counter} />
          <Route path='/fetch-data' component={FetchData} />
          <Route path='/test' component={Test} />
        </Switch>
      </Layout>
    );
  }
}
