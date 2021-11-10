import React, { Component, useState } from 'react';
import { Route, Redirect } from 'react-router';

function AdminRoute ({ children, ...rest }) {
    return (
      <Route {...rest} render={() => {
        return rest.Authenticated === true && rest.userType === 2
          ? children
          : <Redirect to='/login' />
      }} />
    )
  }
  export default AdminRoute;