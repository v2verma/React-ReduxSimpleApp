import React, {Component} from "react";
import {connect} from "react-redux";
import {selectBook} from "../actions/index";
import {bindActionCreators} from "redux";

class BookList extends Component {

  renderList() {
    return this.props.books.map((book)=>{
      return(
        <li className="list-group-item" 
          onClick={()=> this.props.selectedBook(book)}>
          {book.title}
        </li>
      )
    })
  }

  render(){
    return(
      <div className="col-sm-4">
        <ol className="list-group">
          {this.renderList()}
        </ol>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectedBook : selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);