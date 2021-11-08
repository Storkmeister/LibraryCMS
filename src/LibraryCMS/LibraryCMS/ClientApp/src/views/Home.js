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