import React, { Component } from 'react';
import './../style/test.css';

export class Test extends Component {
  static displayName = Test.name;
  constructor() {
    super();
    this.state = {
      bookId: undefined,
      userId: undefined,
      userLevel: undefined,
      book: {},
      user: {},
      lend: {}
    }
  }


  async componentDidMount() {
    const book = await this.getBookById();
    this.setState({ book: book });
    const getUserById = await this.getUserById();
    this.setState({ user: getUserById });

    console.log(this.state.book);
    console.log(this.state.user);
  }

  /*
    ====================
    Book functions
    ====================
  */

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

    //Dummy data
    /*
    return {
      id: 0,
      title: "Harry Potter",
      summary: "lorem ipsum ...",
      genre: "fantasy",
      picturePath: "./picture1.png",
      pagesTotal: 100,
      author: "JK rowling",
      publisher: "Gyldendal",
      releaseDate: "01-01-2000",
      status: 10,
      lendPeriodeLimit: 31
    }
    */
  }

  /**
   * 
   * @param {object} book 
   * @returns {boolean} state
   */
  createNewBook = (book) => {
    console.log(book);
    /*
    fetch('/api/book/' + this.props.match.params.id)
    .then(function (response) {
      return response.json();
    }).then((response) => {
      console.log(response[0])
      if(response.state === true){
        return true;
      } else {
        return false;
      }
    });
    */
    //Dummy data
    return {
      id: 0,
      title: "Harry Potter",
      summary: "lorem ipsum ...",
      genre: "fantasy",
      picturePath: "./picture1.png",
      pagesTotal: 100,
      author: "JK rowling",
      publisher: "Gyldendal",
      releaseDate: "01-01-2000",
      status: 10,
      lendPeriodeLimit: 31
    }
  }

  /**
   * 
   * @param {object} book 
   * @returns {boolean} state
   */
  updateBook = (book) => {

    console.log(book);
    /*
    fetch('/api/book/' + this.props.match.params.id)
    .then(function (response) {
      return response.json();
    }).then((response) => {
      if(response.state === true){
        return true;
      } else {
        return false;
      }
    });
    */
    //Dummy data
    return true;
  }

  /**
   * 
   * @param {int} bookId
   * @returns {boolean} state
   */
  deleteBook = (bookId) => {

    console.log(bookId);
    /*
    fetch('/api/book/' + this.props.match.params.id)
    .then(function (response) {
    return response.json();
    }).then((response) => {
    if(response.state === true){
    return true;
    } else {
    return false;
    }
    });
    */
    //Dummy data
    return true;
  }


  /*
    ====================
    User functions
    ====================
  */

  /**
  * Fetch a user from the database by the users primary key
  * 
  * @param  {int} id The primary key of the users you want to retreive from the database
  * @returns database data in object format
  */
  getUserById = (id) => {
    /*
      fetch('/api/user/' + this.props.match.params.id)
      .then(function (response) {
        return response.json();
      }).then((response) => {
        console.log(response[0])
  
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
        }
      });
    */
    //Dummy data
    return {
      id: 0,
      email: "harrypotter@hogwards.com",
      password: "12345",
      name: "Harry",
      fullAddress: "Hogwards, england",
      lendPeriodeLimit: 22,
      acceptance: 1,
    }
  }

  /**
   * 
   * @param {object} user 
   * @returns {boolean} state
   */
  createUser = (user) => {
    console.log(user);
      fetch('/User/AddUser', {
        method: 'POST',
        mode: "cors",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          'Email': user.email,
          'Password': user.password,
          'FullAddress': user.fullAddress
        })
      })
      .then(function (response) {
        return response.json();
      }).then((response) => {
        console.log(response[0])
        if(response.state === true){
          return true;
        } else {
          return false;
        }
      });
    //Dummy data
    return true
  }


  /**
   * SuperUsers will be able to enable a new users validity
   * @param {int} userId 
   * @returns {boolean} state
   */
  enableUser = (userId) => {
    console.log(userId);
    /*
      fetch('/api/user/' + this.props.match.params.id)
      .then(function (response) {
        return response.json();
      }).then((response) => {
        console.log(response[0]);
        if(response.state === true){
          return true;
        } else {
          return false;
        }
      });
    */
    return true;
  }


  /**
   * SuperUsers will be able to disable a users status if they are not valid
   * @param {int} userId 
   * @returns {boolean} state
   */
  disableUser = (userId) => {
    console.log(userId);
    /*
      fetch('/api/user/' + this.props.match.params.id)
      .then(function (response) {
        return response.json();
      }).then((response) => {
        console.log(response[0]);
        if(response.state === true){
          return true;
        } else {
          return false;
        }
      });
    */
    return true;
  }


  /*
    ====================
    Lend functions
    ====================
  */

  lendBook = (bookId, userId, fromDate, endDate) => {

    /*
      fetch('/api/user/' + this.props.match.params.id)
      .then(function (response) {
        return response.json();
      }).then((response) => {
        console.log(response[0])
        if(response.state === true){
          return true;
        } else {
          return false;
        }
      });
    */
    return true;
  }

  render() {
    return (
      <div>
        <h1>Library CMS!</h1>
        <p>Functionality page</p>
        <div className="grid_container">
          <h3>Lån en bog</h3>
          <p>Find en bog på siden og se om du kan låne bogen.</p>
          <div><button onClick={this.lendBook.bind(this, this.state.lend)}>Click here</button></div>
          <h3>Opret Bruger</h3>
          <p>Opret bruger på hjemmesiden for at låse op for yderligere funktionalitet</p>
          <div><button onClick={this.createUser.bind(this, this.state.user)}>Click here</button></div>
          <h3>Opret ny bog</h3>
          <p>Opret bog til udvalget af bøger der kan reserveres via hjemmesiden.</p>
          <div><button onClick={this.createNewBook.bind(this, this.state.book)}>Click here</button></div>
          <h3>Rediger bog</h3>
          <p>Rediger bog i udvalget af bøger der kan reserveres via hjemmesiden.</p>
          <div><button onClick={this.updateBook.bind(this, this.state.book)}>Click here</button></div>
          <h3>Slet bog</h3>
          <p>Slet bog fra udvalget af bøger der kan reserveres via hjemmesiden.</p>
          <div><button onClick={this.deleteBook.bind(this, this.state.bookId)}>Click here</button></div>
          <h3>Bekræft bruger</h3>
          <p>Bekræft oprettelsen af en ny bruger</p>
          <div><button onClick={this.enableUser.bind(this, this.state.userId)}>Click here</button></div>
          <h3>Afbekræfte bruger</h3>
          <p>Afbekræft hvis en bruger ikke er valid</p>
          <div><button onClick={this.disableUser.bind(this, this.state.userId)}>Click here</button></div>
          <h3>Frame1</h3>
          <p>Frame2</p>
          <div><button>Click here</button></div>
          <footer>KEK</footer>
        </div>
      </div>
    );
  }
}
