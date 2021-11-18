import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
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
            <div className="login-form">
                <TextField id="email" label="Email" variant="outlined" 
                    className="login-email-field" type="text"
                    value={email} 
                    onChange={event => handleEmailChange(event)}
                />

                <TextField id="password" label="Password" variant="outlined" 
                    className="login-password-field" type="password"
                    value={password} 
                    onChange={event => handlePasswordChange(event)}
                />

                <Button id="user-save-button" variant="contained" size="large" 
                    onClick={(event) => getSession(email, password, props.checkUserLevel, props.authorizedStatusHandler)}
                >
                    Login
                </Button>
            </div>
        </div>
    )
}
export default Login;