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
          <details>
            <summary>
              Books
            </summary>
              <ul>
                {
                  this.state.genres.map((item, key) => {
                    return <li key={key}><Link to={`/books/category/${item.Id}`}>{item.Name}</Link></li>
                  })
                  
                }
              </ul>
          </details>
          <details>
            <summary>
              Music
            </summary>
              <ul>
                <li><Link to={'/test'}>Fantasy</Link></li>
                <li><Link to={'/counter'}>Horror</Link></li>
                <li><Link to={'/fetch-data'}>Romantic</Link></li>
              </ul>
          </details>
          <details>
            <summary>
              Content sides
            </summary>
              <ul>
                <li><Link to={'/test'}>Fantasy</Link></li>
                <li><Link to={'/counter'}>Horror</Link></li>
                <li><Link to={'/fetch-data'}>Romantic</Link></li>
              </ul>
          </details>
          <details>
            <summary>
              Archive
            </summary>
              <ul>
                <li><Link to={'/test'}>Fantasy</Link></li>
                <li><Link to={'/counter'}>Horror</Link></li>
                <li><Link to={'/fetch-data'}>Romantic</Link></li>
              </ul>
          </details>
          <details>
            <summary>
              About us
            </summary>
              <ul>
                <li><Link to={'/'}>Front page</Link></li>
                <li><Link to={'/search'}>Search list</Link></li>
                <li><Link to={'/item'}>Display item</Link></li>
                <li><Link to={'/test'}>test</Link></li>
              </ul>
          </details>
        </nav>
    );
  }
}
