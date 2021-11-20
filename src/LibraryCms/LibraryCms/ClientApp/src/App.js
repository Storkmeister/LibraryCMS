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

import { UserObject } from './views/UserObject';

import { Dashboard } from './views/Dashboard';
import { BookForm } from './views/BookForm';
import { GenreForm } from './views/GenreForm';
import DeleteObject from './components/DeleteObject';

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
              <UserObject path="/dashboard/users/toadmin" title="Bruger til administrator" type="toAdmin"/>
              <UserObject path="/dashboard/users/fromadmin" title="Administrator til bruger" type="fromAdmin"/>
              <UserObject path="/dashboard/users/unconfirm" title="Afbekræft bruger" type="unconfirm"/>
              <UserObject path="/dashboard/users/confirm" title="Bekræft bruger" type="confirm"/>
              <UserObject path="/dashboard/users/delete" title="Slet Bruger" type="delete" endpointList="GetUsers" endpointAction="DeleteUser"/>

              <BookForm path="/dashboard/books/create" type="create"/>
              <BookForm path="/dashboard/books/edit" type="edit"/>
              <DeleteObject path="/dashboard/books/delete" title="Slet Bog" type="book" endpointList="GetAllBooks" endpointAction="deletebook" renderKey="Title"/>

              <GenreForm path="/dashboard/genres/create" type="create"/>
              <GenreForm path="/dashboard/genres/edit" type="edit"/>
              <DeleteObject path="/dashboard/genres/delete" title="Slet Genre" type="genre" endpointList="GetGenres" endpointAction="DeleteGenre" renderKey="Name"/>
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
            <Route exact path='/create-user'>
              <CreateUser 
                authorizedStatusHandler={this.authorizedStatusHandler} 
                checkUserLevel={this.checkUserLevel}/>
            </Route>
            <Route exact path='/test' component={Test} />
            <Redirect  to="/" />
          </Switch>
        </Layout>
      </Router>
    );
  }
}
