import React, { Component } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import MyDatePicker from './../components/DatePicker';
import './../style/displayitem.css';

export class DisplayItem extends Component {
    static displayName = DisplayItem.name;
    constructor(){
        super();
        this.state = {
            item: {
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
            date: new Date()
        };
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    async componentDidMount(){
        let item = await this.getBookById(this.props.match.params.id);
        //Handle date format
        item.PublishedOn = this.parseDate(item.PublishedOn);
        this.setState({item: item});
    }

    handleDateChange(date){
        //const dateFormatted = moment(date).format();
        this.setState({date: date});
    }

    parseDate = date => {
        return moment(date).format("DD MMMM YYYY");
    }

    calcEndDate(startDate, periode) {
        return moment(startDate).add(periode, 'days').toDate();
    }

    /**
     * Fetch a book from the database by the books primary key
     * 
     * @param  {int} id The primary key of the book you want to retreive from the database
     * @returns database data in object format
     */
    getBookById = async (id) => {

        const result = await fetch(`/Book/GetBook/${parseInt(id)}`,{
            method:"get"
        })
        .then(function (response) {
            return response.json();
        }).then((response) => {
            console.log(response)
            return response;
        });
        return result
    }
        

    setStartDate = () => {

    }

    render(){

        

        return (
        <div>
            <div className="item-grid">
                <img alt="image"/>
                <div>
                    <h4>{this.state.item.Title}</h4>
                    <p>{this.state.item.Resume}</p>
                </div>
                <table id="item-table">
                    <tbody>
                        <tr>
                            <td>Forfatter:</td>
                            <td>{this.state.item.Author}</td>
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
                    <MyDatePicker 
                        selectedDate={this.state.date} 
                        endDate={this.calcEndDate(this.state.date, this.state.item.DefaultRentalDays)} 
                        onDateChange={this.handleDateChange} 
                    />
                    <button>Lån</button>
                </div>
            </div>
            
        </div>
        )}
}