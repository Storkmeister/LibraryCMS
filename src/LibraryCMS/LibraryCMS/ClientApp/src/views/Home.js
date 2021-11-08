import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './../style/home.css';

export class Home extends Component {
    static displayName = Home.name;
    constructor(){
        super();
        this.state = {
            categories: [
                {
                    title: "Krimi",
                    keyword: "krimi"
                },
                {
                    title: "Fantasy",
                    keyword: "fantasy"
                },
                {
                    title: "Humor",
                    keyword: "humor"
                },
                {
                    title: "Gys",
                    keyword: "gys"
                },
                {
                    title: "Eventyr",
                    keyword: "eventyr"
                },
                {
                    title: "Science fiction",
                    keyword: "sci-fi"
                },
                {
                    title: "Dagbøger",
                    keyword: "dagboeger"
                },
                
            ]
        }
    }

    componentDidMount(){

    }

      /*
    ====================
    Book functions
    ====================
  */
  /**
   * Fetch all books from the database
   * 
   * @returns database data as objects in array
   */
  getAllBooks = (keyword) => {
    const endpoint = 'SearchAllRentableBooks';
    fetch(`/book/${endpoint}?searchtext=${keyword}`,{
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
            <h3>Kategori</h3>
            <p>Vælg en kategori du finder interessant og lån en bog online!</p>
            <div className="category-container">
                {
                    this.state.categories.map((item) => {
                        const element = 
                        <Link key={item.keyword} to={`books/category/${item.keyword}`}>
                            <p>{item.title}</p>
                        </Link>
                        return element
                    })
                }
            </div>
        </div>
        )}
}