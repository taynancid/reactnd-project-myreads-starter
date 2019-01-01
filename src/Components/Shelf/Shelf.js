import React from "react";
import PropTypes from "prop-types";
import Book from "../Book/Book";
import "./Shelf.css";

const Shelf = ({ books, type, onTypeChanged }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{type}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.title}>
            <Book bookInfo={book} handleTypeChange={onTypeChanged} />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

Shelf.propTypes = {
  books: PropTypes.object.isRequired,
  onTypeChanged: PropTypes.func.isRequired
};

export default Shelf;
