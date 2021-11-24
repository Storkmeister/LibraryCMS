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
          return response;
        }).catch(error => {
          console.log(error);
          return error;
        });
      }

    render(){
        return (
        <div>
            <div className="category-container">
              <div>
                <h4>Velkommen til Library CMS</h4>
                <p>Her kan du låne bøger hvis du har en konto.</p>
              </div>
              <div>
                <h4>Hurtig Menu</h4>
                <ul>
                  <li><Link to="/">Alle Bøger</Link></li>
                  <li><Link to="/">Bibliotekets SpecialUdvalg</Link></li>
                  <li><Link to="/">Om Projektet</Link></li>
                </ul>
              </div>
            </div>
        </div>
        )}
}