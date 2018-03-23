import React, { Component } from 'react';
import Nav from "../Nav/Nav.js";
import Title from "../Title/Title.js";
import Header from "../Header/Header.js";
import AddLeague from "../AddLeague/AddLeague.js";
import Cards from "../Cards/Cards.js";
import Footer from "../Footer/Footer.js";


class Landing extends Component {
  render() {
    return (
      <div className = "Landing">
        <Nav />
        <Title />
        <Header />
        <AddLeague />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default Landing;