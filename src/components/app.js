import React, {Component } from "react";
import BookList from "../containers/book-list";
import BookDetail from "../containers/book-details";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render(){
    return(
      <div className="row">
        <div className="container">
          <div className="col-sm-12">
          <BookList />
          <BookDetail />
        </div>
        </div>
      </div>
    );
  }
}