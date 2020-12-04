import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import Pagination from "react-js-pagination";


class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      tweets: [],
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount: 1,
      pageRangeDisplayed: 5
    };
    this.handlePageChange = this.handlePageChange.bind(this);
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

  render(){
    let value;
    console.log();
    return(
      <div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">

                    <form action="">
                      <div className="form-group">
                        <label><b>What is in your mind?</b></label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
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
                    value = <div key={i}><div className="card" >
                        <div className="card-body">
                          <h4><Link to="/test">{tweet.message}</Link></h4>
                          <br/>

                        </div>
                        <div className="card-header"><b>@{tweet.user.username}</b></div>
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
