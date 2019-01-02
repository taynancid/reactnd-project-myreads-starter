/* eslint-disable react/no-typos */
import React from "react";
import "./Book.css";
import PropTypes from "prop-types";

const Book = ({ bookInfo, handleTypeChange }) => {
  var bookImage = !bookInfo.imageLinks
    ? "https://upload.wikimedia.org/wikipedia/pt/e/ed/Shrek%28personagem%29.jpg"
    : bookInfo.imageLinks.thumbnail;

  var bookShelf = !bookInfo.shelf ? "none" : bookInfo.shelf;

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${bookImage})`
          }}
        />
        <div className="book-shelf-changer">
          <select
            value={bookShelf}
            onChange={e => handleTypeChange(bookInfo, e.target.value)}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{bookInfo.title}</div>
      <div className="book-authors">{bookInfo.authors}</div>
    </div>
  );
};

Book.propTypes = {
  bookInfo: PropTypes.object.isRequired,
  handleTypeChange: PropTypes.func.isRequired
};

export default Book;
