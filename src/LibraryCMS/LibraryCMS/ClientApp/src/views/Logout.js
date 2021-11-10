import React, { Component } from 'react';
import { Link, useHistory } from "react-router-dom";
import AuthService from './../components/AuthService';
import './../style/login.css';

let Auth = new AuthService();

export class Logout extends Component {
    static displayName = Logout.name;
    constructor(){
        super();
        this.state = {
            categories: []
        }
    }

    /**
     * Remove session and redirect to '/'
     */
    async componentDidMount(){
        Auth.signOut();
        const history = useHistory();
        history.push('/');
    }

    render(){
        return null;
    }
    
}