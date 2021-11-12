import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './../style/login.css';
import AuthService from './../components/AuthService';


let Auth = new AuthService();

export class Login extends Component {
    static displayName = Login.name;
    constructor(){
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    async componentDidMount(){
        
    }

    handleEmail = (e) => {
        this.setState({email: e.currentTarget.value})
    }

    handlePassword = (e) => {
        this.setState({password: e.currentTarget.value})
    }

    login = (e) => {
        console.log(e.currentTarget);

        Auth.login(this.state.email, this.state.password)
    }

    render(){
        return (
        <div id="login-container">
            <h3>Login</h3>
            <p>Indtast dine login oplysninger for at logge ind på siden</p>
            <div className="">
                <label>Brugernavn</label>
                <input id="email" type="text" onChange={this.handleEmail} />
                <label>Kodeord</label>
                <input id="password" type="password" onChange={this.handlePassword}/>
                <button onClick={this.login}>Login</button>
            </div>
        </div>
        )}
}