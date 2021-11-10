import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { NavSideBar } from './NavSideBar';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu 
          Authenticated={this.props.Authenticated} 
          userType={this.props.userType}
        />
        <div className="content-container container">
          <NavSideBar />
          <Container>
            {this.props.children}
          </Container>
        </div>
      </div>
    );
  }
}
