import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Autocomplete from '@mui/material/Autocomplete';
import './../style/bookForm.css';
import { TextField } from '@mui/material';
import moment from 'moment';

export class BookForm extends Component {
    static displayName = BookForm.name;
    constructor(){
        super();
        this.state = {
            book: {
                Id: 0,
                Title: "",
                Resume: "",
                PicturePath: '',
                PageCount: 0,
                Publisher: "",
                PublishedOn: '',
                Status: 1,
                DefaultRentalDays: 0,
                BooksInStock: 0,
                Author: "",
                Genres: [],
                Rentals: []
            },
            books: [
                {
                    Title: "Hello",
                    Id: 1
                },
                {
                    Title: "Hello1",
                    Id: 2
                },
                {
                    Title: "Hello2",
                    Id: 3
                },
                {
                    Title: "Hello3",
                    Id: 4
                },
                {
                    Title: "Hello4",
                    Id: 5
                },
            ],
            selected: {
                Title: "Vælg bog",
                Id: undefined
            }
        };
    }

    async componentDidMount(){
        const books =  await this.getAllBooks();
        this.setState({books: books});
    }

    async componentDidUpdate(){
        if(this.state.selected.Id !== this.state.book.Id && this.state.selected.Id !== undefined){
            let book = await this.getBookById(this.state.selected.Id);
            //Handle date format
            book.PublishedOn = this.parseDate(book.PublishedOn);
            this.setState({book: book});
        }
    }

    handleSelector = (e, value) => {
        this.setState({selected: value});
    }

    handleFormChange = (e) =>{
        let book = this.state.book;
        book[e.currentTarget.id] = e.currentTarget.value;
        this.setState({book: book})
    }

    getBookById = async (id) => {

        const result = await fetch(`/Book/GetBook/${parseInt(id)}`,{
            method:"get"
        })
        .then(function (response) {
            return response.json();
        }).then((response) => {
            return response;
        });
        return result
    }


    getAllBooks = async () => {

        const result = await fetch(`/Book/GetAllBooks`,{
            method:"get"
        })
        .then(function (response) {
            return response.json();
        }).then((response) => {
            return response;
        });
        return result
    }

    parseDate = date => {
        return moment(date).format("DD MMMM YYYY");
    }


    render(){

        function ComboBox(props){
            let element;
            if(props.type === "edit"){
                element = <Autocomplete
                    id="combo-box-demo"
                    onChange={(event, value) => props.handleEvent(event, value)}
                    options={props.data}
                    getOptionLabel={(option) => option.Title}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label={props.selected} variant="outlined" />}
              />
            } else {
                element = null;
            }
            return element
        }

        return (
        <div>
            
            <div className="bookform-container">
                <h5>Bog formular</h5>
                <ComboBox type={this.props.type} data={this.state.books} handleEvent={this.handleSelector} selected={this.state.selected.Title}/>
            
                <label htmlFor="title">Titel</label>
                <input id="Title" 
                    value={this.state.book.Title} 
                    onChange={event => this.handleFormChange(event)} />
                <label htmlFor="Resume">Resume</label>
                <input id="Resume"
                 value={this.state.book.Resume} 
                 onChange={event => this.handleFormChange(event)}/>
                <label htmlFor="PicturePath">Bogcover</label>
                <input id="PicturePath"
                value={this.state.book.PicturePath} 
                 onChange={event => this.handleFormChange(event)}/>
                <label htmlFor="PageCount">Antal sider</label>
                <input id="PageCount"
                value={this.state.book.PageCount} 
                onChange={event => this.handleFormChange(event)}/>
                <label htmlFor="Publisher">Forlag</label>
                <input id="Publisher"
                value={this.state.book.Publisher} 
                onChange={event => this.handleFormChange(event)}/>
                <label htmlFor="PublishedOn">Udgivelsesdato</label>
                <input id="PublishedOn"
                value={this.state.book.PublishedOn} 
                onChange={event => this.handleFormChange(event)}/>
                <label htmlFor="Status">Status</label>
                <input id="Status"
                value={this.state.book.Status} 
                onChange={event => this.handleFormChange(event)}/>
                <label htmlFor="DefaultRentalDays">Standard Udlånsdage</label>
                <input id="DefaultRentalDays"
                value={this.state.book.DefaultRentalDays} 
                onChange={event => this.handleFormChange(event)}/>
                <label htmlFor="BooksInStock">Antal på lager</label>
                <input id="BooksInStock"
                value={this.state.book.BooksInStock} 
                onChange={event => this.handleFormChange(event)}/>


                <label htmlFor="Genre">Genre</label>
                <input id="Genre"/>

                <h5>Nuværrende udlån</h5>
                <ul>
                    <li>rental1</li>
                    <li>rental2</li>
                    <li>rental3</li>
                </ul>
                <button>Gem</button>
            </div>
        </div>
        )}
}