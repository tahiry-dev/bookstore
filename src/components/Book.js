import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, handleRemoveBook }) {
  const {
    title,
    category,
  } = book;

  return (
    <div className="list_of_books">
      <div className="book_info">
        <div className="book_info_header">
          <span className="book_info_category">{category}</span>
          <p className="book_title">{title}</p>
          <span className="book_author">Author</span>
        </div>
        <div className="book_info_bottom">
          <p>Comment</p>
          <button type="button" onClick={() => handleRemoveBook(book)}>Remove</button>
          <p>Edit</p>
        </div>
      </div>
      <div className="book_progress">
        <div className="rounded-border" />
        <div className="book_progress-text">
          <h4>80%</h4>
          <span>Completed</span>
        </div>
      </div>
      <div className="book_update">
        <span>Current Chapter</span>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
