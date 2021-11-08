import React, { Component } from 'react';
import "./../style/layout.css";
import { Link } from "react-router-dom";
export class NavSideBar extends Component {
  static displayName = NavSideBar.name;



async componentDidMount(){
  const genres = await this.getAllGenres();
  console.log(genres);
}


getAllGenres = async () => {
  return await fetch(`/book/getAllGenres`,{
    method:"get"
  })
  .then(function (response) {
    return response.json();
  }).then((response) => {
    console.log(response)
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
                <li><Link to={'/test'}>Fantasy</Link></li>
                <li><Link to={'/counter'}>Horror</Link></li>
                <li><Link to={'/fetch-data'}>Romantic</Link></li>
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
              </ul>
          </details>
        </nav>
    );
  }
}
