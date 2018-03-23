import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Homepage/Homepage";
import landing from "./components/Landing/Landing";
import profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav.js";
import NavTwo from "./components/Nav/NavTwo.js";
import Title from "./components/Title/Title.js";
import Header from "./components/Header/Header.js";
import AddLeague from "./components/AddLeague/AddLeague.js";
import Footer from "./components/Footer/Footer.js";
import ProtectedRoute from "./components/ProtectedRoute";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App Site">
          <div>
            <ProtectedRoute exact path="/" component={Home} />
            <Route exact path="/Landing" component={landing} />
            <Route exact path="/Home" component={Home} />
          </div>
        </div>
      </Router>

    )
  }
};

export default App;