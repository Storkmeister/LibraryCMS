import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import './../style/createUser.css';
import AuthService from '../components/AuthService';

let Auth = new AuthService();




const CreateUser = (props) => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleNameChange = event => setName(event.target.value);
    const handleAddressChange = event => setAddress(event.target.value);
    const handleEmailChange = event => setEmail(event.target.value);
    const handlePasswordChange = event => setPassword(event.target.value);

    const createUser = async (name, address, email, password) => {
        console.log('Insert request here...')
    
        
        history.push('/');
    }

    return (
        <div id="create-user-container">
            <h3>Opret Konto</h3>
            <p>Indtast dine oplysninger for at oprette en konto</p>
            <div className="create-user-form">
                <TextField id="name" label="Name" variant="outlined" 
                        className="login-name-field" type="text"
                        value={name} 
                        onChange={(event) => handleNameChange(event)}
                />

                <TextField id="address" label="Adresse" variant="outlined" 
                        className="login-address-field" type="text"
                        value={address} 
                        onChange={(event) => handleAddressChange(event)}
                />

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
                    onClick={(event) => createUser(name, address, email, password)}
                >
                    Login
                </Button>
            </div>
        </div>
    )
}
export default CreateUser;