import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';
import './../style/bookForm.css';
import { TextField } from '@mui/material';
import moment from 'moment';

export class BookForm extends Component {
    static displayName = BookForm.name;
    constructor(){
        super();
        this.state = {
            book: {
                Id: undefined,
                Title: "",
                Resume: "",
                PicturePath: '',
                PageCount: "",
                Publisher: "",
                PublishedOn: '',
                Status: "",
                DefaultRentalDays: "",
                BooksInStock: "",
                Author: "",
                Genres: ['test'],
                Rentals: []
            },
            books: [
            ],
            selectedBook: {
                Title: "Vælg bog",
                Id: undefined
            },
            allGenres: [],
            selectedGenres: []
        };
    }

    async componentWillMount(){
        const books =  await this.getAllBooks();
        const genres = await this.getAllGenres();

        this.setState({allGenres: genres});
        this.setState({books: books});
    }

    async componentDidUpdate(){
        if(this.state.selectedBook.Id !== this.state.book.Id && this.state.selectedBook.Id !== undefined){
            let book = await this.getBookById(this.state.selectedBook.Id);
            //Handle date format
            book.PublishedOn = this.parseDate(book.PublishedOn);
            this.setState({book: book});
        }
    }

    handleSelector = (e, value) => {
        this.setState({selectedBook: value});
    }

    handleFormChange = (e) =>{
        let book = this.state.book;
        book[e.currentTarget.id] = e.currentTarget.value;
        this.setState({book: book})
    }

    handleChipSelectorChange = (e, value) =>{
        let book = this.state.book;
        
        for(let genre of e.target.value){
            const item = {GenreId: genre}
            book.Genres.push(item);
        }
        this.setState({book: book})


        
        this.setState({selectedGenres: e.target.value});
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
                    renderInput={(params) => <TextField {...params} label={props.selectedBook} variant="outlined" />}
              />
            } else {
                element = <div></div>;
            }
            return element
        }

        return (
        <div>
            <div className="bookform-container">
                <h5>Bog formular</h5>
                <ComboBox type={this.props.type} data={this.state.books} handleEvent={this.handleSelector} selectedBook={this.state.selectedBook.Title}/>
                
                <TextField id="Title" label="Title" variant="outlined" 
                    value={this.state.book.Title} 
                    onChange={event => this.handleFormChange(event)}
                />
                <TextField id="PicturePath" label="Upload et coverbillede" variant="outlined" 
                    value={this.state.book.PicturePath} 
                    onChange={event => this.handleFormChange(event)}
                />
                <TextField id="Author" label="Forfatter" variant="outlined" 
                    value={this.state.book.Author} 
                    onChange={event => this.handleFormChange(event)}
                />
                <TextField id="BooksInStock" label="Antal fysiske bøger" variant="outlined" 
                    value={this.state.book.BooksInStock} 
                    onChange={event => this.handleFormChange(event)}
                />
                <TextField id="PageCount" label="Sidetal" variant="outlined" 
                    value={this.state.book.PageCount} 
                    onChange={event => this.handleFormChange(event)}
                />
                <TextField id="Status" label="Lånestatus" variant="outlined" 
                    value={this.state.book.Status} 
                    onChange={event => this.handleFormChange(event)}
                />
                <TextField id="Publisher" label="Forlag" variant="outlined" 
                    value={this.state.book.Publisher} 
                    onChange={event => this.handleFormChange(event)}
                />
                <FormControl id="Genre-form-control" sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-chip-label">Genre</InputLabel>
                    <Select
                        labelId="demo-multiple-chip-label"
                        id="Genres"
                        multiple
                        value={this.state.selectedGenres}
                        onChange={(event, value) => this.handleChipSelectorChange(event, value)}
                        input={<OutlinedInput id="select-multiple-chip" label="Genre" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                            </Box>
                        )}
                    >
                        {this.state.allGenres.map((Item) => (
                            <MenuItem
                            key={Item.Id}
                            value={Item.Name}
                            >
                            {Item.Name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField id="PublishedOn" label="Udgivelsesdato" variant="outlined" 
                    value={this.state.book.PublishedOn} 
                    onChange={event => this.handleFormChange(event)}
                />
                <TextField id="DefaultRentalDays" label="Tilladte lånedage" variant="outlined" 
                    value={this.state.book.DefaultRentalDays} 
                    onChange={event => this.handleFormChange(event)}
                />
                <TextField id="Resume" label="Resumé" multiline variant="outlined"  rows={4}
                    value={this.state.book.Resume} 
                    onChange={event => this.handleFormChange(event)}
                />
                
                

                {/*
                
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

                */}
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