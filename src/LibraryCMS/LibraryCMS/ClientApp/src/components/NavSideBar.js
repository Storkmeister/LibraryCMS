import React, { Component } from 'react';
import "./../style/layout.css";
import { Link } from "react-router-dom";
export class NavSideBar extends Component {
  static displayName = NavSideBar.name;

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
                <li><Link to={'/test'}>Fantasy</Link></li>
                <li><Link to={'/counter'}>Horror</Link></li>
                <li><Link to={'/fetch-data'}>Romantic</Link></li>
              </ul>
          </details>
        </nav>
    );
  }
}
