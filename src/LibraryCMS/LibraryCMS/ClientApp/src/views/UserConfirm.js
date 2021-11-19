import React, { Component } from 'react';
import AuthService from './../components/AuthService';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import './../style/userConfirm.css';
import { TextField } from '@mui/material';
import moment from 'moment';

let Auth = new AuthService();

export class UserConfirm extends Component {
    static displayName = UserConfirm.name;
    constructor(){
        super();
        this.state = {
            newUsers: [],
            user: {},
            refresh: false
        };
    }

    async componentWillMount(){
        const newUsers =  await this.userAction(undefined, 'getConfirmUsers', 'GET');
        this.setState({newUsers: newUsers});
    }

    handleOnSelect = (e, value) => {
        this.setState({user: value});
    }

    handleInputChange = (e, value = "") => {
        const user = this.state.user
        user.Email = value;
        this.setState({user: user});
    }

    handleConfirmUser = async (e) => {
        const response = await this.userAction(this.state.user, "confirmUser", "PUT");
        console.log(response);
        const List = await this.userAction(undefined, 'getConfirmUsers', 'GET');
        this.setState({newUsers: List});
        this.setState({user: {Id:0, Title: ""}});
        this.setState({refresh: !this.state.refresh});
    }



   /**
   * 
   * @param {object} user User object
   * @param {object} method GET / POST / PUT / DELETE 
   * @returns {boolean} HTTP Response
   */
    userAction = (user, endpoint, method) => {
        fetch(`/User/${endpoint}`, {
            method: method,
            mode: "cors",
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${Auth.getToken()}`,
            },
            body: JSON.stringify(user)
        })
        .then(function (response) {
            return response.json();
        }).then((response) => {
            return response;
        });
    }


    parseDate = date => {
        return moment(date).format("DD-MM-YYYY");
    }


    render(){
        return (
            <div>
                <h5>Bekræft nyoprettet brugere</h5>
                <Autocomplete
                    id="combo-box-demo"
                    key={this.state.refresh}
                    onChange={(event, value) => this.handleOnSelect(event, value)}
                    onInputChange={(event,value) => this.handleInputChange(event, value)}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    inputValue={this.state.Email}
                    options={this.state.newUsers}
                    getOptionLabel={(option) => option.Email}
                    style={{ width: 300 }}
                    renderInput={(params) => 
                    <TextField {...params} label={"Brugere"} variant="outlined" />}
                />
                <Button id="book-delete-button" variant="contained" size="large" onClick={async () => {await this.handleConfirmUser()}}>
                            Slet
                </Button>
            </div>
    )};
}