import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './../style/displayitem.css';

export class DisplayItem extends Component {
    static displayName = DisplayItem.name;
    constructor(){
        super();
        this.state = {
            item: {
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
        }
    }

    componentDidMount(){
        this.getBookById(this.props.match.params.id);
    }

    /**
     * Fetch a book from the database by the books primary key
     * 
     * @param  {int} id The primary key of the book you want to retreive from the database
     * @returns database data in object format
     */
    getBookById = (id) => {

    fetch('/Book/GetResponse',{
        method:"get"
    })
    .then(function (response) {
        return response.json();
    }).then((response) => {
        console.log(response)
    /*
        return {
            id: response[0].book.id,
            title: response[0].book.title,
            summary: response[0].book.summary,
            genre: response[0].book.genre,
            picturePath: response[0].book.picturePath,
            author: response[0].book.author,
            publisher: response[0].book.publisher,
            releaseDate: response[0].book.releaseDate,
            status: response[0].book.status,
            lendPeriodeLimit: response[0].book.lendPeriodeLimit
        }*/
    });
    }

    render(){
        return (
        <div>
            <div className="item-grid">
                <img alt="image"/>
                <div>
                    <h4>{this.state.item.title}</h4>
                    <p>{this.state.item.resume}</p>
                </div>
                <table id="item-table">
                    <tbody>
                        <tr>
                            <td>Forfatter:</td>
                            <td>
                            {
                                this.state.item.Authors.map((item, key) => {
                                    return <div key={key}>{item}</div>
                                })
                            }
                            </td>
                        </tr>
                        <tr>
                            <td>Udgivelse:</td>
                            <td>{this.state.item.PublishedOn}</td>
                        </tr>
                        <tr>
                            <td>Forlag:</td>
                            <td>{this.state.item.Publisher}</td>
                        </tr>
                        <tr>
                            <td>Genre:</td>
                            <td>
                            {
                                this.state.item.Genres.map((item, key) => {
                                    return <div key={key}>{item}</div>
                                })
                            }
                            </td>

                        </tr>
                    </tbody>
                </table>
                <div>
                    <button>Lån</button>
                </div>
            </div>
            
        </div>
        )}
}