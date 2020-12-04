import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './../api.png';

class Header extends Component {
  render(){
    return(
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div className="container">
                <Link className="navbar-brand" to="/">
                  <img src={logo} className="app-logo" alt="logo" /> ReactJS Laravel Tweet App (API)
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto">

                    </ul>


                    <ul className="navbar-nav ml-auto">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/">HomePage</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/test">TestPage</Link>
                                </li>

                            <li className="nav-item dropdown">
                                <Link id="navbarDropdown" className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                    Control
                                </Link>

                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/logout" >
                                        Logout
                                    </Link>

                                    <form id="logout-form" action="" method="POST" className="d-none">

                                    </form>
                                </div>
                            </li>

                    </ul>
                </div>
            </div>
        </nav>
        <br/>
      </div>
    );
  }
}

export default Header;
