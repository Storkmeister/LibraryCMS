import React, { Component, useState } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from './components/Layout';
import AuthService from './components/AuthService';
import { Home } from './views/Home';
import { DisplayItem } from './views/DisplayItem';
import { Profile } from './views/Profile';
import Login from './views/Login';
import Logout from './views/Logout';
import CreateUser from './views/CreateUser';
import { SearchResults } from './views/searchResults';
import { Category } from './views/Category';

import { UserConfirm } from './views/UserConfirm';

import { Dashboard } from './views/Dashboard';
import { BookForm } from './views/BookForm';
import DeleteObject from './components/DeleteObject';

import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';

import { Test } from './views/test';

import './custom.css'


import history from "./components/History";


let Auth = new AuthService();
export default class App extends Component {
  static displayName = App.name;
  constructor(){
    super();
    this.state = {
        loggedIn: false,
        isAdmin: false
    }
  }
  
  componentWillMount(){
     const [loggedIn, isAdmin] = this.checkUserLevel();
     this.setState({loggedIn: loggedIn, isAdmin: isAdmin})
     console.log(history)
  };

  authorizedStatusHandler = (loggedIn, isAdmin) => {
    this.setState({loggedIn: loggedIn, isAdmin: isAdmin})
  }

  checkUserLevel = () => {
    return [Auth.loggedIn(), Auth.checkIsAdmin()]
  }

  render () {
    return (
      <Router history={history}>
        <Layout
          history={history}
          loggedIn={this.state.loggedIn}
          isAdmin={this.state.isAdmin}
          authorizedStatusHandler={this.authorizedStatusHandler} 
          checkUserLevel={this.checkUserLevel}
        >
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search' component={SearchResults} />
            <Route exact path='/books/category/:genre' component={Category} />
            <Route exact path='/books/:id' render={
              (props) => <DisplayItem {...props} loggedIn={this.state.loggedIn}/>
            }/>
            <PrivateRoute
              loggedIn={this.state.loggedIn}
              isAdmin={this.state.isAdmin}
              exact path='/profile'
            >
              <Profile/>
            </PrivateRoute>

            <AdminRoute 
              loggedIn={this.state.loggedIn}
              isAdmin={this.state.isAdmin}
              path="/dashboard"
            >
              <Dashboard path="/dashboard"/>
              <UserConfirm path="/dashboard/users/confirm"/>
              <BookForm path="/dashboard/books/create" type="create"/>
              <BookForm path="/dashboard/books/edit" type="edit"/>
              <DeleteObject path="/dashboard/books/delete" type="book" title="Slet Bog"/>
            </AdminRoute>
            
            <Route exact path='/login'>
              <Login 
                authorizedStatusHandler={this.authorizedStatusHandler} 
                checkUserLevel={this.checkUserLevel}/>
            </Route>

            <Route exact path='/logout'>
              <Logout 
                authorizedStatusHandler={this.authorizedStatusHandler} 
                checkUserLevel={this.checkUserLevel}/>
            </Route>
            <Route exact path='/create-user' component={CreateUser} />
            <Route exact path='/test' component={Test} />
            <Redirect  to="/" />
          </Switch>
        </Layout>
      </Router>
    );
  }
}
