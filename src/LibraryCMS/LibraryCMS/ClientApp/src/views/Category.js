import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './../style/bookCategory.css';

export class Category extends Component {
    static displayName = Category.name;
    constructor(){
        super();
        this.state = {
            genre: 1,
            xitems: [
                {
                id: 0,
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
                id: 0,
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
                id: 0,
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
                id: 0,
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
                id: 0,
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
                id: 0,
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
                id: 0,
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
                id: 0,
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
        ],
        items:[]
        };
    }

    async componentDidMount(){
        this.setState({items: await this.getBooksByGenre(this.props.match.params.genre)});

    }

    /**
     * Fetch all books from the database
     * 
     * @returns database data as objects in array
     */
     getBooksByGenre = async (keyword) => {
        const endpoint = 'GetBooksByGenreId';
        fetch(`/Book/${endpoint}?Id=${keyword}`,{
          method:"get"
        })
        .then(function (response) {
          return response.json();
        }).then((response) => {
          console.log(response)
        });
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
                            <Link to={`/books/${item.id}`}>
                                <div>
                                    <img src={item.PicturePath} alt="BookCover"/>
                                </div>
                            </Link>
                            <Link to={`/books/${item.id}`}><h3>{item.title}</h3></Link>
                            <Link to={`/books/${item.id}`}><p>{item.Authors[0]}</p></Link>
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