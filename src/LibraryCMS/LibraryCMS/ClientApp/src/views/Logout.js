import React, { Component } from 'react';
import { Link, useHistory } from "react-router-dom";
import AuthService from './../components/AuthService';
import './../style/login.css';

let Auth = new AuthService();

const Logout = () => {
    Auth.signOut();
    const history = useHistory();
    history.push('/');

    return null;
}

export default Logout;