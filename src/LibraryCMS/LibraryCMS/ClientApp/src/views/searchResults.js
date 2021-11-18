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

    async componentWillMount(){
        const title = await this.getGenreById(this.props.match.params.genre);
        const items = await this.getBooksByGenre(this.props.match.params.genre);
        this.setState({title: title.Name});
        this.setState({items: items});
    }

    async componentDidUpdate(){
        //If Condition prevents a infinite loop
        if(parseInt(this.props.match.params.genre) !== this.state.title.Id){
            const title = await this.getGenreById(this.props.match.params.genre);
            const items = await this.getBooksByGenre(this.props.match.params.genre);
            this.setState({title: title});
            this.setState({items: items});
            console.log('update mount');
        };
    }

    /**
     * Fetch all books from the database
     * 
     * @returns database data as objects in array
     */
     getBooksByGenre = async (keyword) => {
        const endpoint = 'GetBooksByGenreId';
        return await fetch(`/Book/${endpoint}?Id=${keyword}`,{
          method:"get"
        })
        .then(function (response) {
          return response.json();
        }).then((response) => {
          return response;
        });
      }
    
      getGenreById = async (id) => {
        return await fetch(`/Genre/getGenreById?Id=${id}`,{
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
                <h2>{this.state.title.Name}</h2>
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