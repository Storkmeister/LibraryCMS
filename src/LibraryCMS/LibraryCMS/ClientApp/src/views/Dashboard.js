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
                    <h6>Users</h6>
                    <ul>
                        <li><Link to="/dashboard/users/create">Opret</Link></li>
                        <li><Link to="/dashboard/users/edit">Rediger</Link></li>
                        <li><Link to="/dashboard/users/delete">Slet</Link></li>
                        <li><Link to="/dashboard/users/confirm">Bekræft</Link></li>
                    </ul>
                </div>
                <div>
                    <h6>Books</h6>
                    <ul>
                        <li><Link to="/dashboard/books/create">Opret</Link></li>
                        <li><Link to="/dashboard/books/edit">Rediger</Link></li>
                        <li><Link to="/dashboard/books/delete">Slet</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        )}
}