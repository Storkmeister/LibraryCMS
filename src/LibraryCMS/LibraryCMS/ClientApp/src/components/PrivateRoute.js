import React, { Component, useState } from 'react';
import { Route, Redirect } from 'react-router';

function PrivateRoute ({ children, ...rest }) {
    return (
      <Route {...rest} render={() => {
        return rest.Authenticated === true
          ? children
          : <Redirect to='/login' />
      }} />
    )
  }
  export default PrivateRoute;