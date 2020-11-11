import React, { Component } from "react";
import {Link} from "react-router-dom"

class Tabs extends Component {
  render() {
    return (
      <nav className="tabs">
        <ul>
          <li>
            <Link to="/movies">
              MOVIES
            </Link>
          </li>
          <li>
            <Link to="/results">
              SEARCH RESULTS
            </Link>
          </li>
          <li>
            <Link to="/tvshows">
              TV SHOWS
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Tabs;
