import React from 'react';
import {Link } from 'react-router-dom';
import './footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer indigo darken-3">
          <div className="footer-copyright">
            <div className="container">
              © 2014 Copyright Text
              {/* <a class="grey-text text-lighten-4 right" href="/">More Links</a> */}
              <Link className="grey-text text-lighten-4 right" to="/">How it works </Link>
              <Link className="grey-text text-lighten-4 right" to="/calendar">Calendar </Link>
              <Link className="grey-text text-lighten-4 right" to="/contacts">Contact us </Link>
            </div>
          </div>
        </footer>
    );
  }
}