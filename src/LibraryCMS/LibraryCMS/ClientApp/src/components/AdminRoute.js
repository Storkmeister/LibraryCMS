import React, { Component, useState } from 'react';
import { Route, Redirect } from 'react-router';

function AdminRoute ({ children, ...rest }) {
    return (
      <Route {...rest} render={() => {
        if(rest.Authenticated === true && rest.userType === 2){
          for(const element of children){
            //Render element if path and location matches
            if(element.props.path === rest.location.pathname){
              return element;
            }
          }
            
          

        } else {
          return <Redirect to='/login' />
        }
      }} />
    )
  }
  export default AdminRoute;