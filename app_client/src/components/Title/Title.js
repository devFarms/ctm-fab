import React, {Component} from "react";
import './Title.css';


class Title extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Catch the Match</h1>
              <br/>
              <h3 className="catch-line">Following your favorite teams has never been easier...</h3>
            </div>
          </div>
        )
    }
}

export default Title;