/* eslint-disable react/no-typos */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  img, type, title, author, handleTypeChange,
}) => (
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${img})`,
        }}
      />
      <div className="book-shelf-changer">
        <select value={type} onChange={e => handleTypeChange(e.target.value, title)}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="curr">Currently Reading</option>
          <option value="want">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{title}</div>
    <div className="book-authors">{author}</div>
  </div>
);

Book.propTypes = {
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  handleTypeChange: PropTypes.func.isRequired,
};

export default Book;
