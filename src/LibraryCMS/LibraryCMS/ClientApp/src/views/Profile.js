import React, { Component } from 'react'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import './../style/profile.css';

export class Profile extends Component {
    static displayName = Profile.name;
    constructor(){
        super();
        this.state = {
            user:{
                Name: "Jacob",
                Email: "Jacob.wistroem@gmail.com",
                FullAddress: "Rådhushaven 7, 3480 Fredensborg",
                Cpr: "123456-1234",
                Phone: "10034019"
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

    componentDidMount() {
        
    }

    handleFormChange = (e) =>{
        let user = this.state.user;
        user[e.currentTarget.id] = e.currentTarget.value;
        this.setState({user: user})
    }


    handleSaveUser = (e) => {
        console.log(e)
    }
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
                <div>
                    <h6>Brugeroplysninger</h6>
                    <table width="100%">
                        <tbody>
                            <tr>
                                <TextField id="Name" label="Navn" variant="outlined" className="user-input-field"
                                    value={this.state.user.Name} 
                                    onChange={event => this.handleFormChange(event)}
                                />
                            </tr>
                            <tr>
                                <TextField id="Email" label="Email" variant="outlined" className="user-input-field"
                                    value={this.state.user.Email} 
                                    onChange={event => this.handleFormChange(event)}
                                />
                            </tr>
                            <tr>
                                <TextField id="FullAddress" label="Adresse" variant="outlined" className="user-input-field"
                                    value={this.state.user.FullAddress} 
                                    onChange={event => this.handleFormChange(event)}
                                />
                            </tr>
                        </tbody>
                    </table>
                    <h6>Konto styrring</h6>
                    <table width="100%">
                        <tbody>
                            <tr>
                                <TextField id="oldPassword" label="Gammelt kodeord" variant="outlined" className="user-input-field"
                                    value={this.state.user.oldPassword} 
                                    onChange={event => this.handleFormChange(event)}
                                />
                            </tr>
                            <tr>
                                <TextField id="newPassword" label="Nyt Kodeord" variant="outlined" className="user-input-field"
                                    value={this.state.user.newPassword} 
                                    onChange={event => this.handleFormChange(event)}
                                />
                            </tr>
                            <tr>
                                <TextField id="repeatNewPassword" label="Gentag Kodeord" variant="outlined" className="user-input-field"
                                    value={this.state.user.repeatNewPassword} 
                                    onChange={event => this.handleFormChange(event)}
                                />
                            </tr>
                            <tr>
                                <Button id="user-save-button" variant="contained" size="large" onClick={this.handleSaveUser}>
                                    Gem ændringer
                                </Button>
                            </tr>
                        </tbody>
                    </table>
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