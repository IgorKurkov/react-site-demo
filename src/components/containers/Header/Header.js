import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper indigo darken-3">
            <a href="/" className="brand-logo">
              John Show
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/">How it works</Link></li>
              <li><Link to="/calendar">Calendar</Link></li>
              <li><Link to="/contacts">Contact us</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
