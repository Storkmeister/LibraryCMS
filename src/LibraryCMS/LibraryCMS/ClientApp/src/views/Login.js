import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import './../style/login.css';
import AuthService from './../components/AuthService';

let Auth = new AuthService();




const Login = (props) => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleEmailChange = event => setEmail(event.target.value);
    const handlePasswordChange = event => setPassword(event.target.value);

    const getSession = async (email, password, checkUserLevel, authorizedStatusHandler) => {
        const test = await Auth.login(email, password)
        const [loggedIn, isAdmin] = checkUserLevel();
        authorizedStatusHandler(loggedIn, isAdmin);
    
        
        history.push('/');
    }





    return (
        <div id="login-container">
            <h3>Login</h3>
            <p>Indtast dine login oplysninger for at logge ind på siden</p>
            <div className="">
                <label>Brugernavn</label>
                <input id="email" type="text" onChange={handleEmailChange} value={email}/>
                <label>Kodeord</label>
                <input id="password" type="password" onChange={handlePasswordChange} value={password}/>
                <button onClick={(event) => getSession(email, password, props.checkUserLevel, props.authorizedStatusHandler)}>Login</button>
            </div>
        </div>
    )
}
export default Login;