import React, { Component, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { Layout } from './components/Layout';
import AuthService from './components/AuthService';
import { Home } from './views/Home';
import { DisplayItem } from './views/DisplayItem';
import { Profile } from './views/Profile';
import { Login } from './views/Login';
import Logout from './views/Logout';
import { CreateUser } from './views/CreateUser';
import { SearchResults } from './views/searchResults';
import { Category } from './views/Category';

import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';


import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Test } from './views/test';

import './custom.css'


let Auth = new AuthService();

export default class App extends Component {
  static displayName = App.name;
  constructor(){
    super();
    this.state = {
      tokenValues: {
        userType: 1,
        Authenticated: true
      }
    }
  }
  
  async componentDidMount(){
     const token = await Auth.getToken();
     this.setState({token: token});
  };



  render () {
    return (
      <Layout 
        Authenticated={this.state.tokenValues.Authenticated} 
        userType={this.state.tokenValues.userType}
      >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/search' component={SearchResults} />
          <Route exact path='/books/category/:genre' component={Category} />
          <Route exact path='/books/:id' component={DisplayItem} />

          <PrivateRoute Authenticated={this.state.tokenValues.Authenticated} path='/profile'>
            <Profile/>
          </PrivateRoute>

          <AdminRoute 
            Authenticated={this.state.tokenValues.Authenticated} 
            userType={this.state.tokenValues.userType}
            path="/dashboard"
          >

          </AdminRoute>
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/create-user' component={CreateUser} />
          <Route path='/counter' component={Counter} />
          <Route path='/fetch-data' component={FetchData} />
          <Route path='/test' component={Test} />
          <Redirect  to="/" />
        </Switch>
      </Layout>
    );
  }
}
