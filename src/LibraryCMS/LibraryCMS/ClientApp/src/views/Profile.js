import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './../style/profile.css';

export class Profile extends Component {
    static displayName = Profile.name;
    constructor(){
        super();
        this.state = {
        };
    }

    componentDidMount(){
        
    }

    render(){
        return (
        <div>
            <div className="profile-container">
                <div>Velkomst</div>
                <div>Udlån / Info om udlånsrettigheder</div>
                <div>Bio / eventuelle profil oplysninger</div>
                <div>Udlånshistorik / upcoming bøger bruger vil låne sortere efter senest dato</div>
            </div>
        </div>
        )}
}