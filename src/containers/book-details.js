import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return (
        <div className="container" style={{ marginTop: "2%" }}>
          <div className="row">
            <div className="col-md-4">
              Select a book to get started 
            </div>
          </div>
        </div>
        );
    }
    return (
      <div className="container" style={{ marginTop: "2%" }}>
        <div className="row">
          <div className="col-md-4">
            <br />
            <h4>Details for Book : </h4>
            <div>Title : {this.props.book.title}</div>
            <div>Pages : {this.props.book.pages}</div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
