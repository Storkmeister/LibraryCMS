import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { NavSideBar } from './components/NavSideBar';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Test } from './views/test';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={NavSideBar} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/test' component={Test} />
      </Layout>
    );
  }
}
