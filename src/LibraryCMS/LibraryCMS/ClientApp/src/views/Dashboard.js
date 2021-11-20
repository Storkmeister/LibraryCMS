import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './../style/dashboard.css';

export class Dashboard extends Component {
    static displayName = Dashboard.name;
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
            <h5>Dashboard</h5>
            <div className="dashboard-container">
                <div>
                    <h6>Brugere</h6>
                    <ul>
                        <li><Link to="/dashboard/users/toadmin">Bruger til administrator</Link></li>
                        <li><Link to="/dashboard/users/fromadmin">Administrator til bruger</Link></li>
                        <li><Link to="/dashboard/users/confirm">Bekræft bruger</Link></li>
                        <li><Link to="/dashboard/users/unconfirm">Afbekræft bruger</Link></li>
                        <li><Link to="/dashboard/users/delete">Slet bruger</Link></li>
                        
                    </ul>
                </div>
                <div>
                    <h6>Bøger</h6>
                    <ul>
                        <li><Link to="/dashboard/books/create">Opret</Link></li>
                        <li><Link to="/dashboard/books/edit">Rediger</Link></li>
                        <li><Link to="/dashboard/books/delete">Slet</Link></li>
                    </ul>
                </div>
                <div>
                    <h6>Genre</h6>
                    <ul>
                        <li><Link to="/dashboard/genres/create">Opret</Link></li>
                        <li><Link to="/dashboard/genres/edit">Rediger</Link></li>
                        <li><Link to="/dashboard/genres/delete">Slet</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        )}
}