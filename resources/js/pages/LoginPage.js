import React, { Component } from 'react';
import api from './util/api';
import {logIn} from './util/auth';
import { Redirect } from "react-router-dom";

class LoginPage extends Component {

  constructor(props){
    super(props);

    this.state = {
      login: '',
      password: '',
      error: '',
      redirect: false
    };
    this.updateFormInput = this.updateFormInput.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  updateFormInput(e){
      e.persist();
      this.setState({ [e.target.name]: e.target.value });
  }

  signIn(e){
      e.preventDefault();
      const request = {
        login: this.state.login,
        password: this.state.password
      }

          api().post('/login', request).
          then(response => {
                // console.log();
                logIn();
                // console.log("logIn()");
                console.log(response.data.username);
                sessionStorage.setItem('user', JSON.stringify(response.data) );
                localStorage.setItem('spa', response.data.username);
                this.setState({ redirect : true});

          }).catch(error => {
            console.log(error.response);
            this.setState({ error: error.response.data })
          });

  }

  render(){

    if(this.state.redirect){
      return (<Redirect to={'/'} />)
    }

    let classgroup;
    if(this.state.error.message){
      classgroup = ' is-invalid';
    }else {
      classgroup = '';
    }
    return(
      <div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>
                    <form method="POST">
                      <div className="form-group">
                        <label><b></b></label>
                        <input aria-label="Username or Email" name="login" type="text"
                               onChange={this.updateFormInput}
                               className={"form-control "+classgroup}
                               placeholder="Username/Email" />

                      </div>
                      <div className="form-group">
                        <label><b></b></label>
                        <input aria-label="Password" name="password" type="password"
                               onChange={this.updateFormInput}
                               className={"form-control "+classgroup}
                               placeholder="Password" />

                      </div>


                      <button type="submit" onClick={this.signIn} className="btn btn-primary">Sign In</button>
                    </form>

                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
