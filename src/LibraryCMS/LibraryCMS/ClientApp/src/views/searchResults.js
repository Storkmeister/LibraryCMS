import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './../style/searchResults.css';

export class SearchResults extends Component {
    static displayName = SearchResults.name;
    constructor(){
        super();
        this.state = {
            genre: "Eventyr",
            items: [
                {
                title: "Harry Potter and the Deadly Hallow",
                resume: "This is a description of the selected item...",
                PicturePath: '/img/harrypotter.jpg',
                PageCount: 104,
                Publisher: "Egedahl",
                PublishedOn: '01-01-2020',
                Status: 1,
                DefaultRentalDays: 3,
                BooksInStock: 5,
                Authors: ["J.K. Rowling", "HC ANDERSEN", "GEORGE J R R MARTIN"],
                Genres: ["Horror", "Sci-fi", "Adventure", "Grimdark"],
                Rentals: []
            },
            {
                title: "Harry Potter and the Deadly Hallow",
                resume: "This is a description of the selected item...",
                PicturePath: '/img/harrypotter.jpg',
                PageCount: 104,
                Publisher: "Egedahl",
                PublishedOn: '01-01-2020',
                Status: 1,
                DefaultRentalDays: 3,
                BooksInStock: 5,
                Authors: ["J.K. Rowling", "HC ANDERSEN", "GEORGE J R R MARTIN"],
                Genres: ["Horror", "Sci-fi", "Adventure", "Grimdark"],
                Rentals: []
            },
            {
                title: "Harry Potter and the Deadly Hallow",
                resume: "This is a description of the selected item...",
                PicturePath: '/img/harrypotter.jpg',
                PageCount: 104,
                Publisher: "Egedahl",
                PublishedOn: '01-01-2020',
                Status: 1,
                DefaultRentalDays: 3,
                BooksInStock: 5,
                Authors: ["J.K. Rowling", "HC ANDERSEN", "GEORGE J R R MARTIN"],
                Genres: ["Horror", "Sci-fi", "Adventure", "Grimdark"],
                Rentals: []
            },
            {
                title: "Harry Potter and the Deadly Hallow",
                resume: "This is a description of the selected item...",
                PicturePath: '/img/harrypotter.jpg',
                PageCount: 104,
                Publisher: "Egedahl",
                PublishedOn: '01-01-2020',
                Status: 1,
                DefaultRentalDays: 3,
                BooksInStock: 5,
                Authors: ["J.K. Rowling", "HC ANDERSEN", "GEORGE J R R MARTIN"],
                Genres: ["Horror", "Sci-fi", "Adventure", "Grimdark"],
                Rentals: []
            },
            {
                title: "Harry Potter and the Deadly Hallow - This is an extra long title for lols",
                resume: "This is a description of the selected item...",
                PicturePath: '/img/harrypotter.jpg',
                PageCount: 104,
                Publisher: "Egedahl",
                PublishedOn: '01-01-2020',
                Status: 1,
                DefaultRentalDays: 3,
                BooksInStock: 5,
                Authors: ["J.K. Rowling", "HC ANDERSEN", "GEORGE J R R MARTIN"],
                Genres: ["Horror", "Sci-fi", "Adventure", "Grimdark"],
                Rentals: []
            },
            {
                title: "Harry Potter and the Deadly Hallow",
                resume: "This is a description of the selected item...",
                PicturePath: '/img/harrypotter.jpg',
                PageCount: 104,
                Publisher: "Egedahl",
                PublishedOn: '01-01-2020',
                Status: 1,
                DefaultRentalDays: 3,
                BooksInStock: 5,
                Authors: ["J.K. Rowling", "HC ANDERSEN", "GEORGE J R R MARTIN"],
                Genres: ["Horror", "Sci-fi", "Adventure", "Grimdark"],
                Rentals: []
            },
            {
                title: "Harry Potter and the Deadly Hallow",
                resume: "This is a description of the selected item...",
                PicturePath: '/img/harrypotter.jpg',
                PageCount: 104,
                Publisher: "Egedahl",
                PublishedOn: '01-01-2020',
                Status: 1,
                DefaultRentalDays: 3,
                BooksInStock: 5,
                Authors: ["J.K. Rowling", "HC ANDERSEN", "GEORGE J R R MARTIN"],
                Genres: ["Horror", "Sci-fi", "Adventure", "Grimdark"],
                Rentals: []
            },
            {
                title: "Harry Potter and the Deadly Hallow",
                resume: "This is a description of the selected item...",
                PicturePath: '/img/harrypotter.jpg',
                PageCount: 104,
                Publisher: "Egedahl",
                PublishedOn: '01-01-2020',
                Status: 1,
                DefaultRentalDays: 3,
                BooksInStock: 5,
                Authors: ["J.K. Rowling", "HC ANDERSEN", "GEORGE J R R MARTIN"],
                Genres: ["Horror", "Sci-fi", "Adventure", "Grimdark"],
                Rentals: []
            },
        ]
        };
    }

    componentDidMount(){

    }

    render(){
        return (
        <div>
            <div className="search-result-grid">
                <h2>{this.state.genre}</h2>
                <div className="category-filter-container">

                {
                    this.state.items.map((item, key) => {
                        const element = 
                        <div key={key} className="item-card">
                            <Link to="/img">
                                <div>
                                    <img src={item.PicturePath} alt="BookCover"/>
                                </div>
                            </Link>
                            <Link to="/title"><h3>{item.title}</h3></Link>
                            <Link to="/author"><p>{item.Authors[0]}</p></Link>
                        </div>

                        return element;
                    })
                }
                {/*
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
                */}

                

                </div>
            </div>
        </div>
        )}
}