import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './../style/login.css';

export class Login extends Component {
    static displayName = Login.name;
    constructor(){
        super();
        this.state = {
            categories: []
        }
    }

    async componentDidMount(){
        
    }

    login = (e) => {
        console.log(e.currentTarget);
    }

    render(){
        return (
        <div id="login-container">
            <h3>Login</h3>
            <p>Indtast dine login oplysninger for at logge ind på siden</p>
            <div className="">
                <label>Brugernavn</label>
                <input type="text"/>
                <label>Kodeord</label>
                <input type="password" />
                <button onClick={this.login}>Login</button>
            </div>
        </div>
        )}
}