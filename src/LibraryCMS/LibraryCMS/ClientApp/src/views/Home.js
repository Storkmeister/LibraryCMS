import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Home extends Component {
    static displayName = Home.name;
    constructor(){
        super();
        this.state = {
            userName: 'Yoo'
        }
    }

    componentDidMount(){
        console.log('Hello mate');
    }


    onInputChange = (e) => {
        console.log(e.currentTarget.value)
        this.setState({userName: e.currentTarget.value})
    }

    render(){
        return (
        <div>
            <p>Username:</p>
            <input onChange={this.onInputChange}/>


            <h1>Profile name:</h1>
            <h2>{this.state.userName}</h2>


        </div>
        )}
}