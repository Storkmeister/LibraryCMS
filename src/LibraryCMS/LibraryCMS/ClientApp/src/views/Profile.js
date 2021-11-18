import React, { Component } from 'react'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import AuthService from './../components/AuthService';
import './../style/profile.css';

let Auth = new AuthService();

export class Profile extends Component {
    static displayName = Profile.name;
    constructor(){
        super();
        this.state = {
            user:{
                Email: "Jacob.wistroem@gmail.com",
                FullAddress: "Rådhushaven 7, 3480 Fredensborg",
                oldPassword: "",
                newPassword: "",
                repeatNewPassword: "",
            },
            books: [
                {
                    Title: "Harry potter yo",
                    Date: "01-01-2020 - 19-01-2020"
                },
                {
                    Title: "Harry potter yo",
                    Date: "01-01-2020 - 19-01-2020"
                },
                {
                    Title: "Harry potter yo",
                    Date: "01-01-2020 - 19-01-2020"
                },
                {
                    Title: "Harry potter yo",
                    Date: "01-01-2020 - 19-01-2020"
                }
            ]
        };
    }

    async componentDidMount() {
        const user = await this.userAction(undefined, 'GetUsers', 'GET');
        const rentalHistory = await this.rentalAction(undefined, 'GetRentals', 'GET');
        if(user !== undefined){
            this.setState({user: user});
            this.setState({rental: rentalHistory});
        }
        console.log(user);
        console.log(rentalHistory);
    }

    handleFormChange = (e) =>{
        let user = this.state.user;
        user[e.currentTarget.id] = e.currentTarget.value;
        this.setState({user: user})
    }


    handleSaveUser = async (e) => {
        const user = this.state.user;
        const response = await this.userAction(user, 'UpdateUser', 'POST');
        console.log(response);
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
    };

     /**
   * 
   * @param {object} rental Rental object
   * @param {object} method GET / POST / PUT / DELETE 
   * @returns {boolean} HTTP Response
   */
      rentalAction = (rental, endpoint, method) => {
        fetch(`/Rental/${endpoint}`, {
            method: method,
            mode: "cors",
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${Auth.getToken()}`,
            },
            body: JSON.stringify(rental)
        })
        .then(function (response) {
        return response.json();
        }).then((response) => {
        return response;
        });
    };




    render(){
        return (
        <div>
            <div className="profile-container">
                <div id="profile-welcome">
                    <h5 >Velkommen til din side</h5>
                </div>
                <div id="profile-history">
                    <h5>Udlån / Info om udlånsrettigheder</h5>
                </div>
                <div className="profile-information-container">
                    <h6>Brugeroplysninger</h6>
                    <TextField id="Email" label="Email" variant="outlined" className="user-input-field"
                        value={this.state.user.Email} 
                        onChange={event => this.handleFormChange(event)}
                    />

                    <TextField id="FullAddress" label="Adresse" variant="outlined" className="user-input-field"
                        value={this.state.user.FullAddress} 
                        onChange={event => this.handleFormChange(event)}
                    />

                    <h6>Konto styrring</h6>
                    
                    <TextField id="oldPassword" label="Gammelt kodeord" variant="outlined" 
                    className="user-input-field" type="password"
                        value={this.state.user.oldPassword} 
                        onChange={event => this.handleFormChange(event)}
                    />
                
                    <TextField id="newPassword" label="Nyt Kodeord" variant="outlined" 
                    className="user-input-field" type="password"
                        value={this.state.user.newPassword} 
                        onChange={event => this.handleFormChange(event)}
                    />
                
                    <TextField id="repeatNewPassword" label="Gentag Kodeord" variant="outlined" 
                    className="user-input-field" type="password"
                        value={this.state.user.repeatNewPassword} 
                        onChange={event => this.handleFormChange(event)}
                    />
                
                    <Button id="user-save-button" variant="contained" size="large" onClick={this.handleSaveUser}>
                        Gem ændringer
                    </Button>
                </div>
                <div>
                    <h6>Udlånshistorik</h6>
                    <table className="profile-table" width="100%">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Udlåns dato</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.books.map((item, key ) => {
                                    const element =
                                    <tr key={key}>
                                        <td>{item.Title}</td>
                                        <td>{item.Date}</td>
                                    </tr>
                                    return element;
                                })
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )}
}