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

    async componentWillMount(){
        const items = await this.getSearchResults(this.props.match.params.title);
        this.setState({items: items});
        this.setState({search: this.props.match.params.title})
    }

    async componentDidUpdate(){
        //If Condition prevents a infinite loop
        if(this.props.match.params.title !== this.state.search){
            const items = await this.getSearchResults(this.props.match.params.title);
            this.setState({items: items});
            this.setState({search: this.props.match.params.title})
        };
    }

    /**
     * Fetch all books from the database
     * 
     * @returns database data as objects in array
     */
     getSearchResults = async (keyword) => {
        const endpoint = 'SearchAllRentableBooks';
        return await fetch(`/Book/${endpoint}?searchtext=${keyword}`,{
          method:"get"
        })
        .then(function (response) {
          return response.json();
        }).then((response) => {
          return response;
        });
      }
    

    render(){
        return (
        <div>
            <div className="search-result-grid">
                <div id="search-headline-container">
                    <h2>{this.props.Title}</h2>
                    <p>Der er {this.state.items.length} bøger i denne søgning</p>
                </div>
                <div className="category-filter-container">
                    {
                        this.state.items.map((item, key) => {
                            const element = 
                            <div key={key} className="item-card">
                                <Link to={`/books/${item.Id}`}>
                                    <div>
                                        <img src={`/img/${item.PicturePath}`} alt="BookCover"/>
                                    </div>
                                </Link>
                                <Link to={`/books/${item.Id}`}><h3>{item.Title}</h3></Link>
                                <Link to={`/books/${item.Id}`}><p>{item.Author}</p></Link>
                            </div>

                            return element;
                        })
                    }
                </div>
            </div>
        </div>
        )}
}