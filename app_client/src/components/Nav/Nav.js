import React, {Component} from "react";
import "./Nav.css";

 class Nav extends Component {
     render() {
         return (
             <div>
                 <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                    <a className="navbar-brand"> 
                
                    <img className="trophy" src="./images/trophy.png" />
                   
                    </a>
                    

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Profile <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sign Out</a>
                    </li>
                   
                    </ul>
                   
        </div>
        </nav>
    </div>
         )
     }
 }


export default Nav;