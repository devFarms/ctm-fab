import React, { Component } from 'react';
import NavTwo from "../Nav/NavTwo.js";
import Title from "../Title/Title.js";
import Footer from "../Footer/Footer.js";
import "./Homepage.css"
import MyForm from './forms.js';
import {render} from 'react-dom';

class Home extends Component {
    render() {
        return (
            <div className="App Site">
                <div className="Site-content">

                    <NavTwo />
                    <Title />
                    <div className="sign-in">
                    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#register">
  Join the Movement
</button>
<div className="modal fade" id="register" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Register as New User</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
      <div class="form-group">
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"/>
  </div>
  <div class="form-group">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  
  <div className="form-check">
  <label className="radio-inline"/>
  <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/> Stay signed in

  <label className="radio-inline"/>
  <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/> Forgot Password
  </div>
    <div>
  <button type="submit" class="btn btn-primary">Create Account</button>
  </div>
</form>
      </div>
    </div>
  </div>
</div>
                        <br />
                        <br />
                        <div>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                SIGN IN!
                        </button>

                            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">SIGN INTO GREATNESS!</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <MyForm />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Home; 