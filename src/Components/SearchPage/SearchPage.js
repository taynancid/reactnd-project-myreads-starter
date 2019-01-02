import React, { Component } from "react";
import "../../App.css";
import "./SearchPage.css";
import { Link } from "react-router-dom";
import { search } from "../../BooksAPI";
import Book from "../Book/Book";

class SearchPage extends Component {
  state = {
    books: []
  };

  handleChange = e => {
    const { taggedBooks } = this.props;
    e.preventDefault();
    search(e.target.value)
      .then(data => {
        console.log(data);
        if (data.error) {
          this.setState({ books: [] });
        } else {
          var bookList = data.map(
            obj => taggedBooks.find(o => o.id === obj.id) || obj
          );
          //merge state coming from taggedbooks with untagged
          this.setState({ books: bookList });
        }
      })
      .catch(e => {
        this.setState({ books: [] });
      });
  };

  render() {
    const { onTypeChanged } = this.props;
    return (
      <div className="app">
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
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
                    <Book bookInfo={book} handleTypeChange={onTypeChanged} />
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
