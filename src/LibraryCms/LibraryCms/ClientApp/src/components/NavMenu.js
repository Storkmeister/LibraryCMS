import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './../style/NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {

    /**
     * Can switch between different elements to render, based on the authentication status
     * 
     * This element can be rendered with 2 different types
     * - profile: display profile anchor element if logged in
     * - login: dependent on the loginstatus, render the fitting button
     * 
     * @param {object} props object with different props - variables such as authenticated and type has to be included
     * @returns Element to render in the navbar
     */
    function LoggedIn(props){
      let element;
      if(props.type === 'profile'){
        if(props.authenticated){
          element = 
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/profile">Profile</NavLink>
            </NavItem>
          return element;
        } else {
        }
      } else if(props.type === 'login'){
        if(!props.authenticated){
          element =
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/login">Login</NavLink>
            </NavItem>
        } else {
          element = 
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/logout">Logout</NavLink>
            </NavItem>
            
          return element;
        }
      }
    }

    return (
        <header className="navbar-header">
            <Container>
            <div className="navbar-container">
              <div className="nav-container">
                <Link to="/">
                  <h4>Library CMS</h4>
                </Link>
              </div>
              <div className="search_container">
                <input placeholder="Indtast title, genre ..."/>
                <button>Søg</button>
              </div>
              <ul className="nav-container navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                <LoggedIn type="profile" authenticated={this.props.Authenticated} />
                <LoggedIn type="login" authenticated={this.props.Authenticated} />
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/test">Test</NavLink>
                </NavItem>
              </ul>
              
            {/*
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">LibraryCms</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/profile">Profile</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/test">Test</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>  
        </Navbar>
            */}
                    </div>
            </Container>
      </header>
    );
  }
}
