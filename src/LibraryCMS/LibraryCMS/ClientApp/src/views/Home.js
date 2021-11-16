import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './../style/home.css';

export class Home extends Component {
    static displayName = Home.name;
    constructor(){
        super();
        this.state = {
            categories: []
        }
    }

    async componentWillMount(){
        this.setState({categories: await this.getAllGenres()});
    }

    getAllGenres = async () => {
        return await fetch(`/Genre/GetGenres`,{
          method:"get"
        })
        .then(function (response) {
          return response.json();
        }).then((response) => {
          console.log(response)
          return response;
        }).catch(error => {
          console.log(error);
          return error;
        });
      }

    render(){
        return (
        <div>
            <h3>Kategori</h3>
            <p>Vælg en kategori du finder interessant og lån en bog online!</p>
            <div className="category-container">
                {
                    this.state.categories.map((item, key) => {
                        const element = 
                        <Link key={key} to={`books/category/${item.Id}`}>
                            <p>{item.Name}</p>
                        </Link>
                        return element
                    })
                }
            </div>
        </div>
        )}
}