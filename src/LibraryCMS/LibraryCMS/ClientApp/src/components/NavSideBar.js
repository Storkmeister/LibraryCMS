import React, { Component } from 'react';
import { Link } from "react-router-dom";
export class NavSideBar extends Component {
  static displayName = NavSideBar.name;
  constructor(){
    super();
    this.state = {
      genres: []
    }
  }
  



async componentDidMount(){
  const genres = await this.getAllGenres();
  this.setState({genres: genres});
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


  render () {
    return (
        <nav>
          <details open="true">
            <summary>
              Bøger
            </summary>
              <ul>
                {
                  this.state.genres.map((item, key) => {
                    return <li key={key}><Link to={`/books/category/${item.Id}`}>{item.Name}</Link></li>
                  })
                  
                }
              </ul>
          </details>
         
          <details open="true">
            <summary>
              Sider
            </summary>
              <ul>
                <li><Link to={'/'}>About us</Link></li>
                <li><Link to={'/search'}>Kontakt</Link></li>
              </ul>
          </details>
        </nav>
    );
  }
}
