import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './../style/searchResults.css';

export class SearchResults extends Component {
    static displayName = SearchResults.name;
    constructor(){
        super();
        this.state = {
            items: [
                {
                title: "Harry potter",
                resume: "This is a description of the selected item...",
                PicturePath: '',
                PageCount: 104,
                Publisher: "Egedahl",
                PublishedOn: '01-01-2020',
                Status: 1,
                DefaultRentalDays: 3,
                BooksInStock: 5,
                Authors: ["GG NO RE", "HC ANDERSEN", "GEORGE J R R MARTIN"],
                Genres: ["Horror", "Sci-fi", "Adventure", "Grimdark"],
                Rentals: []
            },
            {
                title: "Harry potter",
                resume: "This is a description of the selected item...",
                PicturePath: '',
                PageCount: 104,
                Publisher: "Egedahl",
                PublishedOn: '01-01-2020',
                Status: 1,
                DefaultRentalDays: 3,
                BooksInStock: 5,
                Authors: ["GG NO RE", "HC ANDERSEN", "GEORGE J R R MARTIN"],
                Genres: ["Horror", "Sci-fi", "Adventure", "Grimdark"],
                Rentals: []
            },
            {
                title: "Harry potter",
                resume: "This is a description of the selected item...",
                PicturePath: '',
                PageCount: 104,
                Publisher: "Egedahl",
                PublishedOn: '01-01-2020',
                Status: 1,
                DefaultRentalDays: 3,
                BooksInStock: 5,
                Authors: ["GG NO RE", "HC ANDERSEN", "GEORGE J R R MARTIN"],
                Genres: ["Horror", "Sci-fi", "Adventure", "Grimdark"],
                Rentals: []
            },
            {
                title: "Harry potter",
                resume: "This is a description of the selected item...",
                PicturePath: '',
                PageCount: 104,
                Publisher: "Egedahl",
                PublishedOn: '01-01-2020',
                Status: 1,
                DefaultRentalDays: 3,
                BooksInStock: 5,
                Authors: ["GG NO RE", "HC ANDERSEN", "GEORGE J R R MARTIN"],
                Genres: ["Horror", "Sci-fi", "Adventure", "Grimdark"],
                Rentals: []
            }
        ]
        };
    }

    componentDidMount(){

    }

    render(){
        return (
        <div>
            <div className="search-result-grid">
                <div>
                    <input placeholder=""/>
                    <button>Søg</button>
                </div>
                <table id="search-results">
                    <col id="search-table-title" span="1" />
                    <col id="search-table-description" span="1" />
                    <col id="search-table-link" span="1" />
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>decription</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.items.map((item, key) => {
                                const element = 
                                    <tr key={key}>
                                        <td>
                                            <div>
                                                <img alt="cover"/>
                                                <h4>{item.title}</h4>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{item.resume}</p>
                                        </td>
                                        <td className="table-action">
                                            <Link to="/item">Åben</Link>
                                        </td>
                                    </tr>;

                                return element;
                            })
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
        )}
}