import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const MainPage = ({ books, onTypeChanged }) => {
  const currBooks = books.filter(book => book.shelf === "currentlyReading");
  const wantBooks = books.filter(book => book.shelf === "wantToRead");
  const readBooks = books.filter(book => book.shelf === "read");

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              type="Currently Reading"
              books={currBooks}
              onTypeChanged={onTypeChanged}
            />
            <Shelf
              type="Want to Read"
              books={wantBooks}
              onTypeChanged={onTypeChanged}
            />
            <Shelf
              type="Read"
              books={readBooks}
              onTypeChanged={onTypeChanged}
            />
          </div>
        </div>
        <Link className="open-search" to="/search">
          Add a book
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
