import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  render(){
    return(
      <div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">TestPage Component @ReactJS</div>

                        <div className="card-body">
                          I'm an test component!
                          <br/>
                          <Link to="/">HomePage</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Main;
