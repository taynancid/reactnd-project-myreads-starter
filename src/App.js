import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import { Route } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import SearchPage from "./Components/SearchPage/SearchPage";
import { getAll, update } from "./BooksAPI";

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    getAll().then(data => this.setState({ books: data }));
  }

  onTypeChanged = (book, shelf) => {
    console.log(`${book.title} changed to ${shelf}`);
    update(book, shelf).then(
      getAll().then(data => this.setState({ books: data }))
    );
  };

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <MainPage
              books={this.state.books}
              onTypeChanged={this.onTypeChanged}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => <SearchPage onTypeChanged={this.onTypeChanged} />}
        />
      </div>
    );
  }
}

export default BooksApp;
