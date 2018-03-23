import React, { Component } from 'react';
import axios from "axios";

class Home extends Component {
    getBackendProtectedData() {
        axios({
            url: "/api",
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem("token")
            }
        })
        .then(resp => {
            console.log(resp);
        })
        .catch(err => {
            console.error(err);
        })
    }
  render() {
    this.getBackendProtectedData();
    return (
      <div>
       Home
      </div>
    );
  }
}

export default Home;
