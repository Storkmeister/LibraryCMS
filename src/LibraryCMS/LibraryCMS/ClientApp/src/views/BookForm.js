import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AuthService from './../components/AuthService';
import Autocomplete from '@mui/material/Autocomplete';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import './../style/bookForm.css';
import { TextField } from '@mui/material';
import moment from 'moment';

const Input = styled('input')({
    display: 'none',
  });

  let Auth = new AuthService();

export class BookForm extends Component {
    static displayName = BookForm.name;
    constructor(){
        super();
        this.state = {
            book: {
                Title: "",
                Resume: "",
                PicturePath: '/book/image.png',
                PageCount: 1,
                Publisher: "",
                PublishedOn: moment().format(),
                Status: 1,
                DefaultRentalDays: 1,
                BooksInStock: 1,
                Author: "",
                Genres: [],
                Rentals: []
            },
            books: [
            ],
            selectedBook: {
                Title: "Vælg bog",
                Id: undefined
            },
            allGenres: [],
            selectedGenres: [],
            uploadFile: {}
        };
    }

    async componentWillMount(){
        const books =  await this.getAllBooks();
        const genres = await this.getAllGenres();

        this.setState({allGenres: genres});
        this.setState({books: books});
    }

    async componentDidUpdate(){
        if(this.state.selectedBook.Id !== this.state.book?.Id && this.state.selectedBook.Id !== undefined){
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
        this.setState({selectedGenres: e.target.value});
    }


    handlePictureUpload = async (e) => {
        console.log(e.target.files[0]);
        this.setState({uploadFile: e.target.files[0]});
        const response = await this.savePicture(e.target.files[0]);
        console.log(response);
    }

    handleSaveBook = async (e) => {
        let book = this.state.book;
        //Resolve genres from names to IDs

        const response = await this.createBook(book);
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

      savePicture = async (image) => {
        const data = new FormData();
        data.append('Picture', image);
        return await fetch(`/Genre/GetGenres`,{
            method:"POST",
            headers: {'Content-Type': 'multipart/form-data'},
            body: data

        })
        .then(function (response) {
            return response.json();
        }).then((response) => {
            console.log(response);
            return response;
        }).catch(error => {
            console.log(error);
            return error;
        });
    }

    /**
   * 
   * @param {object} book 
   * @returns {boolean} state
   */
    createBook = (book) => {
    fetch('/Book/CreateBook', {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${Auth.getToken()}`,
        },
        body: JSON.stringify(book)
      })
      .then(function (response) {
        return response.json();
      }).then((response) => {
        console.log(response)
        if(response.state === true){
          return true;
        } else {
          return false;
        }
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
                <div>
                <TextField
                    disabled
                    id="filled-disabled"
                    label="Coverbillede"
                    variant="filled"
                    value={this.state.book.PicturePath}
                />
                    <label htmlFor="contained-button-file">
                        <Input 
                            accept="image/*" 
                            id="contained-button-file" 
                            type="file"
                            onChange={this.handlePictureUpload} 
                        />
                        <Button variant="contained" component="span">
                            Upload
                        </Button>
                    </label>
                </div>
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
            
                <Button variant="contained" size="large" onClick={this.handleSaveBook}>
                    Large
                </Button>
            </div>
        </div>
        )}
}