import React, { Component } from 'react';
import { Link } from "react-router-dom";
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

    componentDidMount(){
        
    }

    render(){
        return (
        <div>
            <div className="profile-container">
                <div>Velkomst</div>
                <div>Udlån / Info om udlånsrettigheder</div>
                <div>
                    <h6>Brugeroplysninger</h6>
                    <table width="100%">
                        <tbody>
                            <tr>
                                <td>Navn:</td>
                                <td>{this.state.user.Name}</td>
                                <td><button>Rediger</button></td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{this.state.user.Email}</td>
                                <td><button>Rediger</button></td>
                            </tr>
                            <tr>
                                <td>Addresse:</td>
                                <td>{this.state.user.FullAddress}</td>
                                <td><button>Rediger</button></td>
                            </tr>
                            <tr>
                                <td>CPR / Lånerkort:</td>
                                <td>{this.state.user.Cpr}</td>
                                <td><button>Rediger</button></td>
                            </tr>
                            <tr>
                                <td>Telefonnummer:</td>
                                <td>{this.state.user.Phone}</td>
                                <td><button>Rediger</button></td>
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