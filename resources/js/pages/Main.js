import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      tweets: []
    };
  }

  UNSAFE_componentWillMount(){
    axios.get('/api/tweet').then(response => {
      this.setState({
        tweets: response.data
      });
    }).catch(error => {
      console.log(error);
    })
  }

  render(){
    let value;
    console.log();
    return(
      <div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">MainPage Component @ReactJS</div>

                        <div className="card-body">
                          <Link to="/test">TestPage</Link>
                          <br/>

                        </div>
                    </div>
                </div>
            </div>
            <br/>

            <div className="row justify-content-center">
                <div className="col-md-12">
                  {/* this.state.tweets.map( (tweet, i) => {
                    value = <h4 key={i}>{tweet.message} <b>@{tweet.user.name}</b></h4>;
                    return value;
                  }) */}
                  {this.state.tweets.map( (tweet, i) => {
                    value = <div className="card" key={i}>
                        <div className="card-body">
                          <h4><Link to="/test">{tweet.message}</Link></h4>
                          <br/>

                        </div>
                        <div className="card-header"><b>@{tweet.user.name}</b></div>
                    </div>;
                    return value;
                  })}

                </div>
            </div>

        </div>
      </div>
    );
  }
}

export default Main;
