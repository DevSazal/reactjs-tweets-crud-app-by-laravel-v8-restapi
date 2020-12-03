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
                        <div className="card-header">MainPage Component @ReactJS</div>

                        <div className="card-body">
                        <Link to="/test">TestPage</Link>
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
