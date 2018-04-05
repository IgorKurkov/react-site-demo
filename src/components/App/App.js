import React from "react";
import "./App.css";
import { Header, Main, Footer } from '../containers';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
