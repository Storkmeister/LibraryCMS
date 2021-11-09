import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './../style/createUser.css';

export class CreateUser extends Component {
    static displayName = CreateUser.name;
    constructor(){
        super();
        this.state = {
            categories: []
        }
    }

    async componentDidMount(){
        
    }

    render(){
        return (
        <div id="login-container">
            <h3>Login</h3>
            <p>Indtast dine login oplysninger for at logge ind på siden</p>
            <div className="category-container">
                <label>Brugernavn</label>
                <input type="text"/>
                <label>Brugernavn</label>
                <input type="password" />
            </div>
        </div>
        )}
}