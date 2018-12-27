import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "./Book";

class SearchPage extends Component {
  state = {
    books: []
  };

  handleChange = e => {
    e.preventDefault();
    search(e.target.value)
      .then(data => {
        console.log(data);
        if (data.error) {
          console.log("erro");
          this.setState({ books: [] });
        } else {
          console.log("passou");
          this.setState({ books: data });
        }
      })
      .catch(e => {
        console.log(e);
        this.setState({ books: [] });
      });
  };

  render() {
    return (
      <div className="app">
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              {/*
    NOTES: The search from BooksAPI is limited to a particular set of search terms.
    You can find these search terms here:
    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
    you don't find a specific author or title. Every search is limited by search terms.
  */}
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.books &&
                this.state.books.map(book => (
                  <li key={book.id}>
                    <Book
                      bookInfo={book}
                      handleTypeChange={this.props.onTypeChanged}
                    />
                  </li>
                ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchPage;
