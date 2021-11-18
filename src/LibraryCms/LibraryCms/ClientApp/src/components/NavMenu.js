import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './../style/NavMenu.css';
import AuthService from './AuthService';

let Auth = new AuthService();

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

  logout = () => {
    Auth.signOut();
    const [loggedIn, isAdmin] = this.props.checkUserLevel();
    this.props.authorizedStatusHandler(loggedIn, isAdmin);
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
        if(props.loggedIn){
          element = 
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/profile">Profile</NavLink>
            </NavItem>
          return element;
        } else {
          return null;
        }
      } else if(props.type === 'login'){
        if(!props.loggedIn){
          element =
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/login">Login</NavLink>
            </NavItem>
            return element
        } else {
          element = 
            <NavItem>
              <NavLink to="/" tag={Link} className="text-dark" onClick={props.logout}>Logout</NavLink>
            </NavItem>
            
          return element;
        }
      } else if(props.type === "create-account") {
        if(!props.loggedIn){
          element = 
            <NavItem>
              <NavLink to="/create-user" tag={Link} className="text-dark">Opret konto</NavLink>
            </NavItem>
            return element;
        } else {
          return null;
        }
        
      } else {
        return null;
      }
    }

    function Admin(props){
      if(props.loggedIn && props.isAdmin){
            const element = 
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/dashboard">Dashboard</NavLink>
            </NavItem>
            return element;
      } else {
        return null;
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
                  <Admin isAdmin={this.props.isAdmin} loggedIn={this.props.loggedIn}/>
                  <LoggedIn type="profile" loggedIn={this.props.loggedIn} />
                  <LoggedIn type="login" loggedIn={this.props.loggedIn} logout={this.logout} />
                  <LoggedIn type="create-account" loggedIn={this.props.loggedIn} logout={this.logout} />
                  {/*
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/test">Test</NavLink>
                  </NavItem>
                  */}
                </ul>
              </div>
            </Container>
      </header>
    );
  }
}
