import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './views/Home';
import { DisplayItem } from './views/DisplayItem';
import { SearchResults } from './views/searchResults';
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
          <Route exact path='/Item' component={DisplayItem} />
          <Route path='/counter' component={Counter} />
          <Route path='/fetch-data' component={FetchData} />
          <Route path='/test' component={Test} />
        </Switch>
      </Layout>
    );
  }
}
