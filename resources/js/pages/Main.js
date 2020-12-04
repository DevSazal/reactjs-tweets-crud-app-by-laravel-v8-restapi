import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Pagination from "react-js-pagination";
import moment from 'moment'; // to convert timestamp to human format


class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      tweets: [],
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 5,
      // for new tweet
      message: '',
      user_id: 1,
      result: '',
      error: []
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleTweetSubmit = this.handleTweetSubmit.bind(this);
  }

  UNSAFE_componentWillMount(){
    axios.get('/api/tweet').then(response => {
      this.setState({
        tweets: response.data.data,
        activePage: response.data.current_page,
        itemsCountPerPage: response.data.per_page,
        totalItemsCount: response.data.total
      });
    }).catch(error => {
      console.log(error);
    })
  }

  // Pagination
  handlePageChange(pageNumber){
    console.log('active page is '+pageNumber);
    console.log('/api/tweet?page='+pageNumber);

       axios.get('/api/tweet?page='+pageNumber)
        .then(response => {
            this.setState({
               tweets: response.data.data,
               activePage: response.data.current_page,
               itemsCountPerPage: response.data.per_page,
               totalItemsCount: response.data.total
           });
        });

  }

  // handle Message Typing
  handleMessageChange(e){
    this.setState({message: e.target.value});
  }
  // Handle Tweet Form Submit
  handleTweetSubmit(e){
    e.preventDefault();
    const request = {
      message: this.state.message,
      user_id: this.state.user_id
    }
    // merge new entry to object
      let tweets = this.state.tweets;
      let lenght = tweets.lenght;
    // end merge new entry to object

    axios.post('/api/tweet-store', request)
    .then(response => {
      this.setState({
        result: response.data,
        message: ''
      });

      // merge new entry to object
        tweets.pop(); //The pop() method removes the last element
        tweets.splice(0,0, this.state.result);
        console.log(tweets);
        this.setState({ tweets: tweets });
      // end merge new entry to object

      console.log('Tweet has been posted.');
    }).catch(error => {
      console.log(error);
      this.setState({ error: error.response.data })
    });
  }

  render(){
    let value;
    console.log();
    return(
      <div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">

                    <form onSubmit={this.handleTweetSubmit}>
                      <div className="form-group">
                        <label><b>What is in your mind?</b></label>
                        <textarea className="form-control" onChange={this.handleMessageChange}
                          id="exampleFormControlTextarea1" rows="4" value={this.state.message}></textarea>
                          
                      </div>


                      <button type="submit" className="btn btn-primary">Tweet Now</button>
                    </form>

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
                    let username = tweet.user ? tweet.user.username : 'maliha_mou';
                    value = <div key={i}><div className="card" >
                        <div className="card-body">
                          <h4><Link to="/test">{tweet.message}</Link></h4>
                          <br/>

                        </div>
                        <div className="card-header"><b>@{username}</b> | <span className="sp-color">{moment(tweet.created_at).fromNow()}</span></div>
                    </div><br/></div>;
                    return value;
                  })}

                </div>

                <div className="d-flex justify-content-center mt-10">
                    <Pagination
                       // hideNavigation
                        //hideFirstLastPages
                        prevPageText='Prev'
                        nextPageText='Next'
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                        onChange={this.handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                    />
                </div>
            </div>

        </div>
      </div>
    );
  }
}

export default Main;
